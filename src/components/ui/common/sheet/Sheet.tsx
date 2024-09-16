'use client'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import { type VariantProps, cva } from 'class-variance-authority'
import {
	ComponentPropsWithoutRef,
	ElementRef,
	HTMLAttributes,
	forwardRef
} from 'react'

import { cn } from '@/utils/clsx'

import styles from './Sheet.module.scss'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

/**
 * Компонент SheetOverlay представляет собой затемняющий слой
 * для всплывающего окна, который анимируется при открытии и закрытии.
 */
const SheetOverlay = forwardRef<
	ElementRef<typeof SheetPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(
			styles.overlay,
			'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
		ref={ref}
	/>
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
	cn(
		styles.content,
		'data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out'
	),
	{
		variants: {
			side: {
				top: cn(
					styles.top,
					'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top'
				),
				bottom: cn(
					styles.bottom,
					'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom'
				),
				left: cn(
					styles.left,
					'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left'
				),
				right: cn(
					styles.right,
					'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
				)
			}
		},
		defaultVariants: {
			side: 'right'
		}
	}
)

/**
 * Компонент SheetContent представляет содержимое всплывающего окна.
 * Он отображает дочерние элементы и управляет их анимацией.
 */
interface SheetContentProps
	extends ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
		VariantProps<typeof sheetVariants> {}

const SheetContent = forwardRef<
	ElementRef<typeof SheetPrimitive.Content>,
	SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content
			ref={ref}
			className={cn(sheetVariants({ side }), className)}
			{...props}
		>
			{children}
		</SheetPrimitive.Content>
	</SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

/**
 * Компонент SheetHeader представляет заголовок для всплывающего окна.
 */
const SheetHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.header, className)} {...props} />
)
SheetHeader.displayName = 'SheetHeader'

/**
 * Компонент SheetTitle отображает заголовок внутри всплывающего окна.
 */
const SheetTitle = forwardRef<
	ElementRef<typeof SheetPrimitive.Title>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn(styles.title, className)}
		{...props}
	/>
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

/**
 * Компонент SheetDescription отображает описание внутри всплывающего окна.
 */
const SheetDescription = forwardRef<
	ElementRef<typeof SheetPrimitive.Description>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={cn(styles.description, className)}
		{...props}
	/>
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

/**
 * Компонент SheetFooter представляет нижнюю часть всплывающего окна.
 */
const SheetFooter = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.footer, className)} {...props} />
)
SheetFooter.displayName = 'SheetFooter'

export {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetPortal,
	SheetTitle,
	SheetTrigger
}
