import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // {} tipo de dato objeto
  // React.FC avisa que siempre va a tener una propiedad children
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem 
        key={item.id} 
        text={item.text}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
