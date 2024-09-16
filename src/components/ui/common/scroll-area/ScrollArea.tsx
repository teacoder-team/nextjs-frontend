'use client'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/utils/clsx'

import styles from './ScrollArea.module.scss'

/**
 * Компонент ScrollArea предоставляет область прокрутки с кастомизируемым
 * внешним видом. Он использует библиотеку Radix UI для реализации
 * функциональности прокрутки и предоставляет возможность
 * стилизации с помощью модульных CSS-классов.
 *
 * @param {ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>} props - Свойства компонента, включая классы и другие атрибуты.
 * @returns {JSX.Element} Элемент области прокрутки.
 */
const ScrollArea = forwardRef<
	ElementRef<typeof ScrollAreaPrimitive.Root>,
	ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<ScrollAreaPrimitive.Root
		ref={ref}
		className={cn(styles.scroll_area, className)}
		{...props}
	>
		<ScrollAreaPrimitive.Viewport className='h-full w-full rounded-[inherit]'>
			{children}
		</ScrollAreaPrimitive.Viewport>
		<ScrollBar />
		<ScrollAreaPrimitive.Corner />
	</ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

/**
 * Компонент ScrollBar отображает полосу прокрутки внутри области прокрутки.
 * Он поддерживает вертикальную и горизонтальную ориентацию и использует
 * модульные CSS-классы для стилизации.
 *
 * @param {ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>} props - Свойства компонента, включая ориентацию, классы и другие атрибуты.
 * @returns {JSX.Element} Элемент полосы прокрутки.
 */
const ScrollBar = forwardRef<
	ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
	ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
	<ScrollAreaPrimitive.ScrollAreaScrollbar
		ref={ref}
		orientation={orientation}
		className={cn(
			styles.scroll_bar,
			orientation === 'vertical' && styles.vertical,
			orientation === 'horizontal' && styles.horizontal,
			className
		)}
		{...props}
	>
		<ScrollAreaPrimitive.ScrollAreaThumb className='relative flex-1 rounded-full bg-border' />
	</ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
