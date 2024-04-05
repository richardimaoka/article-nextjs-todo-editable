import styles from "./TodoItem.module.css";

interface Props {
  todo: string;
  done?: boolean;
}

export function TodoItem(props: Props) {
  return (
    <div className={styles.component}>
      <label className={styles.label}>
        <input type="checkbox" className={styles.checkbox} />
      </label>
      <div className={styles.text}>{props.todo}</div>
      <button className={styles.button}>x</button>
    </div>
  );
}
