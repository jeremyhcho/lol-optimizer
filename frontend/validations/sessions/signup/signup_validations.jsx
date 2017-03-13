import { validate } from 'utils/form/validation'
import { required, confirmPassword, email } from 'utils/form/validators'

const signupValidation = [
  validate('email', 'email', required, email),
  validate('password', 'password', required),
  validate('confirmpassword', 'confirmpassword', required)
]

export default signupValidation
