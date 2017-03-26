export const ModalConstants = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

export const openModal = (modalName, opts = {}) => ({
  type: ModalConstants.OPEN_MODAL,
  modalName,
  opts
})

export const closeModal = () => ({
  type: ModalConstants.CLOSE_MODAL
})