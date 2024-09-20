import { type VariantProps, cva } from 'class-variance-authority'
import { LucideIcon } from 'lucide-react'

import { cn } from '@/utils/clsx'

const backgroundVariants = cva(
	'rounded-full flex items-center justify-center',
	{
		variants: {
			variant: {
				default: 'bg-sky-100',
				success: 'bg-emerald-100'
			},
			size: {
				default: 'p-2',
				sm: 'p-1'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

const iconVariants = cva('', {
	variants: {
		variant: {
			default: 'text-sky-700',
			success: 'text-emerald-700'
		},
		size: {
			default: 'h-8 w-8',
			sm: 'h-4 w-4'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
})

type TypeBackgroundVariants = VariantProps<typeof backgroundVariants>
type TypeIconVariants = VariantProps<typeof iconVariants>

interface IIconBadge extends TypeBackgroundVariants, TypeIconVariants {
	icon: LucideIcon
}

export function IconBadge({ icon: Icon, variant, size }: IIconBadge) {
	return (
		<div className={cn(backgroundVariants({ variant, size }))}>
			<Icon className={cn(iconVariants({ variant, size }))} />
		</div>
	)
}
