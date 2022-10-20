
import AddTodo from './Components/AddTodo';
import Navigation from './Components/Navigation';
import TodoList from './Components/TodoList';
import { useDispatch } from "react-redux"; 


function App() {
  const dispatch = useDispatch(); // Works!
  return (
    <div className="App">
     <Navigation/>
     <AddTodo/>
     <TodoList/>
    
    </div>
  );
}

export default App;
