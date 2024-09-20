export function getCourseWord(count: number) {
	switch (count) {
		case 1:
		case 21:
		case 31:
		case 41:
			return `${count} курс`
		case 2:
		case 3:
		case 4:
		case 22:
		case 23:
		case 24:
		case 32:
		case 33:
		case 34:
		case 42:
		case 43:
		case 44:
			return `${count} курса`
		default:
			return `${count} курсов`
	}
}
