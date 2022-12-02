import './App.css';
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai"
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const Todos = ({todos}) => {
    return (
      <div className="todos">
        {todos.map(todo => {
          return (
            <div className="todo">
                <button className='checkbox' style={({backgroundColor: todo.status? "#A879EC":"#FFF"})}></button>
                <p>{todo.name}</p>
                <button>
                  <AiOutlineEdit size={20} color={"#64697b"}></AiOutlineEdit>
                </button>
                <button onClick={() => deleteTodo(todo)}>
                  <AiOutlineDelete size={20} color={"#64697b"}></AiOutlineDelete>
                </button>
            </div>) 
        })}
      </div>
    )
  }

  async function handleWithNewButton(){
    setInputVisibility(!inputVisibility)
  }

  async function getTodos() {
    const response = await axios.get("http://localhost:3001/todos")
    setTodos(response.data)
  }

  async function createTodo(){
    const response = await axios.post('http://localhost:3001/todos', {
      name: inputValue,
      status:true
    }) 
    getTodos()
    setInputVisibility(!inputVisibility)
  }

  async function deleteTodo(todo){
    const response = await axios.delete(`http:/localhost:3001/todos/${todo.id}`)
    getTodos()
  }
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [inputVisibility, setInputVisibility] = useState(false)
  useEffect(() => {
    getTodos()
  })
  return (
    <div className="App">
      <header className="container">
        <div className='header'>
          <h1>Tile</h1>
        </div>
        <Todos todos={todos}></Todos>
        <input 
          value={inputValue} 
          style={{display:inputVisibility ? 'block':'none'}}
          onChange={(e) => {setInputValue(e.target.value)}} 
          className='inputName' 
          type="text" />
        <button 
        onClick={inputVisibility? createTodo:handleWithNewButton}
        className='newTaskButton'>
          {inputVisibility ? "Confirm" : "+ New task"}
        </button>
      </header>
    </div>
  );
}

export default App;
