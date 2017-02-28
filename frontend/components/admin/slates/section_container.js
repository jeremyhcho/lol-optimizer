import { connect } from 'react-redux'

import Section from './section'

import { uploadSlateCsv, fetchSlates } from 'actions/admin/slate_actions'

const mapStateToProps = state => ({
  slates: state.admin.slates.slatesList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  uploadSlateCsv: (file) => dispatch(uploadSlateCsv(file)),
  fetchSlates: (dateParams) => dispatch(fetchSlates(dateParams))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Section)