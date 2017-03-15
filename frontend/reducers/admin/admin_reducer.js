import { combineReducers } from 'redux'

// Reducers
import SlatesReducer from 'reducers/admin/slates_reducer'
import CurrentSectionReducer from 'reducers/current_section/current_section_reducer'
import StatsReducer from 'reducers/admin/stats_reducer'

const AdminReducer = combineReducers({
  slates: SlatesReducer,
  section: CurrentSectionReducer,
  stats: StatsReducer
})

export default AdminReducer
