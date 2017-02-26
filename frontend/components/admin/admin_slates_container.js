import { connect } from 'react-redux'

import AdminSlates from './admin_slates'

import { uploadSlateCsv } from 'actions/admin/admin_actions.js'

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  uploadSlateCsv: (file) => dispatch(uploadSlateCsv(file))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminSlates)