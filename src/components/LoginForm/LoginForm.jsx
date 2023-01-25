import React, { memo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../utils';

import styles from './loginform.module.scss';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const onSubmit = (e, data) => console.log(data);

  return (
    <>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>ВХОД В ЛИЧНЫЙ КАБИНЕТ</div>
        { !isForgotPassword  && (
        <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="электронная почта" name="email" autoFocus {...register('email')} />
            <p className={styles.error}>{errors.email?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="пароль"
                autoFocus
                {...register('password', { required: true })} />
              <p className={styles.error}>{errors.password?.message}</p>
            </Form.Group>
            <Button variant="link" onClick={setIsForgotPassword}>
              забыли пароль?
            </Button></>)}
        {isForgotPassword && (
          <div className={styles.recoveryForm}>
            <span className={styles.subtitle}>пожалуйста, укажите электронную почту регистрации</span>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="электронная почта"
                autoFocus
                {...register('email', { required: true, maxLength: 8 })}
              />
            </Form.Group>
          </div>
        )}
        <div className={styles.buttonBox}>
       {isForgotPassword ?  <Button variant="primary">ВОССТАНОВИТЬ</Button> :
        <>
        <Button type= "submit" variant="primary">ВХОД</Button>
        <Button variant="primary">РЕГИСТРАЦИЯ</Button></>
        }
        </div>
      </Form>
    </>
  );
};

export default memo(LoginForm);
