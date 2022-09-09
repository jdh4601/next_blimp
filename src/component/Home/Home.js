import MainHeader from '../MainHeader/MainHeader';
import MainContents from '../MainContents/MainContents';
import MainItems from '../MainItems/MainItems';
import Footer from '../Footer/Footer';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.wrap}>
        <MainHeader />
        <MainContents />
        <MainItems />
        <Footer />
      </div>
    </>
  );
}

export default Home;
