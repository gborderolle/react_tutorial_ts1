const TodoItem: React.FC<todoItemProps> = ({ text }) => {
  return <li>{text}</li>;
};

export default TodoItem;

interface todoItemProps {
  text: string;
}
