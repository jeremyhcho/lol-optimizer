import React from 'react'
import { connect } from 'react-redux'

// Material UI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Components
import SlatesRow from 'components/admin/slates/row'
import PusherNotification from 'utils/pusher'

// Actions
import { deleteSlate, slateStatusUpdated } from 'actions/admin/slate_actions'

class SlatesTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dropdownToggleId: 0,
      deleteConfirmationOpen: false,
      deleteConfirmationId: 0
    }

    this.toggleRowDropdown = this.toggleRowDropdown.bind(this)
    this.openConfirmation = this.openConfirmation.bind(this)
    this.closeConfirmation = this.closeConfirmation.bind(this)
    this.deleteSlate = this.deleteSlate.bind(this)
  }
  
  toggleRowDropdown (slateId) {
    if (this.state.dropdownToggleId == slateId) {
      this.setState({ dropdownToggleId: 0 })
    } else {
      this.setState({ dropdownToggleId: slateId })
    }
  }
  
  renderSlateRows () {
    if (this.props.slates.length) {
      return (
        this.props.slates.map((slate, index) => (
          <SlatesRow
            key={ index }
            slate={ slate }
            toggleRowDropdown={ this.toggleRowDropdown }
            isToggled={ this.state.dropdownToggleId == slate.id }
            openDeleteModal={ this.openConfirmation(slate.id) }
          />
        ))
      )
    } else {
      return (
        <TableRow>
          <TableRowColumn>
            There are no slates available for this time range
          </TableRowColumn>
        </TableRow>
      )
    }
  }
  
  openConfirmation (slateId) {
    return (
      (e) => {
        this.setState({
          deleteConfirmationOpen: true,
          deleteConfirmationId: slateId,
          dropdownToggleId: 0
        })
      }  
    )
  }
  
  closeConfirmation () {
    this.setState({
      deleteConfirmationOpen: false,
      deleteConfirmationId: 0
    })
  }
  
  deleteSlate (e) {
    e.preventDefault()
    this.setState({ deleteConfirmationOpen: false, deleteConfirmationId: 0 })
    this.props.deleteSlate(this.state.deleteConfirmationId)
  }
  
  render () {
    const confirmActions = [
      <FlatButton
        label="Cancel"
        primary={ true }
        onTouchTap={ this.closeConfirmation }
      />,
      <RaisedButton
        label="Submit"
        keyboardFocused={ true }
        onTouchTap={ this.deleteSlate }
      />
    ]

    return (
      <Row>
        <Col xs={ 12 }>
          <Table selectable={ false } className='slates-list'>
            <TableHeader
              displaySelectAll={ false }
              adjustForCheckbox={ false }>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Start Time</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
                <TableHeaderColumn></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            
            <TableBody
              displayRowCheckbox={ false }
              adjustForCheckbox={ false }
              showRowHover={ this.props.slates.length ? true : false }>
              { this.renderSlateRows() }>
            </TableBody>
          </Table>

          <Dialog
            title="Are you sure?"
            actions={ confirmActions }
            modal={ false }
            open={ this.state.deleteConfirmationOpen }
            onRequestClose={ this.closeConfirmation }
          >
            Deleting this slate will delete all the players and teams playing in this slate.
          </Dialog>

          <PusherNotification
            event='predictions_created'
            callback={ this.props.slateStatusUpdated }
          />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteSlate: (slateId) => dispatch(deleteSlate(slateId)),
  slateStatusUpdated: (payload) => dispatch(slateStatusUpdated(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlatesTable)