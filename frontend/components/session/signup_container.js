import { connect } from 'react-redux'

// Components
import SignupForm from 'components/session/signup_form'

// Actions
import { signup } from 'actions/session/session_actions'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  signupError: state.session.signupError
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    signup: (user) => dispatch(signup(user))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)
