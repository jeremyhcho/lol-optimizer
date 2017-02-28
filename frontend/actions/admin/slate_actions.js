export const SlateConstants = {
  UPLOAD_SLATE_CSV: 'UPLOAD_CSV',
  FETCH_SLATES: 'FETCH_SLATES',
  RECEIVE_SLATES: 'RECEIVE_SLATES'
}

export const uploadSlateCsv = (file) => ({
  type: SlateConstants.UPLOAD_SLATE_CSV,
  file
})

export const fetchSlates = (dateParams) => ({
  type: SlateConstants.FETCH_SLATES,
  dateParams
})

export const receiveSlates = (slates) => ({
  type: SlateConstants.RECEIVE_SLATES,
  slates
})