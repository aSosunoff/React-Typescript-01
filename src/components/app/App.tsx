import React, { useState } from "react";
import Navbar from "../navbar";
import TodoForm from "../TodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<string>>([]);

  const addHandler = (title: string) => {
    setTodos((prev) => [...prev, title]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
      </div>
    </>
  );
};

export default App;
