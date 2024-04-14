"use server";

import crypto from "crypto";
import { revalidatePath } from "next/cache";

import { z } from "zod";
import { Todo } from "./types";

export async function createTodo(_: any, formData: FormData): Promise<string> {
  console.log("invoking server action createTodo");

  const schema = z.object({
    todo: z.string({
      invalid_type_error: "invalid todo",
    }),
  });

  // throws upon error
  const validatedFields = schema.parse({
    todo: formData.get("todo"),
  });

  const todo = validatedFields.todo;
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

  // throws upon error
  const validatedFields = schema.parse({
    todoId: formData.get("todoId"),
  });

  const todoId = validatedFields.todoId;

  await fetch(`http://localhost:3036/todos/${todoId}`, {
    method: "DELETE",
  });

  revalidatePath("/");

  return "";
}

export async function updateTodo(formData: FormData): Promise<string> {
  console.log("invoking server action updateTodo");

  const schema = z.object({
    todoId: z.string({
      invalid_type_error: "invalid todo ID",
    }),
    todo: z.string({
      invalid_type_error: "invalid todo",
    }),
    description: z.string({
      invalid_type_error: "invalid description",
    }),
  });

  // throws upon error
  const validatedFields = schema.parse({
    todoId: formData.get("todoId"),
    todo: formData.get("todo"),
    currentDone: formData.get("currentDone"),
  });

  const todoId = validatedFields.todoId;

  await fetch(`http://localhost:3036/todos/${todoId}`, {
    method: "PATCH",
  });

  revalidatePath("/");

  return "";
}

async function updateDoneFlag(
  targetDoneState: boolean,
  formData: FormData
): Promise<string> {
  const schema = z.object({
    todoId: z.string({
      invalid_type_error: "invalid todo ID",
    }),
    todo: z.string({
      invalid_type_error: "invalid todo",
    }),
  });

  // throws upon error
  const validatedFields = schema.parse({
    todoId: formData.get("todoId"),
    todo: formData.get("todo"),
    currentDone: formData.get("currentDone"),
  });

  const todoId = validatedFields.todoId;
  const todo = validatedFields.todo;
  const item: Todo = { id: todoId, todo: todo, done: targetDoneState };
  const jsonPayload = JSON.stringify(item);

  console.log("invoking fetch", jsonPayload);
  await fetch(`http://localhost:3036/todos/${todoId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: jsonPayload,
  });

  revalidatePath("/");

  return "";
}

export async function doneTodo(formData: FormData): Promise<string> {
  console.log("invoking server action doneTodo");
  return updateDoneFlag(true, formData);
}

export async function undoneTodo(formData: FormData): Promise<string> {
  console.log("invoking server action undoneTodo");
  return updateDoneFlag(false, formData);
}
