import { useParams } from 'react-router-dom'

const Jobs = () => {
  const params = useParams()
  console.log(params)
  return <div> page Jobs</div>
}

export default Jobs
