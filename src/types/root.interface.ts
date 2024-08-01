/**
 * Интерфейс IBase описывает базовую структуру объекта,
 * включая идентификатор и временные метки создания и обновления.
 */
export interface IBase {
	id: string
	createdAt: string
	updatedAt: string
}
