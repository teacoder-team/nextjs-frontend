import { Spinner } from '@nextui-org/spinner'

import { MainWrapper } from '@/components/ui/elements/main-wrapper/MainWrapper'

export default function Loading() {
	return (
		<MainWrapper>
			<Spinner size='md' color='default' />
		</MainWrapper>
	)
}
