import * as interfaces from '../lib/notion/interfaces'

import styles from '../styles/mystyles.module.scss'

const buildHeadingId = heading => heading.RichTexts.map((richText: interfaces.RichText) => richText.Text.Content).join().trim()

const TocLink = ({ blocks }) => {
  const istoc = blocks.filter((b: interfaces.Block) => b.Type === 'table_of_contents')
	const headings = blocks.filter((b: interfaces.Block) => b.Type === 'heading_1' || b.Type === 'heading_2' || b.Type === 'heading_3')

  if (istoc.length === 0) {
    return null
  }
  return (
    <div className={styles.subtableOfContents}>
			<div>▼ 目次</div>
      {headings.map((headingBlock: interfaces.Block) => {
        const heading = headingBlock.Heading1 || headingBlock.Heading2 || headingBlock.Heading3

        let indentClass = ''
        if (headingBlock.Type === 'heading_2') {
          indentClass = 'indent-1'
        } else if (headingBlock.Type === 'heading_3') {
          indentClass = 'indent-2'
        }

        return (
          <a href={`#${buildHeadingId(heading)}`} className={`${styles[indentClass]}`} key={headingBlock.Id}>
            <div key={headingBlock.Id}>
              {heading.RichTexts.map((richText: interfaces.RichText) => richText.PlainText).join('')}
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default TocLink
