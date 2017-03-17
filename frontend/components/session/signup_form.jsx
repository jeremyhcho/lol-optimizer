import React from 'react'
import { connect } from 'react-redux'

//validation
import { runValidators } from 'utils/form/validation'
import signupValidation from 'validations/sessions/signup/signup_validations'

//actions
import { signup } from 'actions/session/session_actions'

//Material-ui
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

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
    <div>
        <form className="signup-form">
          <Paper className="paper-signup-form" zDepth={5}>
            <h1>Register</h1>
            <TextField
              floatingLabelText="email"
              value={ this.state.email }
              onChange={ this.handleChange("email") }
              errorText={ this.formError("email"),this.props.emailSignupError }
              />
            <TextField
              floatingLabelText="password"
              value={this.state.password}
              onChange={ this.handleChange("password") }
              errorText={ this.formError("password"),this.props.passwordSignupError }
              />
            <TextField
              floatingLabelText="confirmPassword"
              value={this.state.confirmpassword}
              onChange={ this.handleChange("confirmpassword") }
              errorText={ this.formError("confirmPassword") }
              />
            <RaisedButton label="Sign Up" onTouchTap={ this.createUser.bind(this) } />
          </Paper>
        </form>
    </div>
  )}
}

const mapStateToProps = (state) => {
  if(state.session.signupError){
    return{
      emailSignupError: state.session.signupError.messages.email,
      passwordSignupError: state.session.signupError.messages.password[0]
    }
  }else{
    return {}
  }
}

export default connect(mapStateToProps)(SignupForm)
