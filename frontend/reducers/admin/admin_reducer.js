import { combineReducers } from 'redux'

// Reducers
import SlatesReducer from 'reducers/admin/slates_reducer'
import CurrentSectionReducer from 'reducers/current_section/current_section_reducer'

const AdminReducer = combineReducers({
  slates: SlatesReducer,
  section: CurrentSectionReducer
})

export default AdminReducer
