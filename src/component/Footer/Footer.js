import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles['footer-container']}>
        <h2 className={styles.title}>BLIMP</h2>
        <span className={styles.desc}>
          주식회사 멋쟁이사자처럼 | 대표 : 정동현 | 사업자 등록 번호 : 1234-5678
        </span>
        <p className={styles.desc}>
          Copyright @ 2021 BLIMP All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
