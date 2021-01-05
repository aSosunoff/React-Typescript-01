import React, { useState } from "react";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log(title);
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
