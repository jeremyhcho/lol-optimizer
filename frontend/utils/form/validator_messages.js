export const isRequired = (name) => {
  return `Enter a valid ${name}`;
}

export const emailFormat = () => {
  return 'Enter a valid email address'
}

export const minLength = (length) => {
  return (value) => (
    `${value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()}` +
    ` must be at least ${length} characters long`
  )
}

export const csvUrlFormat = () => {
  return 'Enter a valid CSV url'
}

export const confirmPassword = (test) => {
  return 'Please make sure your password and confirmpassword are identical'
}
