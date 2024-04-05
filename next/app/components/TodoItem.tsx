import { TodoCheckbox } from "./TodoCheckbox";
import styles from "./TodoItem.module.css";

interface Props {
  todo: string;
  done?: boolean;
}

export function TodoItem(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCheckbox />
      <div className={styles.text}>{props.todo}T</div>
      <button className={styles.button}>x</button>
    </div>
  );
}
