import React from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './Main.module.scss'

import RecommendedVideos from '../RecommendedVideos/RecommendedVideos'
import Sidebar from '../Sidebar/Sidebar'
import SearchPage from '../SearchPage/SearchPage'

const Main = () => {
	return (
		<div className={styles.wrapper}>
			<Routes>
				<Route path='/' element={<RecommendedVideos />} />
				<Route path='trending' element={<Sidebar />} />
				<Route
					path='search/:searchValue'
					element={<SearchPage />}
				/>
			</Routes>
		</div>
	)
}

export default Main
