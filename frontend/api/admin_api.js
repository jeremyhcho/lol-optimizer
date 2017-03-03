import Axios from 'axios'

const basePath = '/api/v1/admin'

const AdminApi = {
  uploadSlateCsv: (file) => (
    () => Axios.post(`${basePath}/`, file)
  ),
  fetchSlates: (dateParams) => (
    () => Axios.get(`${basePath}/slates`, { params: dateParams })
  ),
  fetchSlate: (slateId, params) => (
    () => Axios.get(`${basePath}/slates/${slateId}`, { params: params })
  ),
  deleteSlate: (slateId) => (
    () => Axios.delete(`${basePath}/slates/${slateId}`)
  )
}

export default AdminApi
