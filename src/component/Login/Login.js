import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './Login.module.css';
import Button from '../UI/Button';
import MainHeader from '../MainHeader/MainHeader';
// import LoginModal from '../Modal/LoginModal';

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const submitHanlder = event => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  const emailChangeHandler = event => {
    setEnteredEmail(event.target.value);
    setFormIsValid(
      setEmailIsValid(enteredEmail.includes('@')) &&
        enteredPassword.trim().length > 8
    );
  };

  const passwordChangeHandler = event => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      setPasswordIsValid(enteredPassword.trim().length > 8) &&
        setEmailIsValid(enteredEmail.includes('@'))
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 8);
  };

  // modal 창 팝업
  // const loginCheckHanlder = () => {
  //   !formIsValid && <LoginModal />;
  // };

  return (
    <>
      <MainHeader />
      <Card className={styles.login}>
        <form onSubmit={submitHanlder}>
          <div
            className={`${styles.control} ${emailIsValid && styles.invalid}`}
          >
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${styles.control} ${passwordIsValid && styles.invalid}`}
          >
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
        </form>
        <div className={styles.actions}>
          <Button
            type="button"
            className={`${styles.button}`}
            onSubmit={!formIsValid}
          >
            Login
          </Button>
          <Button type="button">Cancel</Button>
        </div>
      </Card>
    </>
  );
}

export default Login;
