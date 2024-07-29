import { LucideIcon } from 'lucide-react'

/**
 * Интерфейс IMenuItem определяет структуру для пункта меню,
 * включая иконку, название и ссылку.
 */
export interface IMenuItem {
	icon: LucideIcon
	value: string
	link: string
}
