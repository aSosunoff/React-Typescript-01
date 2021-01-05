import React from "react";
import cn from "classnames";
import { ITodo } from "../interfaces";
import styles from "./TodoList.module.scss";

interface ITodoListProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (!todos.length) {
    return <p className="center">Пока дел нет</p>;
  }

  return (
    <ul>
      {todos.map((element) => (
        <li
          key={element.id}
          className={cn(styles.todo, {
            [styles.completed]: element.completed,
          })}
        >
          <label>
            <input
              type="checkbox"
              checked={element.completed}
              onChange={onToggle.bind(null, element.id)}
            />
            <span>{element.title}</span>
            <i
              className="material-icons red-text"
              onClick={() => {
                onRemove(element.id);
              }}
            >
              delete
            </i>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
