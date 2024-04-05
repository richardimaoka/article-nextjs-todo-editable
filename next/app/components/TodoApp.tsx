import styles from "./TodoApp.module.css";

import { Title } from "./Title";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./item/TodoItem";

interface Props {}

type Todo = {
  id: string;
  todo: string;
};

export async function TodoApp(props: Props) {
  const res = await fetch("http://localhost:3036/todos");
  const todos: Todo[] = await res.json();

  return (
    <form className={styles.component}>
      <Title />
      <div>
        <TodoInput />
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t.todo} />
        ))}
      </div>
    </form>
  );
}
