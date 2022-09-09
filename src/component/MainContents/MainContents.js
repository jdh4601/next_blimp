import React from 'react';
import styles from './MainContents.module.css';

function MainContents() {
  return (
    <>
      <section className={styles.background}>
        <div className={styles.headerText}>
          <p className={styles.title}>Store</p>
          <p className={styles.content}>
            블림프가 전국을 누비며 찾아낸 <br></br>휴식 공간으로 떠나보세요.
          </p>
        </div>
      </section>
    </>
  );
}

export default MainContents;
