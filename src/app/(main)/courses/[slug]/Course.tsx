import { ICourse } from '@/types/course.interface'

interface CourseProps {
	initialCourse: ICourse
}

export function Course({ initialCourse }: CourseProps) {
	return <div>Course</div>
}
