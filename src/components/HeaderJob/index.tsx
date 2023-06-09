import Button from '../shared/Button'
import Text from '../shared/Text'
import Avatar from '../Avatar'
import { StyleHeaderJob } from './HeaderJob.style'

type HeaderJobProps = {
  company?: string
  image?: string
  website?: string
  colorbg?: string
}

const HeaderJob = ({
  company = '',
  image = '',
  website = '',
  colorbg = ''
}: HeaderJobProps) => {
  return (
    <StyleHeaderJob className="content">
      <span className="large">
        <Avatar type="large" background={colorbg} src={image} alt={company} />
      </span>
      <span className="thumb">
        <Avatar type="thumb" background={colorbg} src={image} alt={company} />
      </span>

      <div>
        <section>
          <Text as="subtitle">{company}</Text>
          <Text as="paragraph">{website}</Text>
        </section>
        <Button variant="secondary" label="Company Site" />
      </div>
    </StyleHeaderJob>
  )
}

export default HeaderJob
