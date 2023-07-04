import { useEffect, useState } from 'react'
import ListJobs from '../../components/ListJobs'
import { get } from '../../../public/API/api'
import BarSearch from '../../components/BarSearch'
import { JobProps } from '../Jobs'

const Home = () => {
  const [list, setList] = useState([])
  const [listRender, setListRender] = useState([])
  const [valueSearch, setValueSearch] = useState('')

  function handleChange(value: string) {
    setValueSearch(value)
  }

  function searchJobs() {
    const newlist =
      valueSearch !== ''
        ? list.filter((job: JobProps) =>
            job.company.toLowerCase().includes(
              valueSearch.toLowerCase()
            ) || job.position.toLowerCase().includes(
              valueSearch.toLowerCase()
            )
          )
        : list

    setListRender(newlist)
  }

  const handleGetJobs = async () => {
    const data = await get()
    setList(data)
    setListRender(data)
  }
  useEffect(() => {
    handleGetJobs()
  }, [])
  return (
    <div className="container">
      <BarSearch
        handleChange={handleChange}
        searchJobs={searchJobs}
        valueSearch={valueSearch}
      />
      {list && <ListJobs listJobs={listRender} />}
    </div>
  )
}

export default Home
