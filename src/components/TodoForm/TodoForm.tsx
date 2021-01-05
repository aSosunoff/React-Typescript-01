import React from "react";

const TodoForm: React.FC = () => {
  return (
    <div className="input-field col s6 mt2">
      <input id="title" type="text" />
      <label htmlFor="title">Введите название дела</label>
    </div>
  );
};

export default TodoForm;
