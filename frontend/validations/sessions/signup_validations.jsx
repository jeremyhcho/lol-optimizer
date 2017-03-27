import { validate, validatorForConfirmPassword } from 'utils/form/validation'
import { required, confirmPassword, email, minLength } from 'utils/form/validators'

const signupValidations = [
  validate('email', 'email', required, email),
  validate('password', 'password', required, minLength(6)),
  validate('confirmPassword', 'password', required, minLength(6)),
  validatorForConfirmPassword('confirmPassword', 'password', 'password', confirmPassword),
]

export default signupValidations
