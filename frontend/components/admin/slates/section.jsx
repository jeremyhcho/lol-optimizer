import React from 'react'

// Grid
import { Grid, Row, Col } from 'react-flexbox-grid'

// Components
import SlatesToolbar from './toolbar'
import SlatesTable from './table'

// Plugins
import ReactS3Uploader from 'react-s3-uploader'

class AdminSlates extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      from: new Date(),
      to: new Date()
    }

    this.onUploadFinish = this.onUploadFinish.bind(this)
    this.handleChangeToDate = this.handleChangeToDate.bind(this)
    this.handleChangeFromDate = this.handleChangeFromDate.bind(this)
  }
  
  componentDidMount () {
    this.props.fetchSlates({
      from: this.state.from.toISOString(),
      to: this.state.to.toISOString()
    })
  }
  
  onUploadFinish (signedUrl, file) {
    this.props.uploadSlateCsv(file)
  }
  
  handleChangeToDate (e, date) {
    this.setState({ to: date })
    this.props.fetchSlates({ from: this.state.from.toString(), to: date.toString() })
  }
  
  handleChangeFromDate (e, date) {
    this.setState({ from: date })
    this.props.fetchSlates({ from: date.toString(), to: this.state.to.toString() })
  }

  render () {
    return (
      <Grid>
        <SlatesToolbar
          to={ this.state.to }
          from={ this.state.from }
          handleChangeToDate={ this.handleChangeToDate }
          handleChangeFromDate={ this.handleChangeFromDate }
        />
      
        <SlatesTable
          slates={ this.props.slates }
        />
      </Grid>
    )
  }
}

// <div className='admin'>
//   <ReactS3Uploader
//     signingUrl="/api/v1/admin/s3/sign"
//     signingUrlMethod="GET"
//     accept="text/csv"
//     onFinish={ this.onUploadFinish } />
// </div>

export default AdminSlates