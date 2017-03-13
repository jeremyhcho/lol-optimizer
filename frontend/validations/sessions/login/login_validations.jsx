import { validate } from 'utils/form/validation'
import { required, email } from 'utils/form/validators'

const loginValidation = [
  validate('email', 'email', required, email),
  validate('password', 'password', required)
]

export default loginValidation
