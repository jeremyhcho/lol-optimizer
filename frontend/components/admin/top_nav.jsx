import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'

class AdminTopNav extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <AppBar
        title={ this.props.currentSection }
        iconClassNameRight='fa fa-cog'
        zDepth={ 1 }
        showMenuIconButton={ false }
        className='top-nav'
      />
    )
  }
}

const mapStateToProps = (state) => ({
  currentSection: state.admin.section.currentSection
})

export default connect(mapStateToProps)(AdminTopNav);
