import React from 'react'
import { connect } from 'react-redux'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Actions
import { closeModal } from 'actions/modal_actions'
import { fetchTeam } from 'actions/admin/team_actions'

// Material UI
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

// Components
import Loading from 'components/shared/loading'
import TeamStatMainSection from './main'

// Plugins
import isEmpty from 'lodash/isEmpty'

class ViewTeamStatDetailsModal extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      teamId: 0,
      section: 'main'
    }
  }
  
  componentWillReceiveProps (newProps) {
    if (newProps.teamId && newProps.teamId != this.state.teamId) {
      this.props.fetchTeam(newProps.teamId, {
        includes_stats: true,
        includes_matches: true,
        serializer_options: {
          with_matches: true
        }
      })
    }

    this.setState({ teamId: newProps.teamId })
  }
  
  renderDetails () {
    if (this.props.isFetching) {
      return <Loading />
    } else {
      return (
        <div></div>
      )
    }
  }
  
  renderTab () {
    if (this.state.section == 'main') {
      return <TeamStatMainSection />
    }
  }
  
  teamHeader () {
    if (!isEmpty(this.props.team)) {
      return (
        <div>
          { `${this.props.team.name} | ${this.props.team.league}` }
        </div>
      )
    } else {
      return 'TEAM DETAILS'
    }
  }

  render () {
    const teamDetailsActions = [
      <RaisedButton
        label="Done"
        onTouchTap={ this.props.closeModal }
      />
    ]

    return (
      <Dialog
        titleStyle={{ letterSpacing: '1px' }}
        title={ this.teamHeader() }
        actions={ teamDetailsActions }
        modal={ true }
        open={ this.props.isOpen }
        onRequestClose={ this.props.closeModal }
        autoScrollBodyContent={ true }
        bodyStyle={{ padding: '65px 0 0', minHeight: '270px' }}
        className='team-stat-details-modal'
        contentStyle={{ minWidth: '900px', overflowX: 'hidden' }}
      >
        <Row style={{ width: '100%', height: '100%', minHeight: '270px' }}>
          <Col xs={ 12 }>
            { this.renderTab() }
          </Col>
        </Row>
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.modal.viewTeamStatDetails,
  teamId: state.modal.teamId,
  team: state.admin.teams.team,
  isFetching: state.admin.teams.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  fetchTeam: (teamId, params) => dispatch(fetchTeam(teamId, params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewTeamStatDetailsModal)