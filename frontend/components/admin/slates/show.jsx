import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// Components
import PlayersSlateTable from 'components/admin/players_slates/table'

// Grid
import { Grid, Row, Col } from 'react-flexbox-grid'

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
      <Grid>
        <PlayersSlateTable slate={ this.props.slate } />
      </Grid>
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