'use client'

import styles from '../../styles/notion-block.module.scss'

const InlineMention = ({ mention }) => {
	const type: string = mention.Mention.Type
	if (type === 'page') {
		if (!mention.PlainText || mention.PlainText === 'Untitled') {
			return null
		} else {
			return (
				<span className={styles.inlinemention}>
					{mention.PlainText}
				</span>
			)
		}
	} else if (type === 'date') {
		return null
	} else if (type === 'user') {
		return (
			<span>{mention.PlainText}</span>
		)
	} else {
		return null
	}
}

export default InlineMention