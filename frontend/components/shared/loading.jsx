import React from 'react'
import RefreshIndicator from 'material-ui/RefreshIndicator'

class Loading extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div style={{
          width: '40px',
          height: '40px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute' }}>
        <RefreshIndicator
          className='loading'
          size={ 40 }
          top={ 0 }
          left={ 0 }
          status="loading"
          style={{ backgroundColor: '#505464' }}
        />
      </div>
    )
  }
}

export default Loading