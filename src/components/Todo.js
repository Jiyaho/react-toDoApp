import { useState, useEffect } from 'react';
import styles from '../css/Todo.module.css';
import WeatherAPI from './WeatherAPI';
import GetClock from './Clock';

function Todo() {
  let [toDo, setToDo] = useState("");
  let [toDos, setToDos] = useState([]);

  const logOutClick = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("todos");
    window.location.replace("/react-toDoApp");
    //로그아웃 > localStorage 데이터 모두 삭제 후 로그인화면으로 이동
  };

  const onChange = (event) => setToDo(event.target.value);
  const toDoObj = {
    text: toDo,
    id: JSON.stringify(Date.now()) // id를 랜덤한 값으로 주기위한 코드
  };
  const saveToDos = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  };
  const deleteToDo = (event) => {
    const li = (event.target.parentElement);
    li.remove();
    toDos = toDos.filter((item) => item.id !== li.id); 
    saveToDos();
  };
  const handleToDoSubmit = (event) => {
    event.preventDefault();
    toDos.push(toDoObj);
    setToDos(toDos);
    setToDo("");
    saveToDos();
  };
  const savedUsername = localStorage.getItem("username");
  const savedToDos = localStorage.getItem("todos");
  const parsedToDos = JSON.parse(savedToDos);
  useEffect(() => {
    if (savedToDos) {
      setToDos(JSON.parse(savedToDos))
  }}, []);
  // todo를 입력하고 새로고침 후 추가로 todo 입력 시 local storage 값들이 초기화되던 현상 발생
  // -> 새로고침 전의 기존 todo history 또한 유지되도록 함.
  // useEffect를 통해 렌더링될 때, localstorage에 todos가 존재한다면 그 값들을 setToDos에 보여줌.

  return (
    <div className={styles.container}>
      <button className={styles.logOutBtn} onClick={logOutClick}>🚪Log-out</button>
      <div>{<WeatherAPI />}</div>
      <div>{<GetClock />}</div>
      <h2 className={styles.greeting}>Hello, {savedUsername} 😄</h2>
      <div className={styles.toDoContainer}>
        <form onSubmit={handleToDoSubmit}>
          <input
            className={styles.toDoInput}
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="What are you going to do?"
          />
          <button className={styles.toDoBtn}>
            📝
          </button>
        </form>
        <ul>
          {savedToDos !== null
            ? parsedToDos.map((item, index) =>
              <li id={item.id} key={index}>
                <span>{item.text}</span>
                <button
                  className={styles.toDoDelBtn}
                  onClick={deleteToDo}
                >
                  ❌
                </button>
              </li>
            ) : null
          }
        </ul>
      </div>
    </div>
  );
};

export default Todo;