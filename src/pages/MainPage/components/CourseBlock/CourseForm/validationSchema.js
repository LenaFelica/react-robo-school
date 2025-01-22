import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(20, 'Имя должно содержать не более 20 символов')
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, 'Имя может содержать только буквы'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(
      /^(8|\+7)\d{10}$/,
      'Телефон должен начинаться с 8 или +7 и содержать ровно 11 цифр без пробелов',
    ),
  email: yup
    .string()
    .required('E-mail обязателен')
    .matches(
      /^[a-zA-Z0-9._%+-]*[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
      'Некорректный e-mail',
    )
    .email(),
});
