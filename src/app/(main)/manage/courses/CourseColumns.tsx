'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/common/badge/Badge'

import { ICourse } from '@/types/course.interface'

import { formatDate } from '@/utils/date/format-date'

export const coursesColumns: ColumnDef<ICourse>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
		cell: ({ row }) => {
			return `#${row.original.id}`
		}
	},
	{
		accessorKey: 'createdAt',
		header: 'Дата создания',
		cell: ({ row }) => {
			return formatDate(row.original.createdAt)
		}
	},
	{
		accessorKey: 'name',
		header: 'Название'
	},
	{
		accessorKey: 'views',
		header: 'Просмотры'
	},
	{
		accessorKey: 'isPublished',
		header: 'Статус',
		cell: ({ row }) => {
			const isPublished = row.getValue('isPublished') || false

			return (
				<Badge variant={isPublished ? 'primary' : 'outline'}>
					{isPublished ? 'Публичный' : 'Черновик'}
				</Badge>
			)
		}
	}
]
