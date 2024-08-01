import styles from './Heading.module.scss'

interface HeadingProps {
	title: string
	description?: string
}

/**
 * Компонент Heading отображает заголовок и необязательное описание.
 *
 * Свойства:
 * - title (обязательное): Текст заголовка, отображаемый крупным шрифтом.
 * - description (необязательное): Дополнительный текст, отображаемый под заголовком
 *   меньшим шрифтом для предоставления дополнительной информации.
 */
export function Heading({ title, description }: HeadingProps) {
	return (
		<div>
			<h1 className={styles.heading}>{title}</h1>
			{description && <p className={styles.description}>{description}</p>}
		</div>
	)
}
