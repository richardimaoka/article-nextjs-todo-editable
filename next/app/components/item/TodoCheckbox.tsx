import { doneTodo, undoneTodo } from "@/api/server-actions";
import styles from "./TodoCheckbox.module.css";

interface Props {
  done?: boolean;
}

export function TodoCheckbox(props: Props) {
  return (
    <button
      className={styles.button}
      formAction={props.done ? undoneTodo : doneTodo}
    >
      <label className={styles.label}>
        <input
          type="checkbox"
          name="currentDone"
          className={styles.checkbox}
          checked={props.done}
          readOnly
        />
      </label>
    </button>
  );
}
