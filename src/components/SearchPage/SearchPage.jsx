import React from 'react'

import styles from './SearchPage.module.scss'

import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import ChannelCard from '../ChannelCard/ChannelCard'

const SearchPage = () => {
	return (
		<div className={styles.wrapper}>
			<button
				onClick={() =>
					console.log('This is the filter button')
				}
				className={styles.filter}
			>
				<TuneOutlinedIcon className={styles.filter__icon} />
				<h2 className={styles.filter__title}>FILTERS</h2>
			</button>

			<hr />

			<ChannelCard
				avatar='https://cdn-images-1.medium.com/max/1200/1*dX5yfQ9E4ElBnzYjaS1Yzg.png'
				name='Clever Programmer'
				verified={true}
				subs='656K'
				numOfVideos={382}
				desc='You can find awesome programming videos here! Also, expect programming tips and tricks that will take your coding skills to the...'
			/>
		</div>
	)
}

export default SearchPage
