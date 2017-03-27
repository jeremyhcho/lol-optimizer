import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// Validation
import { runValidators } from 'utils/form/validation'
import signupValidations from 'validations/sessions/signup_validations'

// Actions
import { signup } from 'actions/session/session_actions'

// Material UI
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

// Services
import isEmpty from 'lodash/isEmpty'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

class SignupForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      showErrors: false,
      isSubmitting: false,
    }
    
    this.state.validationErrors = runValidators(this.state, signupValidations)
    this.navigateToLogin = this.navigateToLogin.bind(this)
  }
  
  componentDidUpdate () {
		this.redirectIfLoggedIn()
	}

  redirectIfLoggedIn () {
		if (this.props.currentUser) {
			this.props.router.push('/admin/slates')
		}
	}

  navigateToLogin () {
    this.props.router.push({ pathname: '/login' })
  }

  handleChange (field) {
    return (e) => {
      const newState = { ...this.state, [field]: e.currentTarget.value }

      this.setState({
        ...newState,
        validationErrors: runValidators(newState, signupValidations)
      })
    }
  }

 createUser (e) {
   if (isEmpty(this.state.validationErrors)) {
     this.props.signup({
       user: {
         email: this.state.email,
         password: this.state.password,
         is_admin: true
       }
     })
   } else {
     e.preventDefault()
     this.setState({ showErrors:true })
   }
 }

 formError (field) {
   if (this.state.showErrors) {
     return this.state.validationErrors[field]
   } else {
     return ''
   }
 }

 render () {
   return (
     <Grid style={{ height: '100%' }}>
       <Row style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
         <Paper className="paper-signup-form" zDepth={ 2 }>
           <Row>
             <Col xs={ 12 }>
               <h2>Hey there!</h2>
             </Col>
           </Row>
  
           <Row style={{ paddingTop: '10px' }}>
             <Col xs={ 10 } xsOffset={ 1 }>
               <TextField
                 autoComplete='new-password'
                 floatingLabelText="Email"
                 value={ this.state.email }
                 onChange={ this.handleChange('email') }
                 errorText={ this.formError('email') }
                 style={{ width: '100%' }}
               />

               <TextField
                 autoComplete='new-password'
                 type='password'
                 floatingLabelText="Password"
                 value={this.state.password}
                 onChange={ this.handleChange('password') }
                 errorText={ this.formError('password') }
                 style={{ width: '100%' }}
               />

               <TextField
                 autoComplete='new-password'
                 type='password'
                 floatingLabelText="Confirm Password"
                 value={this.state.confirmPassword}
                 onChange={ this.handleChange('confirmPassword') }
                 errorText={ this.formError('confirmPassword') }
                 style={{ width: '100%' }}
               />
             </Col>
           </Row>

           <Row style={{ paddingTop: '30px' }}>
             <Col xs={ 10 } xsOffset={ 1 }>
               <Row>
                 <RaisedButton
                   label="Create Account"
                   onTouchTap={ this.createUser.bind(this) }
                   fullWidth={ true }
                 />
               </Row>

               <Row>
                 <i>
                   By clicking CREATE ACCOUNT, you agree to our&nbsp;
                   <a>License Agreement</a> and <a>Privacy Statement</a>
                 </i>
               </Row>

               <Divider style={{ marginTop: '20px' }} />

               <Row className='footer'>
                 <span>Already have an account? <a onClick={ this.navigateToLogin }>Log in.</a></span>
               </Row>
             </Col>
           </Row>
         </Paper>
       </Row>
     </Grid>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm))
