import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .matches(/^[A-Za-z0-9]+$/, 'Name must only contain letters and numbers')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .required('Required'),
});

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .required('Required'),
});

export const BlogSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(700, 'Too Long!')
      .matches(/^[A-Za-z0-9]+$/, 'Name must only contain letters and numbers')
      .required('Required'),
    description: Yup.string()
      .required('Required'),
  });