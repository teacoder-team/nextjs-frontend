import { cn } from '@/utils/clsx'

import { Progress } from '../../common/progress/Progress'

import styles from './ProgressBar.module.scss'

interface ProgressBarProps {
	value: number
	variant?: 'default' | 'success'
	size?: 'default' | 'sm'
}

const colorByVariant = {
	default: 'text-sky-700',
	success: 'text-emerald-700'
}

const sizeByVariant = {
	default: 'text-sm',
	sm: 'text-xs'
}

/**
 * Компонент ProgressBar отображает прогресс выполнения задачи с
 * процентным значением. Поддерживает различные варианты оформления
 * и размеры текста.
 *
 * Свойства:
 * - value (число): Процент завершения (0-100).
 * - variant (строка): Стиль ('default' или 'success').
 * - size (строка): Размер текста ('default' или 'sm').
 *
 * @returns {JSX.Element} Элемент полосы прогресса.
 */
export const ProgressBar = ({ value, variant, size }: ProgressBarProps) => {
	return (
		<div>
			<Progress className='h-2' value={value} variant={variant} />
			<p
				className={cn(
					styles.label,
					colorByVariant[variant || 'default'],
					sizeByVariant[size || 'default']
				)}
			>
				{Math.round(value)}% Выполнено
			</p>
		</div>
	)
}
