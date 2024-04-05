"use server";

import crypto from "crypto";
import { revalidatePath } from "next/cache";

import { z } from "zod";

export async function createTodo(formData: FormData): Promise<string> {
  console.log("invoking server action createTodo");

  const schema = z.object({
    todo: z.string({
      invalid_type_error: "invalid todo",
    }),
  });

  const validatedFields = schema.safeParse({
    todo: formData.get("todo"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    const error =
      validatedFields.error.flatten().fieldErrors?.todo?.join(", ") ||
      "some error happened";
    return error;
  }

  const todo = validatedFields.data.todo;
  const uuid = crypto.randomUUID();
  const item = { todo: todo, id: uuid };
  const jsonPayload = JSON.stringify(item);

  await fetch("http://localhost:3036/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: jsonPayload,
  });

  revalidatePath("/");

  return "";
}

export async function deleteTodo(formData: FormData): Promise<string> {
  console.log("invoking server action deleteTodo");

  const schema = z.object({
    todoId: z.string({
      invalid_type_error: "invalid todo ID",
    }),
  });

  const validatedFields = schema.safeParse({
    todoId: formData.get("todoId"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    const error =
      validatedFields.error.flatten().fieldErrors?.todoId?.join(", ") ||
      "some error happened";
    return error;
  }

  const todoId = validatedFields.data.todoId;

  await fetch(`http://localhost:3036/todos/${todoId}`, {
    method: "DELETE",
  });

  revalidatePath("/");

  return "";
}
