import styles from "./TodoCardDescription.module.css";

interface Props {
  description?: string;
}

export function TodoCardDescription(props: Props) {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>description</h2>
      <textarea
        className={styles.textarea}
        defaultValue={props.description}
        placeholder="enter description here"
      />
    </div>
  );
}
