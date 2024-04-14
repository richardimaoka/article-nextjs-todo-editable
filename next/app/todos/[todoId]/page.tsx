import styles from "./page.module.css";
import { getTodo } from "@/api/get";

interface Props {
  params: { todoId: string }; // for dynamic routes only
}

export default async function Page(props: Props) {
  const todo = await getTodo(props.params.todoId);
  return <main className={styles.component}>{props.params.todoId}</main>;
}
