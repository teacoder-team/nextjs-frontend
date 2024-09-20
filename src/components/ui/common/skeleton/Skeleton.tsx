import { cn } from '@/utils/clsx'

import styles from './Skeleton.module.scss'

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn(styles.skeleton, className)} {...props} />
}

export { Skeleton }
