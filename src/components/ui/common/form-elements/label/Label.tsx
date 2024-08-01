'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/utils/clsx'

import styles from './Label.module.scss'

const labelVariants = cva(styles.label)

/**
 * Компонент Label представляет собой текстовую метку для
 * связанного элемента управления формы.
 *
 * @param {ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>} props - Свойства компонента.
 * @returns {JSX.Element} Элемент метки с применёнными стилями.
 */
const Label = forwardRef<
	ElementRef<typeof LabelPrimitive.Root>,
	ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
		VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(labelVariants(), className)}
		{...props}
	/>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
