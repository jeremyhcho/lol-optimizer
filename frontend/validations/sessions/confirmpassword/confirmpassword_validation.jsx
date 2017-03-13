import { validatorForConfirmPassword } from 'utils/form/validation'
import { confirmPassword } from 'utils/form/validators'


const confirmpasswordValidation = [
  validatorForConfirmPassword('confirmpassword', 'password', 'confirmationPassword', confirmPassword)
]

export default confirmpasswordValidation
