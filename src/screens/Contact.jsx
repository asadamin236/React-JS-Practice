// Contact.js
import React, { useContext } from "react";
import { store } from "../store/store";
import { incrementByAmount } from "../store/Reducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CountContext } from "../context/CountContext";

const Contact = () => {
  const value = useSelector((state) => state.value); // Make sure this matches store setup
  const { count, setCount } = useContext(CountContext);
  console.log("Value2", { count });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{value}</h2>
      <button
        onClick={() => {
          store.dispatch(incrementByAmount(5));
          console.log("State Updated");
        }}
      >
        Increase Count By 5
      </button>
      <h2>ContextValue: {count}</h2> <br />
      <button onClick={increment}>Increment Value</button> <br />
      {/* <Link to="/register2">Link Me To Register2</Link> */}
    </div>
  );
};

export default Contact;
