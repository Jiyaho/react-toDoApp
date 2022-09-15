import { useEffect, useState } from 'react';
import styles from '../css/Clock.module.css';

function GetClock() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const date = new Date()
  const years = String(date.getFullYear());
  const months = String(monthNames[date.getMonth()]);
  const dates = String(date.getDate());
  const NewDates = `${dates} / ${months} / ${years}`;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);

  return (
    <div className={styles.datesContainer}>
      <h3 className={styles.dates}>{NewDates}</h3>
      <h3 className={styles.times}>{time.toLocaleTimeString('en-US')}</h3>
    </div>
  );
};

export default GetClock;