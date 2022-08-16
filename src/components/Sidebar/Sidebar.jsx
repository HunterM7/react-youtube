import React from 'react'
import SidebarRow from './SidebarRow/SidebarRow'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<div className={styles.wrapper}>
			<SidebarRow selected Icon={HomeOutlinedIcon} title='Home' />
			<SidebarRow Icon={ExploreOutlinedIcon} title='Trending' />
			<SidebarRow
				Icon={SubscriptionsOutlinedIcon}
				title='Subscription'
			/>
		</div>
	)
}

export default Sidebar
