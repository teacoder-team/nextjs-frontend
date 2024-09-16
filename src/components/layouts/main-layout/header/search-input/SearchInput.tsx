'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'

import { Button } from '@/components/ui/common/button/Button'
import { Input } from '@/components/ui/common/form-elements/input/Input'

import styles from './SearchInput.module.scss'

export function SearchInput() {
	const { push } = useRouter()
	const [searchTerm, setSearchTerm] = useState('')

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		push(`/?searchTerm=${searchTerm}`)
	}

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<div className={styles.search}>
				<Input
					placeholder='Поиск курсов'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					className={styles.input}
				/>
				<Button variant='primary'>
					<Search />
				</Button>
			</div>
		</form>
	)
}
