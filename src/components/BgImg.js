import styles from '../css/BgImg.module.css';

function BgImg() {
  const img = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
    '09.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
  ];
  const chosenImg = img[Math.floor(Math.random() * img.length)];
  const setImg = `https://Jiyaho.github.io/react-toDoApp/assets/bgImg/${chosenImg}`;
  return (
    <>
      <img className={styles.bgImg} src={setImg} alt="background-img" />
    </>
  );
}

export default BgImg;
