'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CheckCircle, XCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/common/button/Button'

import { useConfettiStore } from '@/hooks/useConfettiStore'

import { progressService } from '@/services/progress.service'

import type { Course } from '@/types/course.interface'

import styles from './ProgressButton.module.scss'

interface ProgressButtonProps {
	chapterId: string
	course: Course
	isCompleted: boolean
}

export function ProgressButton({
	chapterId,
	course,
	isCompleted
}: ProgressButtonProps) {
	const router = useRouter()
	const confetti = useConfettiStore()

	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['create or update log course'],
		mutationFn: (isCompleted: boolean) =>
			progressService.newProgress(chapterId, isCompleted),
		onSuccess(data) {
			toast.success('Прогресс обновлён')
			queryClient.invalidateQueries({
				queryKey: ['chapter by slug for course layout']
			})
			queryClient.invalidateQueries({
				queryKey: ['chapter by slug']
			})
			queryClient.invalidateQueries({
				queryKey: ['find user progress']
			})

			if (data.userProgress.isCompleted && !data.nextChapter) {
				confetti.onOpen()
			}

			if (data.nextChapter && data.userProgress.isCompleted) {
				router.push(
					`/courses/${course.slug}/chapters/${data.nextChapter.slug}`
				)
			}
		},
		onError(error) {
			if (error.message) {
				toast.error(error.message)
			} else {
				toast.error('Ошибка при обновлении прогресса')
			}
		}
	})

	const Icon = isCompleted ? XCircle : CheckCircle

	return (
		<Button
			onClick={() => mutate(isCompleted)}
			isLoading={isPending}
			disabled={isPending}
			type='button'
			variant={isCompleted ? 'outline' : 'success'}
			className={styles.progress_button}
		>
			{isCompleted ? 'Не выполнено' : 'Продолжить'}
			<Icon />
		</Button>
	)
}
