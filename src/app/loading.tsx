import { Loader } from '@/components/ui/common/loader/Loader'
import { MainWrapper } from '@/components/ui/elements/main-wrapper/MainWrapper'

/**
 * Компонент Loading отображает индикатор загрузки во время
 * асинхронных операций, таких как загрузка данных.
 *
 * @returns {JSX.Element} Элемент, содержащий индикатор загрузки.
 */
export default function Loading() {
	return (
		<MainWrapper>
			<Loader />
		</MainWrapper>
	)
}
