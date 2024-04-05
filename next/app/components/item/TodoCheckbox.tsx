import { updateDoneFlag } from "@/api/server-actions";
import styles from "./TodoCheckbox.module.css";

interface Props {
  done?: boolean;
}

export function TodoCheckbox(props: Props) {
  return (
    <button className={styles.button} formAction={updateDoneFlag}>
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
