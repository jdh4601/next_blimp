import React from 'react';
import Navigation from './Navigation';
import styles from './MainHeader.module.css';

function MainHeader() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.logo}>BLIMP</h1>
        <Navigation />
      </div>
    </>
  );
}

export default MainHeader;
