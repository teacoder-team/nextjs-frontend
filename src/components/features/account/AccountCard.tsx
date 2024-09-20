import { LucideIcon } from 'lucide-react'

import { IconBadge } from '@/components/ui/elements/icon-badge/IconBadge'

import { getCourseWord } from '@/utils/string/get-course-word'

import styles from './Account.module.scss'

interface AccountCardProps {
	numberOfItems: number
	variant?: 'default' | 'success'
	label: string
	icon: LucideIcon
}

export function AccountCard({
	variant,
	icon: Icon,
	numberOfItems,
	label
}: AccountCardProps) {
	return (
		<div className={styles.card}>
			<IconBadge variant={variant} icon={Icon} />
			<div>
				<p className={styles.label}>{label}</p>
				<p className={styles.value}>{getCourseWord(numberOfItems)}</p>
			</div>
		</div>
	)
}
