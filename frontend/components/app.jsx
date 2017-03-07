import React from 'react'
import { connect } from 'react-redux'

// Material UI
import Snackbar from 'material-ui/Snackbar'

// Actions
import { closeSnackbar } from 'actions/snackbar_actions'
import { openModal } from 'actions/modal_actions'

// Components
import SnackbarMore from 'components/modals/snackbar_more'

// Plugins
import isEmpty from 'lodash/isEmpty'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.onActionTouchTap = this.onActionTouchTap.bind(this)
  }
  
  onActionTouchTap () {
    if (this.props.snackbar.opts.more) {
      this.props.openModal()
    } else {
      this.props.closeSnackbar()
    }
  }
  
  parseSnackbarAction () {
    if (this.props.snackbar.opts.more) {
      return 'MORE'
    } else {
      return 'GOTCHA'
    }
  }

  render () {
    return (
      <div>
        { this.props.children }

        <Snackbar
          open={ this.props.snackbar.open }
          action={ this.parseSnackbarAction() }
          autoHideDuration={ 5000 }
          message={ this.props.snackbar.message }
          onRequestClose={ this.props.closeSnackbar }
          onActionTouchTap={ this.onActionTouchTap }
        />
      
        <SnackbarMore />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  snackbar: state.snackbar
})

const mapDispatchToProps = (dispatch) => ({
  closeSnackbar: () => dispatch(closeSnackbar()),
  openModal: () => dispatch(openModal('snackbarMore'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)