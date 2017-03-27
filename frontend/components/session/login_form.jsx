import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// Actions
import { login } from 'actions/session/session_actions'

// Material UI
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox'

// Validation
import { runValidators } from 'utils/form/validation'
import loginValidations from 'validations/sessions/login_validations'

// Services
import isEmpty from 'lodash/isEmpty'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'


class LoginForm extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
		  email: '',
  		password: '',
  		showErrors: false,
  		isSubmitting: false
		}
		
		this.state.validationErrors = runValidators(this.state, loginValidations)
		this.navigateToSignup = this.navigateToSignup.bind(this)
	}

	componentDidUpdate () {
		this.redirectIfLoggedIn()
	}

  redirectIfLoggedIn () {
		if (this.props.currentUser) {
			this.props.router.push('/admin/slates')
		}
	}

  handleChange (field) {
		return (e) => {
			let newState = { ...this.state, [field]: e.currentTarget.value }

			this.setState({
		  	...newState,
		  	validationErrors: runValidators(newState, loginValidations)
		  })
		}
  }

	formError (field) {
    if (this.state.showErrors) {
      return this.state.validationErrors[field]
    } else {
      return ''
    }
  }

	login (e) {
    if (isEmpty(this.state.validationErrors)) {
      this.props.login({
				user: {
					email: this.state.email,
					password: this.state.password
				}
			})
    } else {
			e.preventDefault()
      this.setState({ showErrors:true })
    }
  }

	navigateToSignup () {
		this.props.router.push({ pathname: '/signup' })
	}
	
	render () {
		return(
			<Grid style={{ height: '100%' }}>
				<Row style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
					<Paper className="paper-login-form" zDepth={ 2 }>
						<Row>
							<Col xs={ 12 }>
								<h2>Welcome Back</h2>
							</Col>
						</Row>

						<Row style={{ paddingTop: '20px' }}>
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
									 type='password'
									 autoComplete='new-password'
									 floatingLabelText='Password'
									 value={ this.state.password }
									 onChange={ this.handleChange('password') }
									 errorText={ this.formError('password') }
									 style={{ width: '100%' }}
								 />
							 
								 <Checkbox
									 label='Remember Me'
									 inputStyle={{ width: '18px', height: '18px', cursor: 'pointer' }}
									 iconStyle={{ width: '18px', height: '18px' }}
									 labelStyle={{ lineHeight: '18px', fontSize: '14px' }}
									 style={{ cursor: 'auto', marginTop: '20px' }}
									/>
							 </Col>
						 </Row>

						 <Row style={{ paddingTop: '30px' }}>
							 <Col xs={ 10 } xsOffset={ 1 }>
								 <Row>
									 <RaisedButton label="Sign In" fullWidth={ true } onTouchTap={this.login.bind(this)} />
								 </Row>

								 <Row>
									 <Col xs={ 12 }>
										 <i>
											 By clicking SIGN IN, you agree to our <a>License Agreement</a> and <a>Privacy Statement</a>
										 </i>
									 </Col>
								 </Row>

								 <Divider style={{ marginTop: '20px' }} />
								 
							 	 <Row className='footer'>
									 <a className="login-forgot" href="#">I forgot my email or password</a>
									 <span>Fresh player? <a onClick={ this.navigateToSignup }>Create an account.</a></span>
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
  login: (user) => dispatch(login(user))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm))
