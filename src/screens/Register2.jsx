import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register2 = () => {
  const expensiveCalculation = (num) => {
    console.log("Calculation...");
    for (let i = 0; i < 10000000; i++) {
      num += 1;
    }
    return num;
  };

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "Todo Task"]);
  };
  return (
    <div>
      <div>
        <h2>My Todos App</h2>
        {todos.map((todos, index) => {
          return <p key={index}>{todos}</p>;
        })}
        <button onClick={addTodo}>AddTodo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      {/* <button>Take me to UserList</button> */}
      <Link to="/user-list">Take me to UserList</Link>
    </div>
  );
};

export default Register2;
