import React from 'react'
import { connect } from 'react-redux'

// Material UI
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

// Grid
import { Row, Col } from 'react-flexbox-grid'

// Actions
import { closeModal } from 'actions/modal_actions'

class SnackbarMore extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      message: ''
    }
  }
  
  componentWillReceiveProps (newProps) {
    if (!this.state.message) {
      this.setState({ message: newProps.message })
    }
  }
  
  render () {
    const errorDetailsActions = [
      <RaisedButton
        label='Done'
        keyboardFocused={ true }
        onTouchTap={ this.props.closeModal }
      />
    ]

    return (
      <Dialog
        title='ERROR'
        titleStyle={{ letterSpacing: '1px' }}
        actions={ errorDetailsActions }
        modal={ false }
        open={ this.props.isOpen }
        onRequestClose={ this.props.closeModal }
        contentStyle={{ minWidth: '725px', overflowX: 'hidden' }}
        className='error-details-modal'
        autoScrollBodyContent={ true }>
        
        <Row style={{ paddingTop: '40px' }}>
          <Col xs={ 8 } xsOffset={ 2 }>
            <h5 style={{ textAlign: 'center' }}>{ this.state.message }</h5>
          </Col>
        </Row>
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.modal.snackbarMore,
  message: state.snackbar.opts.more
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal('snackbarMore'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackbarMore)