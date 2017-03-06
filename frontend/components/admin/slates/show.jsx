import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// Components
import PlayersSlateTable from 'components/admin/players_slates/table'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Actions
import { fetchSlate } from 'actions/admin/slate_actions'

class SlateShow extends React.Component {
  constructor (props) {
    super(props)
  }
  
  componentDidMount () {
    this.props.fetchSlate(
      this.props.slateId,
      { with_players: true, with_teams: true }
    )
  }
  
  render () {
    return (
      <Row className='players-slates-wrapper'>
        <PlayersSlateTable slate={ this.props.slate } router={ this.props.router } />
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  slateId: ownProps.params.id,
  slate: state.admin.slates.slate
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSlate: (slateId, params) => dispatch(fetchSlate(slateId, params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SlateShow))