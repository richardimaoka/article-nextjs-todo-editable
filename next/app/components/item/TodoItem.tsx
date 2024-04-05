import { TodoCheckbox } from "./TodoCheckbox";
import { TodoDeleteButton } from "./TodoDeleteButton";
import styles from "./TodoItem.module.css";
import { TodoText } from "./TodoText";

interface Props {
  todo: string;
  done?: boolean;
}

export function TodoItem(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCheckbox />
      <TodoText todo={props.todo} done={props.done} />
      <TodoDeleteButton />
    </div>
  );
}