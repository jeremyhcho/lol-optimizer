import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// Actions
import { selectSection } from 'actions/current_section/current_section_actions'

class AdminTopNav extends React.Component {
  constructor (props) {
    super(props)
  }
  
  componentDidMount () {
    this.props.selectSection(this.props.location.pathname.match(/\w+$/)[0])
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

const mapDispatchToProps = (dispatch) => ({
  selectSection: (sectionName) => dispatch(selectSection(sectionName))
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminTopNav)
)
