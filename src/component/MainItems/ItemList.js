import React from 'react';
import Card from '../UI/Card';
import styles from './MainItems.module.css';
function ItemList({ key, picture, title, price, desc }) {
  // 부모 컴포넌트로 items 전달하기 위한 콜백함수
  // const getData = event => {
  //   event.preventDefault();
  //   props.getItemValue(items);
  // };

  return (
    <Card id={key} className={styles['item-list']}>
      <img className={styles.img} src={picture} />
      <div className={styles['text-box']}>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}</p>
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
