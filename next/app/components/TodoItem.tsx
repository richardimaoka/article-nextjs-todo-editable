import styles from "./TodoItem.module.css";

interface Props {
  todo: string;
  done?: boolean;
}

export function TodoItem(props: Props) {
  return (
    <div className={styles.component}>
      <input type="checkbox" />
      <div>{props.todo}</div>
      <button>x</button>
    </div>
  );
}
