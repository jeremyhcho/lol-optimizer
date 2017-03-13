import React from 'react'

//validation
import { runValidators } from 'utils/form/validation'
import signupValidation from 'validations/sessions/signup/signup_validations'
import confirmpasswordValidation from 'validations/sessions/confirmpassword/confirmpassword_validation'

//actions
import { signup, receiveCurrentUser } from 'actions/session/session_actions'

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
      user:{
        full_name:'',
        email:'',
        password:''
      }
    }
  }

  handleChange (field) {
  return (e) =>
  this.setState({
    ...this.state, [field]: e.currentTarget.value,
  error:runValidators({ ...this.state },signupValidation) });

  }

createUser(){
  this.setState({error:runValidators({ ...this.state },confirmpasswordValidation)})
  if(isEmpty(this.state.error)){
    this.setState({ user:{user:{ email:this.state.email, password:this.state.password }},isSubmitting: true })
  }else{
    this.setState({ showErrors:true })
  }
}

  handleClick(e){
    console.log("these are the eerror", this.state.error)
    if(this.state.isSubmitting==false){
      e.preventDefault();
    } else {
      this.props.signup(this.state.user)
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
    <form className="signup-form" onSubmit={ this.handleClick.bind(this) }>
      <h1>Register</h1>
        <input
         className="signup-email"
         name="email"
         type="text"
         placeholder="email"
         onChange={ this.handleChange('email') }
         value={ this.state.email }
         />
       <ul>{ this.formError("email") }</ul>

        <input
         className="signup-password"
         name="password"
         type="password"
         placeholder="password"
         onChange={this.handleChange('password')}
         value={ this.state.password }

         />
       <ul>{ this.formError("password") }</ul>

       <input
         className="signup-confirmpassword"
         name="confirmpassword"
         type="password"
         placeholder="Confirm password"
         onChange={this.handleChange('confirmpassword')}
         value={ this.state.confirmpassword }
         />
        <ul>{ this.formError("confirmpassword") }</ul>

     <button className="signup-button" type="submit" onClick={this.createUser.bind(this)}>Sign Up</button>
    </form>
  )}
}



export default SignupForm
