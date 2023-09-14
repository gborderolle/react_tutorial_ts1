import "./App.css";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

function App() {
  const todos = [new Todo("Learn 1"), new Todo("Learn 2")];

  return (
    <>
      <div>
        <Todos items={todos}></Todos>
      </div>
    </>
  );
}

export default App;
