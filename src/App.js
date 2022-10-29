
import AddTodo from './Components/AddTodo';
import Navigation from './Components/Navigation';
import TodoList from './Components/TodoList';



function App() {
 
  return (
    <div className="App">
     <Navigation/>
     <AddTodo/>
     <TodoList/>
    
    </div>
  );
}

export default App;
