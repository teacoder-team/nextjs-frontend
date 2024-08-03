import styles from './Features.module.scss'

interface FeaturesProps {
	features: string[]
}

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
