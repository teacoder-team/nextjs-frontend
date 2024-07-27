import { type VariantProps, cva } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/utils/clsx'

import styles from './Loader.module.scss'

const iconVariants = cva(styles.base, {
	variants: {
		variant: {
			default: styles.variant_default,
			primary: styles.variant_primary
		},
		size: {
			default: styles.size_default,
			sm: styles.size_small
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
})

interface LoaderProps extends VariantProps<typeof iconVariants> {}

export const Loader = ({ variant, size }: LoaderProps) => {
	return <LoaderCircle className={cn(iconVariants({ variant, size }))} />
}
