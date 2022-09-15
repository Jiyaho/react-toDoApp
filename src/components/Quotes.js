import styles from '../css/Login.module.css';

function Quotes() {
  const quotes = [
    {
        quote: "Dreams come true. Without that possibility, nature would not incite us to have them.",
        author: "John Updike",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas Edison",
    },
    {
        quote: "It is in the moment of decisions that your destiny is shaped.",
        author: "Anthony Robbins",
    },
    {
        quote: "What would life be if we had no courage to attempt anything?",
        author: "Vincent Van Gogh",
    },
    {
        quote: "It is hard to fail, but it is worse never to have tried to succeed.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Success is the ability to go from failure to failure without losing your enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "You are what you repeatedly do. Excellence is not an event is a habit.",
        author: "Aristotles",
    },
    {
        quote: "Wherever we look upon this earth, the opportunities take shape within the problems.",
        author: "Nelson Rockefeller",
    },
    {
        quote: "Our greatest glory is not in never failling but in rising every time we fail.",
        author: "Confucius(孔子)",
    },
    {
        quote: "Pain is temporary. Quitting lasts forever.",
        author: "Lance Armstrong",
    }
  ];

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  // Math는 JS에서 기본제공하는 Object이다. Math.floor()는 뒤의 소수점(Float)을 없애고 정수(Integer)만을 취급하는 함수이다.
  // random()은 소수점을 포함한 무작위한 숫자를 표출한다. 즉, random() * quotes.length는 quotes의 length 만큼 랜덤한 데이터 표출.
  
  return (
    <div>
      <p className={styles.quote}>{`"${todaysQuote.quote}"`}</p>
      <sapn className={styles.author}>{todaysQuote.author}</sapn>
    </div>
  )
};
export default Quotes;