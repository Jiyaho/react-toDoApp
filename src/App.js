import Login from './components/Login';
import Todo from './components/Todo';
import BgImg from './components/BgImg';

function App() {
  const savedUsername = localStorage.getItem('username');

  return (
    <main>
      {savedUsername === null ? <Login /> : <Todo />}
      {<BgImg />}
    </main>
  );
}

export default App;
