import React from 'react'

import styles from './RecommendedVideos.module.scss'
import VideoCard from '../VideoCard/VideoCard'

const RecommendedVideos = () => {
	const database = [
		{
			title: `LEGS W/ LEAN BEEF PATTY`,
			views: '627K views',
			channel: 'Jesse James West',
			timestamp: '4 days ago',
			videoDuration: '8:36',
			avatar: '',
			preview:
				'https://i.ytimg.com/vi/NY0JO8GAED8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRrGxNebtnEOgCPvvnFtSbWqfbHw',
		},
		{
			title: `🔴 Let's Build a WhatsApp Clone with REACT JS for Beginners!`,
			views: '483K views',
			channel: 'Clever Programmer',
			timestamp: '2 years ago',
			videoDuration: '3:39:54',
			avatar: '',
			preview:
				'https://i.ytimg.com/vi/pUxrDcITyjg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_Jda5dMekKZH-buTERFKi4kj5aw',
		},
		{
			title: `Why You Shouldn't Eat Clean: How To Lose Fat More Effectively`,
			views: '3.5M views',
			channel: 'Jeff Nippard',
			timestamp: '2 years ago',
			videoDuration: '10:32',
			avatar: '',
			preview:
				'https://i.ytimg.com/vi/ytN366VCGls/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcKmPXnJQ06lclc_TRx4sNY_a3xQ',
		},
	]

	const videos = []

	for (let i = 0; i < 20; i++) {
		let obj = database[i % database.length]

		videos.push(
			<VideoCard
				title={obj.title}
				views={obj.views}
				channel={obj.channel}
				timestamp={obj.timestamp}
				videoDuration={obj.videoDuration}
				avatar={obj.avatar}
				preview={obj.preview}
			/>,
		)
	}

	return (
		<div>
			<h2 className={styles.title}>Recommended</h2>
			<div className={styles.videos}>{videos}</div>
		</div>
	)
}

export default RecommendedVideos
