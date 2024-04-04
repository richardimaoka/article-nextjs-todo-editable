import styles from "./TodoApp.module.css";

import { Title } from "./Title";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

interface Props {}

export function TodoApp(props: Props) {
  return (
    <form className={styles.component}>
      <Title />
      <div>
        <TodoInput />
        <TodoItem todo={"Settle in a relaxing"} />
      </div>
    </form>
  );
}
