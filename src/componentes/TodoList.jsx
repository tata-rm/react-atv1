import '../App.css';

function TodoList({tasks}) {
   
   return (
    <ul className='ul'>
      {tasks.map(task => (
        <li className='li' key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}


export default TodoList;