import { validate } from 'utils/form/validation'
import { required, email } from 'utils/form/validators'

const loginValidations = [
  validate('email', 'email', required, email),
  validate('password', 'password', required)
]

export default loginValidations
