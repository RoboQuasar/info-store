import React, { PureComponent } from 'react';

import LoginPopup from '../Login';

import Dropdown from 'react-bootstrap/Dropdown';
import styles from './index.module.css';

class Header extends PureComponent {
  render() {
    return (
      <header className={ styles.headerContainer }>
        <Dropdown drop="left">
          <Dropdown.Toggle
            id="login-open"
            variant="info"
          >
            Профиль
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={LoginPopup}></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </header>
    );
  }
}

export default Header;
