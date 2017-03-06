export const SnackbarActions = {
  OPEN_SNACKBAR: 'OPEN_SNACKBAR',
  CLOSE_SNACKBAR: 'CLOSE_SNACKBAR'
}

export const openSnackbar = (message, opts = {}) => ({
  type: SnackbarActions.OPEN_SNACKBAR,
  message,
  opts
})

export const closeSnackbar = () => ({
  type: SnackbarActions.CLOSE_SNACKBAR
})