
import React from 'react';
import "./index.css";
import Button from '../../../components/Button/Button';
import Field from '../../../components/Field/Field';

export default function Login() {
  return <div className='login'>
      <span className="login-form__title">Giriş</span>
        <div className="login-form">
          <Field
            label="Email"
            type="text"
            placeholder="username@gmail.com"
          />

          <Field
            label="Şifre"
            type="password"
            placeholder="Şifre"
          />
          <Button buttonName="Giriş Yap"  />
        </div>
  </div>;
}
