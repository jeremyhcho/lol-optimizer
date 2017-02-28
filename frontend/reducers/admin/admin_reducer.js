import { combineReducers } from 'redux'

// Reducers
import SlatesReducer from 'reducers/admin/slates_reducer'

const AdminReducer = combineReducers({
  slates: SlatesReducer,
  section: currentSectionReducer
})

export default AdminReducer
