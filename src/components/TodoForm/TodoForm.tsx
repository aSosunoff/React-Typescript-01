import React, { useState } from "react";

interface ITodoFprmProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<ITodoFprmProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field col s6 mt2">
      <input
        id="title"
        type="text"
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title">Введите название дела</label>
    </div>
  );
};

export default TodoForm;
