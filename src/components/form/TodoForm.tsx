"use client";

import { experimental_useOptimistic as useOptimistic, useRef } from "react";
import { Button } from "../button";
import { Plus } from "phosphor-react";
import { addTodo } from "@/actions/actions";

import styles from "./todoForm.module.scss";

type Todo = {
  id: number;
  name: string;
};

type TodoFormProps = {
  todos: Todo[];
};

export const TodoForm: React.FC<TodoFormProps> = ({ todos }) => {
  const ref = useRef<HTMLFormElement>(null);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    }
  );

  return (
    <>
      <form
        ref={ref}
        className={styles.todoForm_container}
        action={async (formData) => {
          ref.current?.reset();
          addOptimisticTodo({
            id: optimisticTodos.length + 1,
            name: formData.get("content") as string,
          });
          await addTodo(formData);
        }}
      >
        <input
          type="text"
          className={styles.form_input}
          placeholder="Write your todo"
          name="content"
          required
        />
        <Button variant="primary" text="Add" icon={<Plus size={24} />} />
      </form>
      {optimisticTodos.map((todo: Todo) => (
        <ul key={todo.id}>
          <li>
            {todo.id}&nbsp;{todo.name}
          </li>
        </ul>
      ))}
    </>
  );
};
