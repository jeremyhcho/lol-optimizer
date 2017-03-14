import { validate } from 'utils/form/validation'
import { confirmPassword, required } from 'utils/form/validators'


  const confirmPasswordValidation = [
  validate('password', 'password', required),
  validate('confirmPassword', 'password confirmation', required, confirmPassword)
]


export default confirmpasswordValidation
