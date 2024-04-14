"use client";

import { useState } from "react";
import styles from "./TodoCard.module.css";
import { TodoCardTitle } from "./TodoCardTitle";
import { TodoCardDescription } from "./TodoCardDescription";

interface Props {
  todoId?: string;
  title: string;
  description?: string;
}

export function TodoCard(props: Props) {
  const [state, setState] = useState(true);

  return (
    <form className={styles.form}>
      <div className={styles.component}>
        <div className={styles.title}>
          <TodoCardTitle title={props.title} />
        </div>

        <div className={styles.description}>
          <TodoCardDescription description={props.description} />
        </div>

        <div className={styles.button}>
          {state && <button type="submit">save todo</button>}
        </div>
      </div>
    </form>
  );
}
