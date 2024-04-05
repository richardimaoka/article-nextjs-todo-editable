"use client";

import { useRef } from "react";
import styles from "./TodoInput.module.css";
import { createTodo } from "@/api/server-actions";

export function TodoInput() {
  const ref = useRef<HTMLFormElement>(null);

  async function formAction(formData: FormData) {
    const errorMessage = await createTodo(formData);
    console.log("formAction ", errorMessage);

    if (errorMessage === "" && ref.current) {
      // clear the input
      ref.current.reset();
    }
  }

  return (
    <form ref={ref} action={formAction}>
      <div className={styles.component}>
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
      </div>
    </form>
  );
}
