import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  
  return (
    <>
      <h3 className="pb-8">Learn Redux Toolkit</h3>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
