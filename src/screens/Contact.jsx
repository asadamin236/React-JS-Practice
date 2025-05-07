// Contact.js
import React from "react";
import { store } from "../store/store";
import { incrementByAmount } from "../store/Reducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Contact = () => {
  const value = useSelector((state) => state.value); // Make sure this matches store setup

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
      {/* <Link to="/register2">Link Me To Register2</Link> */}
    </div>
  );
};

export default Contact;
