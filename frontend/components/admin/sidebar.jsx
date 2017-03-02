import React from 'react'
import Drawer from 'material-ui/Drawer'
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import ActionFlightLand from 'material-ui/svg-icons/action/flight-land'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sectionSelector } from '../../actions/currentSection/currentSection_action'

class AdminSidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      showArrowSignIn: false,
      showArrowSignUp: false
    }
  }
//This is the code for trying to get the arrow to show onClick of a menuItem
  // showArrowSignIn(){
  //   this.setState({ showArrowSignIn:!this.state.showArrowSignIn });
  // }
  //
  // showArrowSignUp(){
  //   this.setState({ showArrowSignUp:!this.state.showArrowSignUp })
  // }
  //
  // renderArrow(){
  //   if(this.state.showArrowSignIn){
  //     this.setState({showArrowSignUp: false})
  //     return(
  //       <img className="arrows"  src="http://c3filedepot.s3.amazonaws.com/lightinmotion/files/icons_triangle.svg"/>
  //     )
  //   }
  //   if(this.state.showArrowSignUp){
  //     this.setState({ showArrowSignIn: false })
  //     return(
  //         <img className="arrows"  src="http://c3filedepot.s3.amazonaws.com/lightinmotion/files/icons_triangle.svg"/>
  //     )
  //   }
  // }

  render () {
    return (
        <MuiThemeProvider>
          <Drawer className="drawer">
            <div className="titleContainer">
              <img className="titleLogo" src="http://i.imgur.com/llRSLi6.png"/>
              <h4 className="title">League Optimizer</h4>
              <hr></hr>
            </div>
            <div className="menuList">
              <MenuItem onClick={()=>{ this.showArrowSignIn(); this.props.sectionSelector("Sign In")}} leftIcon={ <ActionFlightTakeoff color={ "#ABA8A5" }/> } rightIcon={this.renderArrow()}  style={{color:"#ABA8A5"}}>
                Sign In
              </MenuItem>
              <MenuItem  onClick={()=>{ this.showArrowSignUp(); this.props.sectionSelector("Sign Up")}} leftIcon={ <ActionFlightLand color={ "#ABA8A5" }/> } rightIcon={this.renderArrow()}  style={{color:"#ABA8A5"}}>
                 Sign Up
              </MenuItem>
            </div>
          </Drawer>
        </MuiThemeProvider>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ sectionSelector : sectionSelector },dispatch);
}


export default connect (null, mapDispatchToProps)(AdminSidebar)
