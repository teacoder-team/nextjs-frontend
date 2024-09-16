'use client'

import { useQuery } from '@tanstack/react-query'

import { Heading } from '@/components/ui/common/heading/Heading'
import { DashboardTable } from '@/components/ui/dashboard/dashboard-table/DashboardTable'

import courseService from '@/services/course.service'

import { coursesColumns } from './CourseColumns'

export function ManageCourses() {
	const { data: courses, isLoading } = useQuery({
		queryKey: ['courses for admin dashboard'],
		queryFn: () => courseService.findAll()
	})

	if (isLoading) return <div>Loading...</div>

	return (
		<div className='space-y-5'>
			<Heading
				title={`Все курсы (${courses?.length})`}
				description='Эта страница для управления всеми курсами на сайте.'
			/>
			<DashboardTable columns={coursesColumns} data={courses || []} />
		</div>
	)
}
