import { type VariantProps, cva } from 'class-variance-authority'
import { AlertTriangle, CheckCircleIcon } from 'lucide-react'

import { cn } from '@/utils/clsx'

import styles from './Banner.module.scss'

const bannerVariants = cva(styles.banner, {
	variants: {
		variant: {
			warning: styles.warning,
			success: styles.success
		}
	},
	defaultVariants: {
		variant: 'warning'
	}
})

interface IBanner extends VariantProps<typeof bannerVariants> {
	label: string
}

const iconMap = {
	warning: AlertTriangle,
	success: CheckCircleIcon
}

export const Banner = ({ label, variant }: IBanner) => {
	const Icon = iconMap[variant || 'warning']

	return (
		<div className={cn(bannerVariants({ variant }))}>
			<Icon className='mr-2 h-4 w-4' />
			{label}
		</div>
	)
}
