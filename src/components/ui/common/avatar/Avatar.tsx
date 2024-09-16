'use client'

import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/utils/clsx'

import styles from './Avatar.module.scss'

/**
 * Компонент Avatar представляет собой обертку для аватара пользователя,
 * обеспечивая общий стиль и функциональность.
 *
 * @param {ComponentPropsWithoutRef<typeof Root>} props - Свойства аватара.
 * @returns {JSX.Element} Элемент аватара.
 */
const Avatar = forwardRef<
	ElementRef<typeof Root>,
	ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
	<Root ref={ref} className={cn(styles.avatar, className)} {...props} />
))
Avatar.displayName = Root.displayName

/**
 * Компонент AvatarImage отображает изображение аватара.
 *
 * @param {ComponentPropsWithoutRef<typeof Image>} props - Свойства изображения.
 * @returns {JSX.Element} Элемент изображения аватара.
 */
const AvatarImage = forwardRef<
	ElementRef<typeof Image>,
	ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
	<Image ref={ref} className={cn(styles.image, className)} {...props} />
))
AvatarImage.displayName = Image.displayName

/**
 * Компонент AvatarFallback отображает запасной контент
 * для аватара, если изображение не загружается.
 *
 * @param {ComponentPropsWithoutRef<typeof Fallback>} props - Свойства запасного контента.
 * @returns {JSX.Element} Элемент запасного контента аватара.
 */
const AvatarFallback = forwardRef<
	ElementRef<typeof Fallback>,
	ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => (
	<Fallback ref={ref} className={cn(styles.fallback, className)} {...props} />
))
AvatarFallback.displayName = Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
