import Axios from 'axios'

const basePath = '/api/v1/session'

const SessionsApi = {
  post: (user) => (
    () => Axios.post(`${basePath}/`, user)
  )
}

export default SessionsApi
