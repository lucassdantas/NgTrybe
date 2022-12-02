import './App.css';
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai"
import {useState, useEffect} from 'react'
import axios from 'axios';
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
              <button>
                <AiOutlineDelete size={20} color={"#64697b"}></AiOutlineDelete>
              </button>
          </div>) 
      })}
    </div>
  )
}
function App() {
  async function handleWithNewButton(){
    setInputVisibility(!inputVisibility)
  }

  async function getTodos() {
    const response = await axios.get("http://localhost:3001/todos")
    setTodos(response.data)
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
        <button onClick={handleWithNewButton} className='newTaskButton'>New Task</button>
      </header>
    </div>
  );
}

export default App;
