import { PropsWithChildren } from 'react'

import { cn } from '@/utils/clsx'

import styles from './MainWrapper.module.scss'

interface MainWrapperProps extends PropsWithChildren {
	className?: string
}

/**
 * Компонент MainWrapper оборачивает дочерние элементы
 * и применяет общие стили.
 *
 * @param {MainWrapperProps} props - Свойства компонента.
 * @returns {JSX.Element} Элемент div с применёнными стилями.
 */
export function MainWrapper({ children, className }: MainWrapperProps) {
	return <div className={cn(styles.main_wrapper, className)}>{children}</div>
}
