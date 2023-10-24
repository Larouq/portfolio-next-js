import { TodoForm } from "@/components/form";
import { prisma } from "../../../lib/prisma";

import styles from "./todoPage.module.scss";

async function getTodoList() {
  const data = await prisma.todo.findMany();
  return data;
}

export default async function AboutPage() {
  const data = await getTodoList();

  return (
    <section className={styles.todo_container}>
      <h1>Todo</h1>
      <TodoForm todos={data} />
    </section>
  );
}
