import React from 'react'
import ReactS3Uploader from 'react-s3-uploader'

class AdminSlates extends React.Component {
  constructor (props) {
    super(props)
    this.onUploadFinish = this.onUploadFinish.bind(this)
  }
  
  onUploadFinish (signedUrl, file) {
    this.props.uploadSlateCsv(file)
  }

  render () {
    const { main, sidebar, topNav } = this.props;

    return (
      <div className='admin wrapper'>
        <div className='sidebar'>
          { sidebar }
        </div>

        <div className='top-nav'>
          { topNav }
        </div>

        <div className='main'>
          { main }
        </div>
      </div>
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