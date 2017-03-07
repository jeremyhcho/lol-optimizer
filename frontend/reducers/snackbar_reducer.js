const _nullSnackbar = {
  open: false,
  message: '',
  opts: {}
}

const SnackbarReducer = (state = _nullSnackbar, action) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return { ...state, open: true, message: action.message, opts: action.opts }
    
    case 'CLOSE_SNACKBAR':
      return _nullSnackbar
    
    default:
      return state;
  }
}

export default SnackbarReducer;
