import type { Metadata } from 'next'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/common/button/Button'
import { MainWrapper } from '@/components/ui/elements/main-wrapper/MainWrapper'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Страница не существует',
	...NO_INDEX_PAGE
}

export default function NotFoundPage() {
	return (
		<MainWrapper>
			<div className='flex w-full flex-col items-center gap-y-4 text-muted-foreground'>
				<h1 className='text-xl font-semibold md:text-3xl'>
					404. Страница не найдена
				</h1>
				<p className='text-sm md:text-lg'>
					Хм, похоже, эта страница не существует.
				</p>
				<Link
					href='/'
					className={buttonVariants({
						variant: 'secondary'
					})}
				>
					Перейти на главную
				</Link>
			</div>
		</MainWrapper>
	)
}
