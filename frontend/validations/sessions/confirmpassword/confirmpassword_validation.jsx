import { validatorForConfirmPassword, validate } from 'utils/form/validation'
import { confirmPassword, required } from 'utils/form/validators'


const confirmPasswordValidation = [
  validatorForConfirmPassword('password','confirmpassword','confirmpassword', confirmPassword),
]


export default confirmPasswordValidation
