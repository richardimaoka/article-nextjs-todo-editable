import { deleteTodo } from "@/api/server-actions";
import styles from "./TodoDeleteButton.module.css";

interface Props {
  todoId: string;
}

export function TodoDeleteButton(props: Props) {
  return (
    <>
      <button
        className={styles.component}
        formAction={deleteTodo}
        type="submit"
      >
        x
      </button>
      <input hidden type="text" value={props.todoId} readOnly />
    </>
  );
}
