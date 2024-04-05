"use client";

import { Todo } from "@/api/types";
import { TodoItem } from "./item/TodoItem";
import { useState } from "react";

interface Props {
  todos: Todo[];
}

function compare(a: Todo, b: Todo): number {
  if (a.done && !b.done) {
    return 1; // if a is done but b is not, then bring a back to b
  } else if (!a.done && b.done) {
    return -1; // if a is not done but b is, then bring b back to a
  } else {
    return 0;
  }
}

export function TodoList(props: Props) {
  // const [todos, setTodos] = useState(props.todos);

  const todos = props.todos.toSorted(compare);

  return (
    <div>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t.todo} id={t.id} done={t.done} />
      ))}
    </div>
  );
}
