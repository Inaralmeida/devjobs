import axios from 'axios'

export const get = async (filter = false, id = 0) => {

  const response = await axios.get('/src/API/data.json', {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  const data = response.data
  if (!filter) {
    return data
  } else {
    const [job] = await data.filter((job: any) => job.id === id)

    return job
  }
}


