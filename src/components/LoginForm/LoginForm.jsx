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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  console.log(errors);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const onSubmit = (data, e ) => {console.log(data); e.target.reset()};

  return (
    <>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>ВХОД В ЛИЧНЫЙ КАБИНЕТ</div>
        { !isForgotPassword  ? (
        <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control placeholder="электронная почта" name="email" autoFocus {...register('email')} />
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
            <Button className={styles.button} variant="link" onClick={setIsForgotPassword}>
              забыли пароль?
            </Button></>)
        : (
          <div className={styles.recoveryForm}>
            <span className={styles.subitle}>пожалуйста, укажите электронную почту регистрации</span>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="электронная почта"
                autoFocus
                {...register('email', { required: true, maxLength: 8 })}
              />
            </Form.Group>
            <p className={styles.error}>{errors.email?.message}</p>
          </div>
        )}
        <div className={styles.buttonBox}>
       {isForgotPassword ?  (
       <>
       <Button variant="primary" type="submit">ВОССТАНОВИТЬ</Button>
       <Button variant="primary" onClick={() => setIsForgotPassword(false)}>ВЕРНУТЬСЯ</Button></>) :
        <>
        <Button type="submit" variant="primary">ВХОД</Button>
        <Button variant="primary">РЕГИСТРАЦИЯ</Button>
        </>
        }
        </div>
      </Form>
    </>
  );
};

export default memo(LoginForm);