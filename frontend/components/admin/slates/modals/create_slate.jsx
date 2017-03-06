import React from 'react'
import { connect } from 'react-redux'

// Actions
import { closeModal } from 'actions/modal_actions'
import { createSlate, receiveSlate } from 'actions/admin/slate_actions'

// Material UI
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Plugins
import ReactS3Uploader from 'react-s3-uploader'

// Services
import PusherNotification from 'util/pusher'

const initialState = {
  fileUploading: false,
  isSubmitting: false,
  name: '',
  date: '',
  time: '',
  csvUrl: ''
}

class CreateSlateModal extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = initialState

    this.onUploadFinish = this.onUploadFinish.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.createSlate = this.createSlate.bind(this)
    this.slateUploaded = this.slateUploaded.bind(this)
    this.handleUploaderClick = this.handleUploaderClick.bind(this)
  }
  
  handleUploaderClick (e) {
    if (this.state.fileUploading) {
      e.preventDefault()
    }
  }

  onUploadFinish (signedUrl, file) {
    this.setState({
      fileUploading: false,
      csvUrl: `${signedUrl.signedUrl.split('?')[0]}`
    })
  }
  
  handleChange (field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }
  
  handleDateTimeChange (field) {
    return (e, dateTime) => this.setState({ [field]: dateTime })
  }
  
  createSlate () {
    this.setState({ isSubmitting: true })
    this.props.createSlate({
      csv_url: this.state.csvUrl,
      name: this.state.name,
      start_date: this.state.date,
      start_time: this.state.time
    })
  }
  
  slateUploaded (payload) {
    this.props.closeModal()
    this.setState(initialState)
    this.props.receiveSlate(payload)
  }

  render () {
    const createSlateActions = [
      <FlatButton
        label="Cancel"
        onTouchTap={ this.props.closeModal }
      />,
      <RaisedButton
        label={ this.state.isSubmitting ? 'Creating...' : 'Create' }
        disabled={ this.state.isSubmitting }
        keyboardFocused={ true }
        onTouchTap={ this.createSlate }
      />
    ]

    return (
      <Dialog
        titleStyle={{ letterSpacing: '1px' }}
        title="CREATE SLATE"
        actions={ createSlateActions }
        modal={ true }
        open={ this.props.isOpen }
        onRequestClose={ this.props.closeModal }
        autoScrollBodyContent={ true }
        bodyStyle={{ padding: '60px 0' }}
        className='create-slate-modal'
        contentStyle={{ minWidth: '725px', overflowX: 'hidden' }}
      >
        <Row className='form-field'>
          <Col xs={ 11 } xsOffset={ 1 }>
            <TextField
              hintText='Name'
              onChange={ this.handleChange('name') }
              value={ this.state.name }
            />
          </Col>
        </Row>

        <Row className='form-field'>
          <Col xs={ 5 } xsOffset={ 1 }>
            <DatePicker
              hintText='Start date'
              onChange={ this.handleDateTimeChange('date') }
            />
          </Col>

          <Col xs={ 5 }>
            <TimePicker
              hintText='Start time'
              onChange={ this.handleDateTimeChange('time') }
            />
          </Col>
        </Row>

        <Row className='form-field'>
          <Col xs={ 6 } xsOffset={ 1 }>
            <TextField
              hintText='File URL'
              onChange={ this.handleChange('csvUrl') }
              value={ this.state.csvUrl }
              style={{ width: '350px' }}
            />
          </Col>

          <Col xs={ 4 } className='slate-uploader-wrapper'>
            <ReactS3Uploader
              onProgress={ () => this.setState({ fileUploading: true })}
              signingUrl="/api/v1/admin/s3/sign"
              signingUrlMethod="GET"
              accept="text/csv"
              onFinish={ this.onUploadFinish }
              id='slate-uploader'
              onClick={ this.handleUploaderClick } />
            
            <label htmlFor='slate-uploader' className={ this.state.fileUploading ? 'disabled' : ''}>
              <i className='fa fa-file-o'></i>
              <p>{ this.state.fileUploading ? 'Uploading...' : 'Upload CSV' }</p>
            </label>
          </Col>
        </Row>
        
        <PusherNotification
          event='slate_csv_imported'
          callback={ this.slateUploaded }
        />
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  createSlate: (params) => dispatch(createSlate(params)),
  receiveSlate: (slate) => dispatch(receiveSlate(slate))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSlateModal)