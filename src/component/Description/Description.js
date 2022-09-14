import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import styles from './Description.module.css';
import Button from '@mui/material/Button';

function Desc({ picture, title, price, sector }) {
  return (
    <>
      <MainHeader />
      <img src={picture} />
      <div className={styles.container}>
        <p>{title}</p>
        <p>{sector}</p>
        <p>{price}</p>
        <Button>구매하기</Button>
      </div>
    </>
  );
}

export default Desc;
