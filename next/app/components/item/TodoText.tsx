import styles from "./TodoText.module.css";

interface Props {
  todo: string;
  todoId: string;
  done?: boolean;
}

export function TodoText(props: Props) {
  return (
    <div className={styles.component}>
      {props.todo}
      <input hidden type="text" name="todo" value={props.todo} readOnly />
      <input hidden type="text" name="todoId" value={props.todoId} readOnly />
    </div>
  );
}
