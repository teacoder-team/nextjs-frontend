'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import { type VariantProps, cva } from 'class-variance-authority'
import {
	ComponentPropsWithoutRef,
	ElementRef,
	HTMLAttributes,
	forwardRef
} from 'react'

import { cn } from '@/utils/clsx'

import styles from './Progress.module.scss'

const progressVariants = cva(styles.progress, {
	variants: {
		variant: {
			default: styles.default,
			success: styles.success
		}
	},
	defaultVariants: {
		variant: 'default'
	}
})

export interface ProgressProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof progressVariants> {}

type CombinedProgressProps = ProgressProps &
	ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>

/**
 * Компонент Progress отображает индикатор прогресса.
 *
 * Свойства:
 * - value (число): Текущий процент завершения (от 0 до 100).
 * - variant (строка): Определяет стиль индикатора прогресса. Возможные значения:
 *   - 'default': стандартный стиль.
 *   - 'success': стиль для успешного завершения.
 *
 * @param {CombinedProgressProps} props - Свойства компонента, включая классы и другие атрибуты.
 * @returns {JSX.Element} Элемент индикатора прогресса.
 */
const Progress = forwardRef<
	ElementRef<typeof ProgressPrimitive.Root>,
	CombinedProgressProps
>(({ className, value, variant, ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={cn(
			'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
			className
		)}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className={cn(progressVariants({ variant }))}
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
