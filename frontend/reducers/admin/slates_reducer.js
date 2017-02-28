// Actions
import { SlateConstants } from 'actions/admin/slate_actions'

const _nullSlates = Object.freeze({
  slatesList: []
})

const SlatesReducer = (state = _nullSlates, action) => {
  switch (action.type) {
    case SlateConstants.RECEIVE_SLATES:
      return { ...state, slatesList: action.slates }

    default:
      return state
  }
}



export default SlatesReducer