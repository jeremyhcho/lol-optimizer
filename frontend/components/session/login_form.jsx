import React from 'react'

//actions
import { login } from 'actions/session/session_actions'

//material-ui
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

//validation
import { runValidators } from 'utils/form/validation'
import loginValidation from 'validations/sessions/login/login_validations'

//Services
import isEmpty from 'lodash/isEmpty'


class LoginForm extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
		  email: '',
  		password: '',
  		errors: {},
  		showErrors: false,
  		isSubmitting: false
		}
	}

	handleChange (field) {
		return (e) =>
		this.setState({
	  ...this.state,
	  [field]: e.currentTarget.value,
	  error: runValidators({ ...this.state, [field]: e.currentTarget.value }, loginValidation)
	 })
  }

	formError(field){
    if(this.state.showErrors){
      return this.state.error[field]
    } else {
      return ''
    }
  }

	login(e){
    if(isEmpty(this.state.error)){
      this.props.login({ user:{
				email:this.state.email,
				password:this.state.password
			} })
    } else {
      this.setState({ showErrors:true })
			e.preventDefault();
    }
  }


	render () {
		return(
			<div>
				<form className="login-form">
					<h1>Login</h1>
					 <div>
						<TextField
							hintText="email"
							value={ this.state.email }
							onChange={ this.handleChange("email") }
							errorText={ this.formError("email") }
							/>
					</div>
					 <div>
						 <TextField
							 hintText="password"
							 value={ this.state.password }
							 onChange={ this.handleChange("password") }
							 errorText={ this.formError("password") }
							 />
						 </div>
						 <div>
							<RaisedButton label="login" primary={true} onTouchTap={this.login.bind(this)} />
						</div>
				</form >
				<a className="login-forgot" href="#">Forgot Password?</a>
			</div>
		)
	}
}

export default LoginForm
