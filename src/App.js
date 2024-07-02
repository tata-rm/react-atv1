import TodoList from './componentes/TodoList';
import './App.css';

function App() {
  const tasks = [
    {id: 1, text: 'Aprender React'},
    {id: 2, text: 'Construir um projeto simples'}
   ];

  return (
    <TodoList tasks={tasks} />
  );
}

export default App;
