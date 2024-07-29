/**
 * Функция getContentType возвращает объект с заголовком
 * 'Content-Type', установленным на 'application/json'.
 *
 * @returns {Object} Объект заголовков для HTTP-запросов.
 */
export const getContentType = () => ({
	'Content-Type': 'application/json'
})

/**
 * Функция errorCatch обрабатывает ошибки, возвращая сообщение
 * об ошибке из ответа сервера или сообщение по умолчанию.
 *
 * @param {any} error - Объект ошибки, полученный из запроса.
 * @returns {string} Сообщение об ошибке.
 */
export const errorCatch = (error: any): string => {
	const message = error?.response?.data?.message

	return message
		? typeof error.response.data.message === 'object'
			? message[0]
			: message
		: error.message
}
