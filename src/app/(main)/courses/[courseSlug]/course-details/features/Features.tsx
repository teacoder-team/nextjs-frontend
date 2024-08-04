import styles from './Features.module.scss'

interface FeaturesProps {
	features: string[]
}

/**
 * Компонент Features отображает список особенностей курса.
 *
 * @param {FeaturesProps} props - Свойства компонента.
 * @param {string[]} props.features - Массив строк, описывающих особенности курса.
 *
 * @returns {JSX.Element | null} Элемент с особенностями курса или null, если список пуст.
 */
export function Features({ features }: FeaturesProps) {
	if (!features.length) return null

	return (
		<div className={styles.features}>
			<h4>🚀 Что мы реализуем в курсе?</h4>
			<p>В этом блоке вы узаете, что мы будем делать в курсе.</p>
			<ul>
				{features.map((feature, idx) => (
					<li key={idx}>{feature}</li>
				))}
			</ul>
		</div>
	)
}
