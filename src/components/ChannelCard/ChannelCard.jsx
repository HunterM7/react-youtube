import React from 'react'
import Avatar from '@mui/material/Avatar'

import styles from './ChannelCard.module.scss'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const ChannelCard = ({
	avatar,
	name,
	verified,
	subs,
	numOfVideos,
	desc,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.avatar}>
				<Avatar
					className={styles.avatar__img}
					alt={name}
					src={avatar}
				/>
			</div>
			<div className={styles.info}>
				<h2 className={styles.info__title}>
					{name}
					<CheckCircleIcon
						className={styles.verification}
					/>
				</h2>
				<p className={styles.info__nums}>
					{subs} subscribers • {numOfVideos} videos
				</p>
				<p className={styles.info__desc}>{desc}</p>
			</div>
		</div>
	)
}

export default ChannelCard
