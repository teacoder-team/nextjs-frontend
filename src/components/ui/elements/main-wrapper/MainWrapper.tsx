import type { PropsWithChildren } from 'react'

import { cn } from '@/utils/clsx'

import styles from './MainWrapper.module.scss'

interface MainWrapperProps {
	className?: string
}

export function MainWrapper({
	children,
	className
}: PropsWithChildren<MainWrapperProps>) {
	return <div className={cn(styles.main_wrapper, className)}>{children}</div>
}
