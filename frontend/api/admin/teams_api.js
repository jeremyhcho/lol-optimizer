import Axios from 'axios'

const basePath = '/api/v1/teams'

const TeamsApi = {
  fetchTeam: (teamId, params) => (
    () => Axios.get(`${basePath}/${teamId}`, { params: params })
  )
}

export default TeamsApi