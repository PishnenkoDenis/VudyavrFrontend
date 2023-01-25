import * as yup from 'yup';
import { PASSWORD_REG } from './constants.js';

export const loginSchema = yup
  .object({
    email: yup.string().email('Невалидный email').required(),
    password: yup.string().matches(PASSWORD_REG, 'пароль должен содержать А-z, 0-9, не менее 8 символов').required(),
  })
  .required();
