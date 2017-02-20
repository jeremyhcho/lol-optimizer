import Axios from 'axios'

const basePath = '/api/v1/admin'

const AdminApi = {
  uploadSlateCsv: (file) => (
    () => Axios.post(`${basePath}/`, file)
  )
}

export default AdminApi
