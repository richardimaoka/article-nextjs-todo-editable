"use client";

import styles from "./TodoApp.module.css";

import { createTodo } from "@/api/server-actions";
import { useRef } from "react";
import { Title } from "./Title";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./item/TodoItem";

interface Props {}

type Todo = {
  id: string;
  todo: string;
};

export async function TodoApp(props: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const res = await fetch("http://localhost:3036/todos");
  const todos: Todo[] = await res.json();

  async function formAction(formData: FormData) {
    const errorMessage = await createTodo(formData);
    console.log("formAction ", errorMessage);

    if (errorMessage === "" && ref.current) {
      // clear the input
      ref.current.reset();
    }
  }

  return (
    <form className={styles.component} ref={ref} action={formAction}>
      <Title />
      <div>
        <TodoInput />
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t.todo} id={t.id} />
        ))}
      </div>
    </form>
  );
}
