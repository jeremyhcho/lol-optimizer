import React from 'react'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

// Material UI
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

class SlatesRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.openDropdown = this.openDropdown.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
    this.editSlate = this.editSlate.bind(this)
  }
  
  openDropdown (e) {
    e.preventDefault()

    this.setState({ anchorEl: e.currentTarget })
    this.props.toggleRowDropdown(this.props.slate.id)
  }
  
  closeDropdown (e) {
    this.props.toggleRowDropdown(0)
  }
  
  editSlate (e) {
    e.preventDefault()
    this.props.router.push({ pathname: `/admin/slates/${this.props.slate.id}` })
  }
  
  openDeleteModal (e) {
    e.preventDefault()
    this.props.openDeleteModal()
  }

  render () {
    return (
      <TableRow>
        <TableRowColumn>{ this.props.slate.id }</TableRowColumn>
        <TableRowColumn>{ this.props.slate.name }</TableRowColumn>
        <TableRowColumn>{ this.props.slate.start_time }</TableRowColumn>
        <TableRowColumn>
          <FlatButton
            onTouchTap={ this.openDropdown }
            icon={ <FontIcon className='material-icons'>expand_more</FontIcon> }
          />
          <Popover
            open={ this.props.isToggled }
            anchorEl={ this.state.anchorEl }
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={ this.closeDropdown }
          >
            <Menu desktop={ true }>
              <MenuItem primaryText='Edit' onTouchTap={ this.editSlate } />
              <MenuItem primaryText='Delete' onTouchTap={ this.props.openDeleteModal } />
            </Menu>
          </Popover>
        </TableRowColumn>
      </TableRow>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  slate: ownProps.slate,
  isToggled: ownProps.isToggled
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SlatesRow))