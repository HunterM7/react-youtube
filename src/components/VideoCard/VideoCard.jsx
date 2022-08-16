import React from 'react'

import styles from './VideoCard.module.scss'
import Avatar from '@mui/material/Avatar'

const VideoCard = ({
	title,
	views,
	channel,
	timestamp,
	videoDuration,
	avatar,
	preview,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.preview}>
				<img
					className={styles.preview__img}
					src={preview}
					alt='Video preview'
				/>
				<div className={styles.preview__time}>
					{videoDuration}
				</div>
			</div>
			<div className={styles.info}>
				<Avatar
					className={styles.info__avatar}
					src={avatar}
				/>
				<div className={styles.info__box}>
					<h4 className={styles.info__title}>{title}</h4>
					<p className={styles.info__channel}>{channel}</p>
					<p className={styles.info__viewsAndDate}>
						{views} • {timestamp}
					</p>
				</div>
			</div>
		</div>
	)
}

export default VideoCard
