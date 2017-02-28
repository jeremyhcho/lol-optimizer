import Axios from 'axios'

const basePath = '/api/v1/admin'

const AdminApi = {
  uploadSlateCsv: (file) => (
    () => Axios.post(`${basePath}/`, file)
  ),
  fetchSlates: (dateParams) => (
    () => Axios.get(`${basePath}/slates`, { params: dateParams })
  )
}

export default AdminApi
