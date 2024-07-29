import { Menu } from 'lucide-react'

import {
	Sheet,
	SheetContent,
	SheetTrigger
} from '@/components/ui/common/sheet/Sheet'

import { Sidebar } from './Sidebar'

/**
 * Компонент MobileSidebar отображает боковую панель,
 * адаптированную для мобильных устройств, с использованием
 * всплывающего окна.
 *
 * @returns {JSX.Element} Всплывающее окно с боковой панелью.
 */
export function MobileSidebar() {
	return (
		<Sheet>
			<SheetTrigger className='pr-4 transition hover:opacity-75 md:hidden'>
				<Menu />
			</SheetTrigger>
			<SheetContent side='left' className='w-72 bg-white'>
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}
