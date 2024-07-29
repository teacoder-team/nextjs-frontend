import type { PropsWithChildren } from 'react'

import styles from './Auth.module.scss'

/**
 * Компонент AuthLayout определяет макет страницы авторизации,
 * включая фоновое изображение, которое меняется случайным образом.
 *
 * @param {PropsWithChildren<unknown>} props - Свойства макета, включая дочерние элементы.
 * @returns {JSX.Element} Элемент макета страницы авторизации.
 */
export default function AuthLayout({ children }: PropsWithChildren<unknown>) {
	const images = [
		'image-1.jpg',
		'image-2.jpg',
		'image-3.jpg',
		'image-4.jpg',
		'image-5.jpg',
		'image-6.jpg',
		'image-7.jpg',
		'image-8.jpg',
		'image-9.jpg',
		'image-10.jpg',
		'image-11.jpg'
	]
	const randomIndex = Math.floor(Math.random() * images.length)

	return (
		<div
			className={styles.background}
			style={{
				backgroundImage: `url('/images/auth/${images[randomIndex]}')`
			}}
		>
			<div className={styles.wrapper}>{children}</div>
		</div>
	)
}
