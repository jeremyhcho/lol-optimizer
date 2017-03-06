export const SlateConstants = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

export const openModal = (modalName) => ({
  type: SlateConstants.OPEN_MODAL,
  modalName
})

export const closeModal = (modalName) => ({
  type: SlateConstants.CLOSE_MODAL,
  modalName
})