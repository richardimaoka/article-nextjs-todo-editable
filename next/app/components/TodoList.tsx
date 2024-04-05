import { Todo } from "@/api/types";
import { TodoItem } from "./item/TodoItem";

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

type AugmentedTodo = Todo & {
  prevPos: number;
  currentPos: number;
};

function augment(todos: Todo[]): AugmentedTodo[] {
  const s1 = todos.map((t, i) => ({ ...t, prevPos: i }));
  const s2 = s1.toSorted(compare);
  const s3 = s2.map((t, i) => ({ ...t, currentPos: i }));

  return s3;
}

export function TodoList(props: Props) {
  const todos = props.todos.reverse();

  return (
    <div>
      {todos.map((t) => {
        return (
          <div key={t.id}>
            <TodoItem todo={t.todo} id={t.id} done={t.done} />
          </div>
        );
      })}
    </div>
  );
}
