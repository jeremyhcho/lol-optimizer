import React from 'react'

//actions
import { login } from 'actions/session/session_actions'

//validation
import { runValidators } from 'utils/form/validation'
import loginValidation from 'validations/sessions/login/login_validations'

//Services
import isEmpty from 'lodash/isEmpty'

class LoginForm extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			email:'',
			password:'',
			error:{},
			showErrors:false,
			isSubmitting:false,
			user:{
				email:'',
				password:''
			}
		}
	}

	handleChange (field) {
  return (e) => this.setState({...this.state, [field]: e.currentTarget.value,
	 error:runValidators({...this.state},loginValidation)})
  }


	handleLogin(e){
		if(this.state.isSubmitting==false){
			e.preventDefault();
		} else {
			this.props.login(this.state.user)
		}
	}

	formError(field){
    if(this.state.showErrors){
      return this.state.error[field]
    } else {
      return ''
    }
  }

	login(){
    if(isEmpty(this.state.error)){
      this.setState({ user:{ email:this.state.email, password:this.state.password },isSubmitting: true })
    } else {
      this.setState({ showErrors:true })
    }
  }



	render () {
		return(
			<div>
				<form className="login-form" onSubmit={this.handleLogin.bind(this)}>
					<h1>Login</h1>
					<div className="input-group login-input-group">
                    <input type="email"
											 name="email"
											 placeholder="E-Mail"
											 className="login-username"
											 onChange={ this.handleChange('email') }
											 value={ this.state.email }
											 required
											 />
										 <ul>{this.formError("email")}</ul>
                  </div>
                  <div className="input-group login-input-group">
                    <input type="password"
											  name="password"
											  placeholder="Password"
											  className="login-password"
												onChange={ this.handleChange('password') }
												value={ this.state.password }
												required
												/>
											<ul>{this.formError("password")}</ul>
                  </div>
										<button className="login-button" type="submit"
										 onClick={this.login.bind(this)}>Log In</button>
				</form >
				<a className="login-forgot" href="#">Forgot Password?</a>
			</div>
		)
	}
}

export default LoginForm
