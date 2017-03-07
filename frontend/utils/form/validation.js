export const validate = (field, name, ...validators) => {
  return (state) => {
    for (var validatorFunc of validators) {
      let errorMessageFunc = validatorFunc(state[field])

      if (errorMessageFunc) {
        return { [field]: errorMessageFunc(name) }
      }
    }
    return null
  }
}

export const runValidators = (state, validators) => {
  return validators.reduce((memo, validator) => {
    return Object.assign(memo, validator(state))
  }, {})
}