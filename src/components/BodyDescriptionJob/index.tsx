import Button from '../shared/Button'
import {
  StylesBodyDescriptionJob,
  StylesNameJob
} from './BodyDescriptionJob.styles'
import Text from '../shared/Text'
import { DotOutline } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import DescriptionWithList from '../DescriptionWithList'
import { JobProps } from 'src/Pages/Jobs'

const BodyDescriptionJob = ({ job }: { job: JobProps }) => {
  const { gray600 } = useTheme()
  return (
    <StylesBodyDescriptionJob className="content">
      <StylesNameJob title="name job" className="nameJob">
        <div>
          <div className="timeAndContract">
            <Text as="paragraph">{job.postedAt}</Text>
            <DotOutline size={24} weight="fill" color={gray600} />
            <Text as="paragraph">{job.contract}</Text>
          </div>
          <Text as="title">{job.position}</Text>
          <Text as="link">{job.location}</Text>
        </div>
        <Button label="Apply Now" variant="primary" />
      </StylesNameJob>
      <section title="description job">
        <Text as="paragraph">{job.description}</Text>
      </section>

      <DescriptionWithList
        title="Requirements"
        description={job.requirements.content}
        typeList="ul"
        list={job.requirements.items}
      />

      <DescriptionWithList
        title="What You Will Do"
        description={job.role.content}
        typeList="ul"
        list={job.role.items}
      />
    </StylesBodyDescriptionJob>
  )
}

export default BodyDescriptionJob
