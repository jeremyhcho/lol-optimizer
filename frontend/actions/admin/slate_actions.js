export const SlateConstants = {
  FETCH_SLATES: 'FETCH_SLATES',
  RECEIVE_SLATES: 'RECEIVE_SLATES',
  FETCH_SLATE: 'FETCH_SLATE',
  RECEIVE_SLATE: 'RECEIVE_SLATE',
  DELETE_SLATE: 'DELETE_SLATE',
  RECEIVE_DELETE_SLATE: 'RECEIVE_DELETE_SLATE',
  CREATE_SLATE: 'CREATE_SLATE',
  SET_SLATE: 'SET_SLATE',
  SLATES_FETCHING: 'SLATES_FETCHING',
  RESET_SLATES: 'RESET_SLATES',
  SLATE_STATUS_UPDATED: 'SLATE_STATUS_UPDATED'
}

export const fetchSlates = (dateParams) => ({
  type: SlateConstants.FETCH_SLATES,
  dateParams
})

export const fetchSlate = (slateId, params) => ({
  type: SlateConstants.FETCH_SLATE,
  slateId,
  params
})

export const setSlate = (slate) => ({
  type: SlateConstants.SET_SLATE,
  slate
})

export const receiveSlates = (slates) => ({
  type: SlateConstants.RECEIVE_SLATES,
  slates
})

export const receiveSlate = (slate) => ({
  type: SlateConstants.RECEIVE_SLATE,
  slate
})

export const deleteSlate = (slateId) => ({
  type: SlateConstants.DELETE_SLATE,
  slateId
})

export const receiveDeleteSlate = (slateId) => ({
  type: SlateConstants.RECEIVE_DELETE_SLATE,
  slateId
})

export const createSlate = (params) => ({
  type: SlateConstants.CREATE_SLATE,
  params
})

export const resetSlates = () => ({
  type: SlateConstants.RESET_SLATES
})

export const slateStatusUpdated = (payload) => ({
  type: SlateConstants.SLATE_STATUS_UPDATED,
  payload
})