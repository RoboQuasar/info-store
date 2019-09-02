import React, { PureComponent } from 'react';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import styles from './index.module.css';

class Login extends PureComponent {
  handleSubmit() {
    console.log('kuku');
  }

  render() {
    return (
      <Form className={styles.form}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Логин</Form.Label>

          <Form.Control type="email" placeholder="Введите e-mail" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>

          <Form.Control type="password" placeholder="введите пароль" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    );
  }
}

export default Login;
