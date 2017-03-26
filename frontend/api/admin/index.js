// Admin APIs
import SlatesApi from './slates_api'
import StatsApi from './stats_api'
import PlayersApi from './players_api'
import TeamsApi from './teams_api'

const AdminApi = {}

AdminApi.Slates = SlatesApi
AdminApi.Stats = StatsApi
AdminApi.Players = PlayersApi
AdminApi.Teams = TeamsApi

export default AdminApi
