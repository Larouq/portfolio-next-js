"use client";

import { Button } from "../button";
import { Plus } from "phosphor-react";

import styles from "./todoForm.module.scss";

export const TodoForm: React.FC = () => {
  return (
    <form className={styles.todoForm_container}>
      <input className={styles.form_input} />
      <Button
        variant="primary"
        text="Add"
        onClick={() => console.log("uizhfz")}
        icon={<Plus size={24} />}
      />
    </form>
  );
};
