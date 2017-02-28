import { combineReducers } from 'redux'

// Reducers
import SessionReducer from 'reducers/session/session_reducer'
import currentSectionReducer from 'reducers/current_section/current_section_reducer'
import AdminReducer from 'reducers/admin/admin_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  admin: AdminReducer
})

export default RootReducer
