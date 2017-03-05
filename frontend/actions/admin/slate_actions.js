export const SlateConstants = {
  UPLOAD_SLATE_CSV: 'UPLOAD_CSV',
  FETCH_SLATES: 'FETCH_SLATES',
  RECEIVE_SLATES: 'RECEIVE_SLATES',
  FETCH_SLATE: 'FETCH_SLATE',
  RECEIVE_SLATE: 'RECEIVE_SLATE',
  DELETE_SLATE: 'DELETE_SLATE',
  RECEIVE_DELETE_SLATE: 'RECEIVE_DELETE_SLATE',
  CREATE_SLATE: 'CREATE_SLATE',
  SET_SLATE: 'SET_SLATE'
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