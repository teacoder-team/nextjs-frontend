import styles from './VideoPlayer.module.scss'

interface VideoPlayerProps {
	videoId: string
}

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
