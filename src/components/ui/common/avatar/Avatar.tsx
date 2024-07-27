'use client'

import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/utils/clsx'

import styles from './Avatar.module.scss'

const Avatar = forwardRef<
	ElementRef<typeof Root>,
	ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
	<Root ref={ref} className={cn(styles.avatar, className)} {...props} />
))
Avatar.displayName = Root.displayName

const AvatarImage = forwardRef<
	ElementRef<typeof Image>,
	ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
	<Image ref={ref} className={cn(styles.image, className)} {...props} />
))
AvatarImage.displayName = Image.displayName

const AvatarFallback = forwardRef<
	ElementRef<typeof Fallback>,
	ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => (
	<Fallback ref={ref} className={cn(styles.fallback, className)} {...props} />
))
AvatarFallback.displayName = Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
