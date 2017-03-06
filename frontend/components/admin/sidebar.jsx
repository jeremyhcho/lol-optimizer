import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// Actions
import { sectionSelector }  from 'actions/current_section/current_section_actions'

// Material UI
import Drawer from 'material-ui/Drawer'
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import ActionFlightLand from 'material-ui/svg-icons/action/flight-land'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'

// Grid
import { Row, Col } from 'react-styled-flexboxgrid'

const sideBarOptions = [
  { name: 'Slates', icon: 'fa fa-server', route: '/admin/slates' },
  { name: 'Articles', icon: 'fa fa-newspaper-o', route: '/admin/articles' }
]

class AdminSidebar extends React.Component {
  constructor (props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (option) {
    return (e) => {
      e.preventDefault()
      this.props.selectSection(option.name)
      this.props.router.push({ pathname: option.route })
    }
  }
  
  renderSidebarOptions () {
    return (
      sideBarOptions.map((option, index) => (
        <Row key={ index }>
          <Col xs={ 12 } className='menu-icon'>
            <IconButton
              tooltip={ option.name }
              tooltipPosition='top-center'
              tooltipStyles={{ top: -5 }}
              onTouchTap={ this.handleClick(option) }>
              <FontIcon
                className={ option.icon }
                color={ this.props.location.pathname.match(option.route) ? 'white' : '#505464' }
              />
            </IconButton>
          </Col>
        </Row>
      ))
    )
  }

  render () {
    return (
      <Col className='drawer'>
        { this.renderSidebarOptions() }
      </Col>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentSection: state.admin.section.currentSection,
  ownProps: ownProps
})

const mapDispatchToProps = (dispatch) => ({
  selectSection: (sectionName) => dispatch({ type: 'SECTION_SELECTED', sectionName })
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminSidebar))
