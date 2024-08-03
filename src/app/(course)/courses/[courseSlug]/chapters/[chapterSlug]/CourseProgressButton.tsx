import { ICourse } from '@/types/course.interface'

interface CourseProgressButtonProps {
	chapterId: string
	course: ICourse
}

export function CourseProgressButton({
	chapterId,
	course
}: CourseProgressButtonProps) {
	return <div>CourseProgressButton</div>
}
