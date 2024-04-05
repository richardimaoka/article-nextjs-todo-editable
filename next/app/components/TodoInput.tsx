"use client";

import { useEffect, useRef } from "react";
import styles from "./TodoInput.module.css";
import { createTodo } from "@/api/server-actions";
import { useFormState } from "react-dom";

export function TodoInput() {
  const ref = useRef<HTMLFormElement>(null);

  const [errorMessage, formAction] = useFormState(
    createTodo,
    "" /* no erro message*/
  );

  useEffect(() => {
    if (errorMessage === "") {
      ref.current?.reset();
    }
  });

  return (
    <form className={styles.component} ref={ref} action={formAction}>
      <input
        className={styles.input}
        placeholder="enter todo here"
        required
        type="text"
        name="todo"
      />
      <button type="submit" className={styles.button}>
        &#43;{/* `+` sign */}
      </button>
    </form>
  );
}
