import { Spinner } from '@nextui-org/spinner'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/utils/clsx'

import styles from './Button.module.scss'

const buttonVariants = cva(styles.button, {
	variants: {
		variant: {
			default: styles.variant_default,
			outline: styles.variant_outline,
			secondary: styles.variant_secondary,
			ghost: styles.variant_ghost,
			link: styles.variant_link,
			primary: styles.variant_primary,
			success: styles.variant_success
		},
		size: {
			default: styles.size_default,
			sm: styles.small,
			lg: styles.size_large,
			icon: styles.size_icon
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
})

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			isLoading = false,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{isLoading && <Spinner className='mr-3' size='sm' color='white' />}
				{props.children}
			</Comp>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
