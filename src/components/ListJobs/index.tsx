import { images } from '../../assets/logos/images'
import CardJob, { CardJobProps } from '../CardJob'
import { StyleListJobs } from './ListJobs.style'

type ListJobsProps = {
  listJobs: CardJobProps[]
}
const ListJobs = ({ listJobs }: ListJobsProps) => {
  return (
    <StyleListJobs className="content">
      {listJobs &&
        listJobs.map((job: CardJobProps) => {
          return (
            <CardJob
              key={job.id}
              id={job.id}
              company={job.company}
              logo={images[job.company.toLowerCase()]}
              logoBackground={job.logoBackground}
              position={job.position}
              contract={job.contract}
              postedAt={job.postedAt}
              location={job.location}
            />
          )
        })}
    </StyleListJobs>
  )
}

export default ListJobs
