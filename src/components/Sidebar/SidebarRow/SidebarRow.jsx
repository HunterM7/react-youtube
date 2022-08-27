import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './SidebarRow.module.scss'

const SidebarRow = ({
	title = 'no title',
	Icon,
	selected,
	path = '/',
}) => {
	return (
		<NavLink
			className={`
			${styles.wrapper}
			${selected && styles.selected}
			`}
			to={path}
		>
			<Icon className={styles.icon} />
			<h2 className={styles.title}>{title}</h2>
		</NavLink>
	)
}

export default SidebarRow
