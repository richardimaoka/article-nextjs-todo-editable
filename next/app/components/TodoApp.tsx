import styles from "./TodoApp.module.css";

import { Todo } from "@/api/types";
import { Title } from "./Title";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";

interface Props {}

export async function TodoApp(props: Props) {
  const res = await fetch("http://localhost:3036/todos");
  const todos: Todo[] = await res.json();

  return (
    <div className={styles.component}>
      <Title />
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
}
