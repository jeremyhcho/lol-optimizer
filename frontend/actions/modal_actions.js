export const SlateConstants = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

export const openModal = () => ({
  type: SlateConstants.OPEN_MODAL
})

export const closeModal = () => ({
  type: SlateConstants.CLOSE_MODAL
})