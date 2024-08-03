import { type VariantProps, cva } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/utils/clsx'

import styles from './Loaders.module.scss'

const loaderVariants = cva(styles.min_loader, {
	variants: {
		variant: {
			default: styles.variant_default,
			primary: styles.variant_primary
		},
		size: {
			default: styles.size_default,
			large: styles.size_large
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
})

interface LoaderProps extends VariantProps<typeof loaderVariants> {}

/**
 * Компонент MinLoader отображает индикатор загрузки
 *
 * @param {LoaderProps} props - Свойства компонента, включая вариант и размер.
 * @returns {JSX.Element} Элемент LoaderCircle с применёнными стилями.
 */
export function MinLoader({ variant, size }: LoaderProps) {
	return <LoaderCircle className={cn(loaderVariants({ variant, size }))} />
}
