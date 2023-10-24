"use client";

import { Button } from "../button";
import { Plus } from "phosphor-react";

export const TodoForm: React.FC = () => {
  return (
    <form>
      <input />
      <Button
        variant="primary"
        text="Add"
        onClick={() => console.log("uizhfz")}
        icon={<Plus size={24} />}
      />
    </form>
  );
};
