import React from 'react';
import ItemList from './ItemList';
import styles from './MainItems.module.css';
import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpeg';
import img3 from '../img/img3.jpeg';

function MainItems() {
  // 서버에서 데이터 받아옴
  const placeData = [
    {
      id: '1',
      img: img1,
      sector: '레스토랑 / 카페',
      title: 'rooftop',
      price: '30000원',
      score: '5 ⭐️',
      discount: '33%',
    },
    {
      id: '2',
      img: img2,
      sector: '문화',
      title: 'restaurant',
      price: '20000원',
      score: '4.5 ⭐️',
      discount: '12%',
    },
    {
      id: '3',
      img: img3,
      sector: '레스토랑 / 카페',
      title: 'hotel',
      price: '30000원',
      score: '4 ⭐️',
      discount: '20%',
    },
    {
      id: '4',
      img: img1,
      sector: '문화',
      title: 'bar',
      price: '30000원',
      score: '3.5 ⭐️',
      discount: '40%',
    },
  ];

  // 자식 컴포넌트로 callback function 전달
  // const getItemValue = enteredData => {
  //   const itemList = {
  //     ...enteredData,
  //   };
  // };

  // 지식 컴포넌트에 전달
  const listData = placeData.map(place => (
    <ItemList
      key={place.id}
      picture={place.img}
      title={place.title}
      price={place.price}
      sector={place.sector}
      discount={place.discount}
    />
  ));

  return (
    <>
      <div className={styles['item-box']}>
        <p className={styles.subtitle}>상품 목록</p>
        <ul className={styles['container']}>{listData}</ul>
      </div>
    </>
  );
}

export default MainItems;
