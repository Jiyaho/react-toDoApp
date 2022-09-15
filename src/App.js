import Login from './routes/Login';
import Todo from './routes/Todo';
import BgImg from './components/BgImg';

function App() {
  const savedUsername = localStorage.getItem("username");
  
  return (
    <div>
      {savedUsername === null ? <Login /> : <Todo />}
      {<BgImg />}
    </div>
  );
}

export default App;
