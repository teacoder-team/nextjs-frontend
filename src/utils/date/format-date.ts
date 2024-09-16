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
