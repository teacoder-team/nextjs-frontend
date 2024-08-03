import axios, { CreateAxiosDefaults } from 'axios'

import { SERVER_URL } from '@/config/api.config'

import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'

import { errorCatch, getContentType } from './api.helper'

/**
 * Конфигурация по умолчанию для экземпляров axios, включая
 * базовый URL, заголовки и настройки для работы с куками.
 */
const axiosOptions: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: getContentType(),
	withCredentials: true
}

/**
 * Экземпляр axios с базовыми настройками для обычных запросов.
 */
export const axiosClassic = axios.create(axiosOptions)

/**
 * Экземпляр axios с базовыми настройками, который будет использоваться
 * для авторизованных запросов.
 */
export const instance = axios.create(axiosOptions)

// Интерсептор для обработки запросов, добавляющий accessToken в заголовки.
instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

// Интерсептор для обработки ответов, который управляет ошибками и обновляет токены при необходимости.
instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (
					errorCatch(error) === 'jwt expired' ||
					errorCatch(error) === 'Refresh токен не прошёл'
				)
					removeFromStorage()
			}
		}

		throw error
	}
)
