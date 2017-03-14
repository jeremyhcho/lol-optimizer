import React from 'react'

//validation
import { runValidators } from 'utils/form/validation'
import signupValidation from 'validations/sessions/signup/signup_validations'

//actions
import { signup } from 'actions/session/session_actions'

//Material-ui
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

//Services
import isEmpty from 'lodash/isEmpty'

class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      email:'',
      password:'',
      confirmpassword:'',
      error:{},
      showErrors: false,
      isSubmitting: false,
    }
  }

  handleChange (field) {
   return (e) =>
    this.setState({
    ...this.state, [field]: e.currentTarget.value,
    error:runValidators({ ...this.state },signupValidation) });
  }

createUser(e){
  if(isEmpty(this.state.error)){
    this.props.signup({ user:{
      email:this.state.email,
      password:this.state.password
    } })
  }else{
    this.setState({ showErrors:true })
    e.preventDefault()
  }
}

  formError(field){
    if(this.state.showErrors){
      return this.state.error[field]
    } else {
      return ''
    }
  }


  render () {
    return(
    <form className="signup-form">
      <h1>Register</h1>
      <TextField
        hintText="email"
        value={ this.state.email }
        onChange={ this.handleChange("email") }
        />
      <TextField
        hintText="password"
        value={this.state.password}
        onChange={ this.handleChange("password") }
        />

      <TextField
        hintText="confirmPassword"
        value={this.state.confirmpassword}
        onChange={ this.handleChange("confirmpassword") }
        />
      <RaisedButton label="Sign Up" primary={ true } onTouchTap={ this.createUser.bind(this) } />
    </form>
  )}
}



export default SignupForm
