import Button from '../shared/Button'
import Text from '../shared/Text'
import { StylesFooterJob } from './FooterJob.styles'

const FooterJob = ({
  position,
  company
}: {
  position: string
  company: string
}) => {
  return (
    <StylesFooterJob className="">
      <div className="content">
        <div>
          <Text as="subtitle">{position}</Text>
          <Text as="paragraph">{company} digital inc</Text>
        </div>
        <Button variant="primary" label="Apply Now" />
      </div>
    </StylesFooterJob>
  )
}

export default FooterJob
