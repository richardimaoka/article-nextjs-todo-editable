import { notFound } from "next/navigation";
import { Todo } from "./types";
import { revalidatePath } from "next/cache";

export async function getTodo(id: string): Promise<Todo> {
  const res = await fetch(`http://localhost:3036/todos/${id}`, {});

  if (res.status === 404) {
    notFound();
  }

  const todo = (await res.json()) as Todo;

  return todo;
}
