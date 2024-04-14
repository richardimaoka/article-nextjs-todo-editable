import styles from "./TodoCard.module.css";

interface Props {
  todoId?: string;
  title: string;
  description?: string;
}

export function TodoCard(props: Props) {
  return (
    <div className={styles.component}>
      <input className={styles.title} defaultValue={props.title} />
      <h2 className={styles.descriptionTitle}>description</h2>
      {props.description && (
        <div className={styles.description}>{props.description}</div>
      )}
    </div>
  );
}
