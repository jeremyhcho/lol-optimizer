import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// Components
import PlayersSlateTable from 'components/admin/players_slates/table'

// Grid
import { Grid, Row, Col } from 'react-flexbox-grid'

// Actions
import { fetchSlate } from 'actions/admin/slate_actions'
import { openModal } from 'actions/modal_actions'

// Material UI
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

class SlateShow extends React.Component {
  constructor (props) {
    super(props)

    this.navigateToSlates = this.navigateToSlates.bind(this)
  }
  
  componentDidMount () {
    this.props.fetchSlate(
      this.props.slateId,
      { with_players: true, with_teams: true }
    )
  }

  navigateToSlates () {
    this.props.router.push('/admin/slates')
  }
  
  render () {
    return (
      <Row className='players-slates-wrapper'>
        <Col xs={ 12 } style={{ position: 'relative', padding: '0 45px' }}>
          <Row>
            <Col xs={ 12 } style={{ position: 'relative' }}>
              <RaisedButton
                label="Slates"
                icon={
                  <FontIcon
                    className='material-icons'
                    style={{ fontSize: '12px' }}>keyboard_arrow_left
                  </FontIcon>
                }
                onTouchTap={ this.navigateToSlates }
              />
            
              <h2 style={{
                color: '#9EA3B4',
                marginLeft: '30px',
                letterSpacing: '1px',
                display: 'inline-block',
                margin: '0 0 0 20px',
                lineHeight: '40px',
                verticalAlign: 'middle' }}>
                { this.props.slate ? this.props.slate.name : '' }
              </h2>
            </Col>
          </Row>
        </Col>
        
        <Col xs={ 12 } style={{ position: 'relative', padding: '0 45px 30px 45px' }}>
          <PlayersSlateTable slate={ this.props.slate } />
        </Col>
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