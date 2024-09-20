import { PropsWithChildren } from 'react'

import { cn } from '@/utils/clsx'

import styles from './MainWrapper.module.scss'

interface MainWrapperProps extends PropsWithChildren {
	className?: string
}

export function MainWrapper({ children, className }: MainWrapperProps) {
	return <div className={cn(styles.main_wrapper, className)}>{children}</div>
}
