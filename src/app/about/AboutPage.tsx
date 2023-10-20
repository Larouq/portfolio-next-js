import { prisma } from "../../../lib/prisma";

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
    <section>
      <h1>Todo</h1>
      <div>
        {data.map((todo: Todo) => (
          <p key={todo.id}>
            {todo.id}&nbsp;{todo.name}
          </p>
        ))}
      </div>
    </section>
  );
}
