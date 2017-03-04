import { combineReducers } from 'redux'

// Reducers
import SlatesReducer from 'reducers/admin/slates_reducer'
import currentSectionReducer from 'reducers/current_section/current_section_reducer'

const AdminReducer = combineReducers({
  slates: SlatesReducer,
  section: currentSectionReducer
})

export default AdminReducer
