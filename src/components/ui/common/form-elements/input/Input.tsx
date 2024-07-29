import { InputHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/utils/clsx'

import styles from './Input.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * Компонент Input представляет собой текстовое поле ввода.
 *
 * @param {InputProps} props - Свойства компонента, включая тип и дополнительные атрибуты.
 * @returns {JSX.Element} Элемент input с применёнными стилями.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
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
