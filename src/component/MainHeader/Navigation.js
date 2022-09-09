import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <Link className={styles['nav-text']} to="/">
        Home
      </Link>
      <Link className={styles['nav-text']} to="/login">
        Login
      </Link>
    </nav>
  );
}

export default Navigation;
