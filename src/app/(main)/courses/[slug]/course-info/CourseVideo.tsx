import Image from 'next/image'

import { ICourse } from '@/types/course.interface'

import styles from './CourseInfo.module.scss'

interface CourseVideoProps {
	course: ICourse
}

export function CourseVideo({ course }: CourseVideoProps) {
	return (
		<div className={styles.video}>
			{course.chapters.length && course.chapters[0].isPublished ? (
				<iframe
					src={`https://kinescope.io/embed/${course.chapters[0].videoId}`}
					allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;'
					allowFullScreen
					className='h-full w-full'
				/>
			) : (
				<Image src={course.imageUrl} alt={course.name} fill priority />
			)}
		</div>
	)
}
