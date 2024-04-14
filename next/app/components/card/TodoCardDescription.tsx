"use client";

import styles from "./TodoCardDescription.module.css";

interface Props {
  description?: string;
}

export function TodoCardDescription(props: Props) {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>description</h2>
      <textarea
        name="description"
        className={styles.textarea}
        defaultValue={props.description}
        placeholder="enter description here"
        onBlur={async (e) => {
          e.currentTarget.form?.requestSubmit();
        }}
      />
    </div>
  );
}
