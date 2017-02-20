import { connect } from 'react-redux'

import Admin from './admin'

import { uploadSlateCsv } from 'actions/admin/admin_actions.js'

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  uploadSlateCsv: (file) => dispatch(uploadSlateCsv(file))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)