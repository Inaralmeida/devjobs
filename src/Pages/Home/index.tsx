import { useEffect, useState } from 'react'
import ListJobs from '../../components/ListJobs'
import { get } from '../../API/api'
import BarSearch from '../../components/BarSearch'

const Home = () => {
  const [list, setList] = useState()

  const handleGetJobs = async () => {
    const data = await get()
    setList(data)
  }
  useEffect(() => {
    handleGetJobs()
  }, [])
  return (
    <div className="container">
      <BarSearch />
      {list && <ListJobs listJobs={list} />}
    </div>
  )
}

export default Home
