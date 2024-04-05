import styles from "./TodoText.module.css";

interface Props {
  todo: string;
  done?: boolean;
}

export function TodoText(props: Props) {
  return <div className={styles.component}>{props.todo}</div>;
}
