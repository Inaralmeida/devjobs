import axios from 'axios'

export const get = async () => {
  const response = await axios.get('src/API/data.json', {
    headers: { Accept: 'application/json' }
  })

  return response.data
}
