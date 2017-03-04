import React from 'react'
import Drawer from 'material-ui/Drawer'
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import ActionFlightLand from 'material-ui/svg-icons/action/flight-land'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  { sectionSelector }  from '../../actions/current_section/current_section_actions'

class AdminSidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      selectedMenuItem:""
    }
  }
  handleClick (menuItemName) {
    this.setState({ selectedMenuItem : menuItemName });
    this.props.selectSection(menuItemName);
  }

  handleSignInArrow(){
    if(this.state.selectedMenuItem == "Sign Up" || this.state.selectedMenuItem == ""){
      return(<div></div>)
     }else{
      return(<img className="arrows"  src="http://c3filedepot.s3.amazonaws.com/lightinmotion/files/icons_triangle.svg"/>)
    }
  }

  handleSignUpArrow(){
    if(this.state.selectedMenuItem == "Sign In" || this.state.selectedMenuItem == ""){
      return(<div></div>)
     }else{
      return(<img className="arrows"  src="http://c3filedepot.s3.amazonaws.com/lightinmotion/files/icons_triangle.svg"/>)
    }
  }


  render () {
    return (
        <MuiThemeProvider>
          <Drawer className="drawer">
            <div className="title-container">
              <img className="title-logo" src="http://i.imgur.com/llRSLi6.png"/>
              <h4 className="title">League Optimizer</h4>
              <hr></hr>
            <div className="menu-list">
              <MenuItem onClick={()=>{ this.handleClick("Sign In") } } leftIcon={ <ActionFlightTakeoff color={ "#ABA8A5" }/> } rightIcon={ this.handleSignInArrow() }  style={ { color:"#ABA8A5" } }>
                Sign In
              </MenuItem>
              <MenuItem  onClick={()=>{ this.handleClick("Sign Up") } } leftIcon={ <ActionFlightLand color={ "#ABA8A5" }/> } rightIcon={ this.handleSignUpArrow() } style={ { color:"#ABA8A5" } }>
                 Sign Up
              </MenuItem>
            </div>
          </div>
          </Drawer>
        </MuiThemeProvider>
    )
  }
}



const mapDispatchToProps = (dispatch) => ({
  selectSection: (sectionName) => dispatch({ type: 'SECTION_SELECTED', sectionName })
})


export default connect (null, mapDispatchToProps)(AdminSidebar)
