import { format } from 'date-fns'
import { MdTimer } from 'react-icons/md'

import styles from '../../styles/notion-block.module.css'

const InlineMention = ({ mention }) => {
	const type: string = mention.Mention.Type

	let date: string
	let src: any
	if (type === 'page') {
		if (!mention.PlainText) {
			return null
		} else {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			src = mention.Href

			return (
				<span className={styles.inlinemention}>
					<a href="">{mention.PlainText}</a>
				</span>
			)
		}
	} else if (type === 'date') {
		date = format(new Date(`${mention.PlainText}`), 'yyyy/MM/dd aa h:mm')

		return (
			<span className={styles.inlinemention}>
				{date} <MdTimer size={20}/>
			</span>
		)
	} else {
		return null
	}
}

export default InlineMention