import styles from "./TodoCardTitle.module.css";

interface Props {
  title: string;
}

export function TodoCardTitle(props: Props) {
  return (
    <input
      className={styles.component}
      defaultValue={props.title}
      placeholder="enter title here"
    />
  );
}
