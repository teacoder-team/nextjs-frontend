'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { Button } from '@/components/ui/common/button/Button'
import { Input } from '@/components/ui/common/form-elements/input/Input'

import styles from './SearchInput.module.scss'

/**
 * Компонент SearchInput отображает поле поиска в шапке приложения.
 * При вводе текста и нажатии Enter происходит переход на страницу
 * результатов поиска с передачей поискового запроса в URL.
 *
 * @returns {JSX.Element} Элемент формы поиска.
 */
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
