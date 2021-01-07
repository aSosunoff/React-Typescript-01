import React, { useEffect, useState } from "react";

import { LocalStorage } from "../../utils/LocalStorage.js";
import { ITodo } from "../interfaces";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { info, warning } from "../../utils/toast.js";

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
    setTodos((prev) => {
      info("Элемент добавлен");

      return [
        {
          title,
          id: Date.now(),
          completed: false,
        },
        ...prev,
      ];
    });

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
      setTodos((prev) => {
        info("Элемент удалён");
        return prev.filter((element) => element.id !== id);
      });
    }
  };

  const removeAllHandler = () => {
    const shouldRemove = window.confirm(
      "Вы уверены, что хотите удалить все элементы?"
    );

    if (shouldRemove) {
      setTodos((prev) => {
        warning("Элементы удалёны");

        return prev.filter((element) => !element.completed);
      });
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

      <button
        className="btn waves-effect waves-light red"
        onClick={removeAllHandler}
      >
        Удалить выбранные
      </button>
    </>
  );
};
