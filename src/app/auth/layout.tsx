import type { PropsWithChildren } from 'react'

import styles from '@/components/features/auth/Auth.module.scss'

export default function AuthLayout({ children }: PropsWithChildren<unknown>) {
	return <div className={styles.layout}>{children}</div>
}
