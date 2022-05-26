import Joi from 'joi'

import { SignUpFormValues } from 'unit/components/SignUpForm'

export type FieldErrors = {
  [key: string]: string
}

const fieldsValidations = {
  username: Joi.string().min(4).required().messages({
    'string.min': 'usuário precisa ter no mínimo 4 caracteres',
    'string.empty': 'usuário obrigatório'
  }),
  password: Joi.string().min(4).required().messages({
    'string.min': 'senha precisa ter no mínimo 4 caracteres',
    'string.empty': 'senha obrigatória'
  }),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'senhas não conferem',
      'string.empty': 'é necessario confirmar sua senha'
    })
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function signInValidate(values: FieldErrors) {
  const { username, password } = fieldsValidations
  const schema = Joi.object({ username, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function signUpValidate(values: SignUpFormValues) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
