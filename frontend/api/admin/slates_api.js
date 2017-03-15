import Axios from 'axios'

const basePath = '/api/v1/admin/slates'

const SlatesApi = {
  createSlate: (params) => (
    () => Axios.post(basePath, params)
  ),
  fetchSlates: (dateParams) => (
    () => Axios.get(basePath, { params: dateParams })
  ),
  fetchSlate: (slateId, params) => (
    () => Axios.get(`${basePath}/${slateId}`, { params: params })
  ),
  deleteSlate: (slateId) => (
    () => Axios.delete(`${basePath}/${slateId}`)
  )
}

export default SlatesApi