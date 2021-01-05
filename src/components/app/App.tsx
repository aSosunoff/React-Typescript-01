import React from "react";
import Navbar from "../navbar";
import TodoForm from "../TodoForm";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
};

export default App;
