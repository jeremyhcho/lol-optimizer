import { combineReducers } from 'redux'

// Reducers
import SessionReducer from 'reducers/session/session_reducer'
import AdminReducer from 'reducers/admin/admin_reducer'
import ModalReducer from 'reducers/modal_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  admin: AdminReducer,
  modal: ModalReducer
})

export default RootReducer
