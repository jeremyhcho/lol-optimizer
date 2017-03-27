import { validate, validatorForConfirmPassword } from 'utils/form/validation'
import { required, confirmPassword, email } from 'utils/form/validators'

const signupValidations = [
  validate('email', 'email', required, email),
  validate('password', 'password', required),
  validate('confirmPassword', 'password', required),
  validatorForConfirmPassword('confirmPassword', 'password', 'password', confirmPassword),
]

export default signupValidations
