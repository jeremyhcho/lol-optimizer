import * as ErrorMessages from './validator_messages'

export const required = (text) => {
  if (text) {
    return
  } else {
    return ErrorMessages.isRequired
  }
}

export const email = (text) => {
  let regex = new RegExp(['^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}',
                        '{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.',
                        '(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|',
                        'name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}',
                        '\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$'
                      ].join(''), 'i')

  if (text.search(regex) > -1) {
    return
  } else {
    return ErrorMessages.emailFormat
  }
}

export const minLength = (min) => {
  return (text) => text.length >= min ? null : ErrorMessages.minLength(min)
}

export const csvUrlFormat = (text) => {
  return text.match(/.(.csv)$/g) ? null : ErrorMessages.csvUrlFormat
}

export const confirmPassword = (confirmpassword, password) => {
  if(password == confirmpassword ){
    return
  } else {
    return ErrorMessages.confirmPassword
  }
}
