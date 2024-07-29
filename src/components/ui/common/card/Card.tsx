import { HTMLAttributes, forwardRef } from 'react'

import { cn } from '@/utils/clsx'

import styles from './Card.module.scss'

/**
 * Компонент Card представляет собой обертку для содержимого,
 * обеспечивая общий стиль и структуру карточки.
 *
 * @param {HTMLAttributes<HTMLDivElement>} props - Свойства карточки.
 * @returns {JSX.Element} Элемент div с применёнными стилями.
 */
const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(styles.card, className)} {...props} />
	)
)
Card.displayName = 'Card'

/**
 * Компонент CardHeader представляет заголовок карточки.
 *
 * @param {HTMLAttributes<HTMLDivElement>} props - Свойства заголовка.
 * @returns {JSX.Element} Элемент div для заголовка карточки.
 */
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(styles.header, className)} {...props} />
	)
)
CardHeader.displayName = 'CardHeader'

/**
 * Компонент CardTitle отображает заголовок карточки.
 *
 * @param {HTMLAttributes<HTMLHeadingElement>} props - Свойства заголовка.
 * @returns {JSX.Element} Элемент h3 для заголовка карточки.
 */
const CardTitle = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3 ref={ref} className={cn(styles.title, className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

/**
 * Компонент CardDescription отображает описание карточки.
 *
 * @param {HTMLAttributes<HTMLParagraphElement>} props - Свойства описания.
 * @returns {JSX.Element} Элемент p для описания карточки.
 */
const CardDescription = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn(styles.description, className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

/**
 * Компонент CardContent представляет содержимое карточки.
 *
 * @param {HTMLAttributes<HTMLDivElement>} props - Свойства содержимого.
 * @returns {JSX.Element} Элемент div для содержимого карточки.
 */
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(styles.content, className)} {...props} />
	)
)
CardContent.displayName = 'CardContent'

/**
 * Компонент CardFooter представляет нижнюю часть карточки.
 *
 * @param {HTMLAttributes<HTMLDivElement>} props - Свойства нижней части.
 * @returns {JSX.Element} Элемент div для нижней части карточки.
 */
const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(styles.footer, className)} {...props} />
	)
)
CardFooter.displayName = 'CardFooter'

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
