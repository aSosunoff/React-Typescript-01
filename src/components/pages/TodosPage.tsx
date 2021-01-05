import React, { useEffect, useState } from "react";
import LocalStorage from "../../utils/LocalStorage";
import { ITodo } from "../interfaces";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    if (LocalStorage.todos) {
      setTodos(LocalStorage.todos);
    }
  }, []);

  useEffect(() => {
    LocalStorage.todos = todos;
  }, [todos]);

  const addHandler = (title: string) =>
    setTodos((prev) => [
      {
        title,
        id: Date.now(),
        completed: false,
      },
      ...prev,
    ]);

  const toggleHandler = (id: number) =>
    setTodos((prev) =>
      prev.map((element) =>
        element.id === id
          ? {
              ...element,
              completed: !element.completed,
            }
          : element
      )
    );

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm(
      "Вы уверены, что хотите удалить элемент?"
    );

    if (shouldRemove) {
      setTodos((prev) => prev.filter((element) => element.id !== id));
    }
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  );
};
