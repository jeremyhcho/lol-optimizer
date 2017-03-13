import Axios from 'axios'

const basePath = '/api/v1/users'

const UsersApi = {
  post: (user) =>(
    () => Axios.post(`${basePath}/`, user)
  )
}

export default UsersApi
