import { createTodo } from "@/api/server-actions";
import { TodoInput } from "./TodoInput";

export function TodoInputForm() {
  return (
    <form action={createTodo}>
      <TodoInput />
    </form>
  );
}
