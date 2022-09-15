import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import TodoForm from './components/TodoForm';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/todo" element={<TodoForm />}></Route>
      </Routes>
    </Router>
  )
};

export default AppRouter;