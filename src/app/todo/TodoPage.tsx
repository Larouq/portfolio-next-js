import { prisma } from "../../../lib/prisma";
import styles from "./todoPage.module.scss";

type Todo = {
  id: number;
  name: string;
};

async function getTodoList() {
  const data = await prisma.todo.findMany();
  return data;
}

export default async function AboutPage() {
  const data: Todo[] = await getTodoList();

  return (
    <section className={styles.todo_container}>
      <h1>Todo</h1>
      <div>
        {data.map((todo: Todo) => (
          <ul key={todo.id}>
            <li>
              {todo.id}&nbsp;{todo.name}
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
