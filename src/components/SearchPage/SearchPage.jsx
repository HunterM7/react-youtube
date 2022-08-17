import React from 'react'

import styles from './SearchPage.module.scss'

import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'

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
		</div>
	)
}

export default SearchPage
