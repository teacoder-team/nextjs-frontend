import { type VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

import { cn } from '@/utils/clsx'

import styles from './Badge.module.scss'

const badgeVariants = cva(styles.badge, {
	variants: {
		variant: {
			default: styles.default,
			secondary: styles.secondary,
			destructive: styles.destructive,
			outline: styles.outline,
			primary: styles.primary
		}
	},
	defaultVariants: {
		variant: 'default'
	}
})

export interface BadgeProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

/**
 * Компонент Badge отображает метки с различными стилями для
 * обозначения статусов или уведомлений. Поддерживает несколько
 * вариантов оформления, включая 'default', 'secondary', 'destructive',
 * 'outline' и 'primary'.
 *
 * @param {BadgeProps} props - Свойства компонента, включая классы и другие атрибуты.
 * @returns {JSX.Element} Элемент бейджа.
 */
function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	)
}

export { Badge, badgeVariants }
