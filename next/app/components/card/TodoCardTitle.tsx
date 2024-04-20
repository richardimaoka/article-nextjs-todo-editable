"use client";

import styles from "./TodoCardTitle.module.css";

interface Props {
  title: string;
}

export function TodoCardTitle(props: Props) {
  return (
    <input
      name="todo"
      aria-label="title"
      className={styles.component}
      defaultValue={props.title}
      placeholder="enter title here"
      onBlur={async (e) => {
        e.currentTarget.form?.requestSubmit();
      }}
    />
  );
}
