"use client";

import { useState } from "react";
import styles from "./TodoCard.module.css";
import { TodoCardTitle } from "./TodoCardTitle";
import { TodoCardDescription } from "./TodoCardDescription";
import { updateTodo } from "@/api/server-actions";

interface Props {
  todoId: string;
  title: string;
  description?: string;
}

export function TodoCard(props: Props) {
  const [state, setState] = useState(true);

  return (
    <form className={styles.form} action={updateTodo}>
      <div className={styles.component}>
        <input hidden name="todoId" value={props.todoId} readOnly />

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
