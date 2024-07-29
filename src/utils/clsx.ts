import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Функция cn объединяет классы, используя библиотеку clsx для
 * условного применения классов и tailwind-merge для устранения
 * конфликтующих классов Tailwind CSS.
 *
 * @param {...ClassValue[]} inputs - Список классов, которые нужно объединить.
 * @returns {string} Объединённая строка классов.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
