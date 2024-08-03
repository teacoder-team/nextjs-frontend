/**
 * Функция formatDate форматирует строку даты в формат "дд месяц гггг в чч:мм".
 *
 * Параметры:
 * - dateString (string): Строка даты в формате, поддерживаемом конструктором Date.
 *
 * @returns {string} Отформатированная строка даты.
 */
export function formatDate(dateString: string) {
	const date = new Date(dateString)

	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	}

	return date
		.toLocaleString('ru-RU', options)
		.replace(', ', ' в ')
		.replace(' г.', '')
}
