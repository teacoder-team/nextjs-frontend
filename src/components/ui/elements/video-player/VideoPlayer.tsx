import styles from './VideoPlayer.module.scss'

interface VideoPlayerProps {
	videoId: string
}

/**
 * Компонент VideoPlayer отображает видеоплеер для курса.
 *
 * @param {VideoPlayerProps} props - Свойства компонента.
 * @param {string} props.videoId - Идентификатор видео для встраивания.
 *
 * @returns {JSX.Element} Элемент видеоплеера с указанным videoId.
 */
export function VideoPlayer({ videoId }: VideoPlayerProps) {
	return (
		<iframe
			src={`https://kinescope.io/embed/${videoId}`}
			allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;'
			allowFullScreen
			className={styles.player}
		/>
	)
}
