import React, { PureComponent } from 'react';

class Login extends PureComponent {
  handleSubmit() {
    console.log('kuku');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="имя пользователя" />
        <input type="text" placeholder="пароль" />
        <button type="submit" aria-label="Войти">Войти</button>
      </form>
    );
  }
}

export default Login;
