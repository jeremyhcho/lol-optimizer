const _nullModal = {
  snackbarMore: false, 
  createSlate: false,
  viewPlayerStatDetails: false,
  viewTeamStatDetails: false
}

const ModalReducer = (state = _nullModal, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, [action.modalName]: true, ...action.opts }
      
    case 'CLOSE_MODAL':
      return _nullModal

    default:
      return state;
  }
}

export default ModalReducer
