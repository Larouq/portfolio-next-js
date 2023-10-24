"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
  const content = formData.get("content");

  try {
    await prisma.todo.create({
      data: {
        name: content as string,
      },
    });
  } catch (e) {
    return {
      error: e,
    };
  }

  revalidatePath("/todo");
};
