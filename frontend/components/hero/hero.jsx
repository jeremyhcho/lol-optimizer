import React from 'react'
import { withRouter } from 'react-router'

class Hero extends React.Component {
  constructor (props) {
    super(props)
    
    this.redirectToSignUp = this.redirectToSignUp.bind(this)
    this.redirectToLogIn = this.redirectToLogIn.bind(this)
  }
  
  redirectToSignUp () {
    this.props.router.push({ pathname: '/signup' })
  }
  
  redirectToLogIn () {
    this.props.router.push({ pathname: '/login' })
  }
  
  render () {
    return (
      <div>
        <button className='btn btn-default' onClick={ this.redirectToLogIn }>Sign In</button>
      </div>
    )
  }
}

export default withRouter(Hero)