import { useState } from 'react'
import './App.css'

// TODO
// Create, Read, Update, Delete

function App() {
  const [todoList, setTodoList] = useState([
    {id: 0, content: '예습하기'},
    {id: 1, content: '복습하기'},
    {id: 2, content: '과제하기'},
  ]);

  return (
    <>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

function TodoInput({todoList, setTodoList}){

  const [inputValue, setInputValue] = useState('');

  return(
    <>
      <input value={inputValue} onChange={(event)=> setInputValue(event.target.value)}/>
      <button onClick={ () => {
        const newTodo = { id: Number(new Date()), content:inputValue }
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
        setInputValue("");
      }}
      >Add</button>
    </>
  );
}

function TodoList({todoList, setTodoList}){
  return (
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>
        ))}
      </ul>
  )
}

function Todo({todo,setTodoList}){
  const [inputValue, setInputValue] = useState('');

  return (<li>{todo.content}
    <input value={inputValue} onChange={(event)=> setInputValue(event.target.value)}/>
    <button onClick={()=> {
      setTodoList((prev) => prev.map((el) => el.id === todo.id ? {...el, content: inputValue} : el ));
      setInputValue("");
    }}>edit</button>
    <button onClick={()=>{
      setTodoList(prev => {
        return prev.filter(el => el.id !== todo.id)
      })
    }}>Del</button>
  </li>
  );
}

export default App
