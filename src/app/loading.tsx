import { MainWrapper } from '@/components/ui/elements/main-wrapper/MainWrapper'
import { MinLoader } from '@/components/ui/loaders/MinLoader'

/**
 * Компонент Loading отображает индикатор загрузки во время
 * асинхронных операций, таких как загрузка данных.
 *
 * @returns {JSX.Element} Элемент, содержащий индикатор загрузки.
 */
export default function Loading() {
	return (
		<MainWrapper>
			<MinLoader size='large' />
		</MainWrapper>
	)
}
