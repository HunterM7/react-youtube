import React from 'react'
import SidebarRow from './SidebarRow/SidebarRow'

import styles from './Sidebar.module.scss'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined'
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'

const Sidebar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.firstBlock}>
				<SidebarRow
					selected
					Icon={HomeOutlinedIcon}
					title='Home'
					path='/'
				/>
				<SidebarRow
					Icon={ExploreOutlinedIcon}
					title='Trending'
					path='trending'
				/>
				<SidebarRow
					Icon={SubscriptionsOutlinedIcon}
					title='Subscription'
				/>
			</div>
			<hr className={styles.divider} />
			<div className={styles.firstBlock}>
				<SidebarRow
					Icon={VideoLibraryOutlinedIcon}
					title='Library'
				/>
				<SidebarRow
					Icon={RestoreOutlinedIcon}
					title='History'
				/>
				<SidebarRow
					Icon={SmartDisplayOutlinedIcon}
					title='Your videos'
				/>
				<SidebarRow
					Icon={WatchLaterOutlinedIcon}
					title='Watch later'
				/>
				<SidebarRow
					Icon={ThumbUpOutlinedIcon}
					title='Liked videos'
				/>
				<SidebarRow
					Icon={ExpandMoreOutlinedIcon}
					title='Show more'
				/>
			</div>
			<hr className={styles.divider} />
		</div>
	)
}

export default Sidebar
