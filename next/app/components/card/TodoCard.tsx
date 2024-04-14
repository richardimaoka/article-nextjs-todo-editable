import styles from "./TodoCard.module.css";

interface Props {
  todoId?: string;
  title: string;
  description?: string;
}

export function TodoCard(props: Props) {
  return (
    <div className={styles.component}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
}
