import React from 'react';
import Card from '../UI/Card';
import styles from './MainItems.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function ItemList({ key, picture, title, price, sector, discount }) {
  // 부모 컴포넌트로 items 전달하기 위한 콜백함수
  // const getData = event => {
  //   event.preventDefault();
  //   props.getItemValue(items);
  // };

  // 페이지 이동 함수
  const navigate = useNavigate();
  const onClickCard = () => {
    // window.location.href('/desc');
    navigate('/desc');
  };

  return (
    <Card id={key} className={styles['item-list']}>
      <img className={styles.img} src={picture} onClick={onClickCard} />
      <div className={styles['text-box']} onClick={onClickCard}>
        <p className={styles.sector}>{sector}</p>
        <p className={styles.title}>{title}</p>
        <div className={styles.priceContainer}>
          <p className={styles.discount}>{discount}</p>
          <p className={styles.price}>{price}</p>
        </div>
        <Button onClick={onClickCard}>구매하기</Button>
      </div>
    </Card>
  );
}

// props 기본값
// ItemList.defaultProps = {
//   title: 'Jazz bar',
//   score: '4 ⭐️',
//   location: 'Korea',
// };

export default ItemList;
