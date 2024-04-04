import styles from "./TodoItem.module.css";

interface Props {
  todo: string;
  done?: boolean;
}

export function TodoItem(props: Props) {
  return (
    <div className={styles.component}>
      <input type="checkbox" className={styles.checkbox} />
      <div className={styles.text}>{props.todo}</div>
      <button className={styles.button}>x</button>
    </div>
  );
}
