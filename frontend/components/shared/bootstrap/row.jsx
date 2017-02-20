import React from 'react'

// Plugins
import classNames from 'classnames'

class BootstrapRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const rowClasses = classNames('row', this.props.className)

    return (
      <div className={ rowClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default BootstrapRow