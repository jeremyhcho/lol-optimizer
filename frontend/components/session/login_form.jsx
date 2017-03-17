import React from 'react'
import { connect } from 'react-redux'

//actions
import { login } from 'actions/session/session_actions'

//material-ui
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

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
					<Paper className="paper-login-form" zDepth={5}>
					<h1>Login</h1>

					 <div>
						<TextField
							floatingLabelText="email"
							value={ this.state.email }
							onChange={ this.handleChange("email") }
							errorText={ this.formError("email"), this.props.loginErrorFromServer }
							/>
					</div>
					 <div>
						 <TextField
							 floatingLabelText="password"
							 value={ this.state.password }
							 onChange={ this.handleChange("password") }
							 errorText={ this.formError("password") }
							 />
						 </div>
						 <div>
							<RaisedButton label="login" onTouchTap={this.login.bind(this)} />
						</div>
						<a className="login-forgot" href="#">Forgot Password?</a>
					</Paper>
				</form >

			</div>
		)
	}
}

const mapStateToProps = (state) => {
   if(state.session.loginError){
	  return {
	    loginErrorFromServer: state.session.loginError.error_description
      }
	  }else{
		 return {}
    }
 }

export default connect(mapStateToProps)(LoginForm)
