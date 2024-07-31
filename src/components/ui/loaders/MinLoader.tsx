import { type VariantProps, cva } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/utils/clsx'

import styles from './Loaders.module.scss'

const iconVariants = cva(styles.base, {
	variants: {
		size: {
			default: styles.default,
			large: styles.small
		}
	},
	defaultVariants: {
		size: 'default'
	}
})

interface LoaderProps extends VariantProps<typeof iconVariants> {}

/**
 * Компонент MinLoader отображает индикатор загрузки
 *
 * @param {LoaderProps} props - Свойства компонента, включая размер.
 * @returns {JSX.Element} Элемент LoaderCircle с применёнными стилями.
 */
export function MinLoader({ size }: LoaderProps) {
	return <LoaderCircle className={cn(iconVariants({ size }))} />
}
