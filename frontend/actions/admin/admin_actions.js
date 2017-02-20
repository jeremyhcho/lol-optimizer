export const AdminConstants = {
  UPLOAD_SLATE_CSV: 'UPLOAD_CSV'
}

export const uploadSlateCsv = (file) => ({
  type: AdminConstants.UPLOAD_SLATE_CSV,
  file
})