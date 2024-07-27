import * as React from 'react'

import { cn } from '@/utils/clsx'

import styles from './Input.module.scss'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(styles.input, className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }
