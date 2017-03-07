import { validate } from 'utils/form/validation'
import { required, csvUrlFormat } from 'utils/form/validators'

const slateValidations = [
  validate('name', 'slate name', required),
  validate('date', 'start date', required),
  validate('time', 'start time', required),
  validate('csvUrl', 'CSV url', required, csvUrlFormat)
]

export default slateValidations