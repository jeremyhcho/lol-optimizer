const _nullModal = {
  snackbarMore: false, 
  createSlate: false
}

const ModalReducer = (state = _nullModal, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, [action.modalName]: true }
      
    case 'CLOSE_MODAL':
      return { ...state, [action.modalName]: false }

    default:
      return state;
  }
}

export default ModalReducer
