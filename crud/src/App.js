import './App.css';

const arrayTodos = [{name: "Limpar", status:false}]
const Todos = ({todos}) => {
  return (
    <div className="todos">
      {todos.map(todo => {
        return (
          <div className="todo">
              <p>{todo.name}</p>
          </div>) 
      })}
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="container">
        <Todos todos={arrayTodos}></Todos>
      </header>
    </div>
  );
}

export default App;
