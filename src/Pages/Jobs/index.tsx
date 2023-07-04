import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../../API/api'
import HeaderJob from '../../components/HeaderJob'
import { images } from '../../assets/logos/images'
import BodyDescriptionJob from '../../components/BodyDescriptionJob'

export type JobProps = {
  id: number
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: string
  location: string
  website: string
  apply: string
  description: string
  requirements: {
    content: string
    items: string[]
  }
  role: {
    content: string
    items: string[]
  }
}

const Jobs = () => {
  const params = useParams()
  const [job, setJob] = useState<JobProps>()

  const handleGetJob = async (params: any) => {
    const data: JobProps = await get(true, Number(params.id))
    setJob(data)
  }

  useEffect(() => {
    handleGetJob(params)
  }, [])

  return (
    <div className="container">
      {job && (
        <>
          <HeaderJob
            company={job?.company}
            image={images[job ? job?.company.toLowerCase() : 0]}
            website={job?.website}
            colorbg={job?.logoBackground}
          />
          <BodyDescriptionJob job={job} />
        </>
      )}
    </div>
  )
}

export default Jobs
