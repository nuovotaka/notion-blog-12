import { format } from 'date-fns'
import { MdTimer } from 'react-icons/md'

import styles from '../../styles/notion-block.module.css'

const InlineMention = ({ mention }) => {
	const type: string = mention.Mention.Type
	let text: string
	if (type === 'page') {
		if (!mention.PlainText) {
			return null
		} else {
			text = mention.PlainText

			return (
				<span className={styles.inlinemention}>
					{text}
				</span>
			)
		}
	} else if (type === 'date') {
		return null
	} else if (type === 'user') {
		text = mention.PlainText

		return (
			<span>{text}</span>
		)
	} else {
		return null
	}
}

export default InlineMention