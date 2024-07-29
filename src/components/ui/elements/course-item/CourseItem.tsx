import { ICourse } from '@/types/course.interface'

interface CourseItemProps {
	course: ICourse
}

export function CourseItem({ course }: CourseItemProps) {
	return <div>{course.name}</div>
}
