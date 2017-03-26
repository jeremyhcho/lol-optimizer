import React from 'react'
import { connect } from 'react-redux'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Actions
import { closeModal } from 'actions/modal_actions'
import { fetchPlayer } from 'actions/admin/player_actions'

// Material UI
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import Card from 'material-ui/Card'

// Components
import Loading from 'components/shared/loading'
import PlayerStatMainSection from './main'

// Plugins
import isEmpty from 'lodash/isEmpty'

class ViewPlayerStatDetailsModal extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      playerId: 0,
      section: 'main'
    }
  }
  
  componentWillReceiveProps (newProps) {
    if (newProps.playerId && newProps.playerId != this.state.playerId) {
      this.props.fetchPlayer(newProps.playerId, {
        includes_stats: true,
        includes_matches: true,
        serializer_options: {
          with_matches: true
        }
      })
    }

    this.setState({ playerId: newProps.playerId })
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
      return <PlayerStatMainSection />
    }
  }
  
  playerHeader () {
    if (!isEmpty(this.props.player)) {
      return (
        <div>
          {
            `${this.props.player.name}` +
            ` (${this.props.player.position || 'N/A'}) | ` +
            `${this.props.player.team.name}`
          }
        </div>
      )
    } else {
      return 'PLAYER DETAILS'
    }
  }

  render () {
    const playerDetailsActions = [
      <RaisedButton
        label="Done"
        onTouchTap={ this.props.closeModal }
      />
    ]

    return (
      <Dialog
        titleStyle={{ letterSpacing: '1px' }}
        title={ this.playerHeader() }
        actions={ playerDetailsActions }
        modal={ true }
        open={ this.props.isOpen }
        onRequestClose={ this.props.closeModal }
        autoScrollBodyContent={ true }
        bodyStyle={{ padding: '65px 0 0', minHeight: '270px' }}
        className='player-stat-details-modal'
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
  isOpen: state.modal.viewPlayerStatDetails,
  playerId: state.modal.playerId,
  player: state.admin.players.player,
  isFetching: state.admin.players.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  fetchPlayer: (playerId, params) => dispatch(fetchPlayer(playerId, params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPlayerStatDetailsModal)