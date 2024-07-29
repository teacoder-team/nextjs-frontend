import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { APP_URL, PUBLIC_URL } from '@/config/url.config'

import courseService from '@/services/course.service'

import { Course } from './Course'

export const revalidate = 60

/**
 * Функция generateStaticParams генерирует статические параметры для маршрутов.
 * Она получает все курсы и возвращает массив путей с их слагами.
 *
 * @returns {Promise<{ params: { slug: string } }[]>} Массив статических параметров.
 */
export async function generateStaticParams() {
	const response = await courseService.findAll()

	const paths = response.map(course => {
		return {
			params: { slug: course.slug }
		}
	})

	return paths
}

/**
 * Функция getCourse получает курс по его слагу.
 * Если курс не найден, вызывается функция notFound.
 *
 * @param { { slug: string } } params - Параметры, содержащие слаг курса.
 * @returns {Promise<ICourse | void>} Возвращает курс или вызывает notFound.
 */
async function getCourse(params: { slug: string }) {
	try {
		const course = await courseService.findBySlug(params.slug)

		return course
	} catch (error) {
		return notFound()
	}
}

/**
 * Функция generateMetadata генерирует метаданные для страницы курса.
 *
 * @param { { params: { slug: string } } } params - Параметры, содержащие слаг курса.
 * @returns {Promise<Metadata>} Объект метаданных для страницы.
 */
export async function generateMetadata({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const course = await getCourse(params)

	return {
		title: course.name,
		description: course.description,
		openGraph: {
			title: course.name,
			description: course.description,
			url: APP_URL + PUBLIC_URL.course(course.slug),
			images: [
				{
					url: APP_URL + course.imageUrl,
					width: 1280,
					height: 720,
					alt: course.name
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: course.name,
			description: course.description,
			images: [
				{
					url: APP_URL + course.imageUrl,
					width: 1280,
					height: 720,
					alt: course.name
				}
			]
		}
	}
}

/**
 * Компонент CoursePage отображает страницу конкретного курса,
 * получая данные курса по его слагу и передавая их в компонент Course.
 *
 * @param { { params: { slug: string } } } params - Параметры, содержащие слаг курса.
 * @returns {Promise<JSX.Element>} Элемент страницы курса.
 */
export default async function CoursePage({
	params
}: {
	params: { slug: string }
}) {
	const course = await getCourse(params)

	return <Course initialCourse={course} />
}
