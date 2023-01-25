import React, {memo} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import styles from "./registrationForm.module.scss";
import { Button, Form, FormControl } from "react-bootstrap";

const userSchema = yup.object({
    email: yup.string().email("Некорректный email").required("Обязательное поле"),
    password: yup.string().matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g, 
    "пароль должен содержать не меньше 8 знаков, включая цифры, заглавные и прописные буквы  ").required("Обязательное поле"),
  }).required();

const entitySchema = yup.object({
    email: yup.string().email("Некорректный email").required("Обязательное поле"),
    password: yup.string().matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g, 
    "пароль должен содержать не меньше 8 знаков, включая цифры, заглавные и прописные буквы  ").required("Обязательное поле"),
    inn: yup.string().length(10, "некорректный ИНН").required("Обязательное поле"),
    ogrn: yup.string().length(13, "некорректный ОГРН").required("Обязательное поле"),
}).required();  

const onSubmit = (data, e) => {
  console.log(data);
  e.target.reset();
}

const confirmText = "подтверждая регистрацию, Вы даете свое согласие на обработку персональных данных. Порядок обработки ваших персональных данных, а также реализуемые требования к их защите, содержатся в Положении"

const RegistrationForm = ({currentUser}) => {
const isUser = currentUser === 'user';  
const { register, handleSubmit, formState:{ errors, reset } } = useForm({
      resolver: yupResolver(isUser ? userSchema : entitySchema)
  });
    return (
      <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormControl {...register("email")} placeholder="электронная почта"/>
        <p className={styles.errorMessage}>{errors.email?.message}</p>
        <FormControl {...register("password")} type="password" placeholder="пароль"/>
        <p className={styles.errorMessage}>{errors.password?.message}</p>
        {!isUser && (
          <>
            <FormControl {...register("inn")} placeholder="ИНН"/>
            <p className={styles.errorMessage}>{errors.inn?.message}</p>
            <FormControl {...register("ogrn")} placeholder="ОГРН"/>
            <p className={styles.errorMessage}>{errors.ogrn?.message}</p>
          </>
        )}
        <Form.Check type="checkbox" label={confirmText} />
        <Button variant="outline-primary" type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
      </Form>
  )
}

export default memo(RegistrationForm);