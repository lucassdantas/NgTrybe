import './App.css';
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai"
const arrayTodos = [{name: "Limpar", status:false}]
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
  //next step
  return (
    <div className="App">
      <header className="container">
        <div className='header'>
          <h1>Titl</h1>
        </div>
        <Todos todos={arrayTodos}></Todos>
      </header>
    </div>
  );
}

export default App;
