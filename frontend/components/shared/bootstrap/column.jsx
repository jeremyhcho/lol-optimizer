import React from 'react'

class BootstrapColumn extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div className={ this.props.className }>
        { this.props.children }
      </div>
    )
  }
}

export default BootstrapColumn