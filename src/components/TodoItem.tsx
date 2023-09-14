export default function TodoItem(props: todoItemProps) {
  return <li>{props.text}</li>;
};

interface todoItemProps {
  text: string;
}
