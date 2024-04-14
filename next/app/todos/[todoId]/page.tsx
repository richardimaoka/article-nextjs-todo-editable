import { TodoCard } from "@/app/components/card/TodoCard";
import styles from "./page.module.css";
import { getTodo } from "@/api/get";

interface Props {
  params: { todoId: string }; // for dynamic routes only
}

export default async function Page(props: Props) {
  const todo = await getTodo(props.params.todoId);
  return (
    <main className={styles.component}>
      <div className={styles.card}>
        <div className={styles.inner}>
          <h1 className={styles.title}>{todo.todo}</h1>
          <h2 className={styles.descriptionTitle}>description</h2>
          <div className={styles.description}>{todo.description}</div>
        </div>
      </div>
    </main>
  );
}
