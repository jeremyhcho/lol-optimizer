// APIs
import SessionsApi from './sessions_api'
import UsersApi from './users_api'
import AdminApi from './admin_api'

const Api = {}

Api.Sessions = SessionsApi
Api.Users = UsersApi
Api.Admin = AdminApi

export default Api
