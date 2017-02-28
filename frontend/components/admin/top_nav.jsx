import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'

class AdminTopNav extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <AppBar style={{ backgroundColor:"#F4F3EF", color: "grey" }}>
        <h3 className="current-section">{ this.props.currentSection }</h3>
        <img className="setting-cog" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/WMF-Agora-Settings_808080.svg/2000px-WMF-Agora-Settings_808080.svg.png"/>
      </AppBar>
    )
  }
}

const mapStateToProps = (state) => ({
  currentSection: state.section.admin.currentSection
})

export default connect(mapStateToProps)(AdminTopNav);
