import React from 'react'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

// Material UI
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import Popover from 'material-ui/Popover'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'

class SlatesRow extends React.Component {
  constructor (props) {
    super(props)

    this.openDropdown = this.openDropdown.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
    this.viewSlate = this.viewSlate.bind(this)
  }
  
  openDropdown (e) {
    e.preventDefault()
    this.props.toggleRowDropdown(this.props.slate.id)
  }
  
  closeDropdown (e) {
    this.props.toggleRowDropdown(0)
  }
  
  viewSlate (e) {
    e.preventDefault()
    this.props.router.push({ pathname: `/admin/slates/${this.props.slate.id}` })
  }
  
  openDeleteModal (e) {
    e.preventDefault()
    this.props.openDeleteModal()
  }
  
  parseStatus () {
    switch (this.props.slate.status) {
      case 1:
        return 'Processing'

      case 2:
        return 'Ready'
        
      case 3:
        return 'Failed'

      default:
        return 'Processing'
    }
  }

  render () {
    return (
      <TableRow hoverable={ true }>
        <TableRowColumn>{ this.props.slate.id }</TableRowColumn>
        <TableRowColumn>{ this.props.slate.name }</TableRowColumn>
        <TableRowColumn>{ this.props.slate.start_time }</TableRowColumn>
        <TableRowColumn>{ this.parseStatus() }</TableRowColumn>
        <TableRowColumn>
          <IconMenu
            iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          >
            <MenuItem
              primaryText='View'
              leftIcon={
                <FontIcon
                  style={{ color: '#EEEEEE', fontSize: '16px', height: '16px', width: '16px' }}
                  className='material-icons'>visibility
                </FontIcon>
              }
              onTouchTap={ this.viewSlate }
              innerDivStyle={{ padding: '0px 24px 0px 74px' }}
              style={{ color: '#EEEEEE', fontSize: '14px', minHeight: '40px', lineHeight: '40px' }}
            />
            <MenuItem
              primaryText='Delete'
              leftIcon={
                <FontIcon
                  style={{ color: '#EEEEEE', fontSize: '16px', height: '16px', width: '16px' }}
                  className='material-icons'>delete_forever
                </FontIcon>
              }
              onTouchTap={ this.props.openDeleteModal }
              innerDivStyle={{ padding: '0px 24px 0px 74px' }}
              style={{ color: '#EEEEEE', fontSize: '14px', minHeight: '40px', lineHeight: '40px' }}
            />
          </IconMenu>
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