import React from 'react'

import styles from './SidebarRow.module.scss'

const SidebarRow = ({ title = 'no title', Icon, selected }) => {
	return (
		<button
			className={`
			${styles.wrapper}
			${selected && styles.selected}
		`}
		>
			<Icon className={styles.icon} />
			<h2 className={styles.title}>{title}</h2>
		</button>
	)
}

export default SidebarRow
