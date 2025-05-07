import React from "react";
import data from "../utils/data";

const UserCard = ({ name, email, rollNo }) => {
  return (
    <div>
      <div>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Roll No: {rollNo}</h3>
      </div>
    </div>
  );
};

export default UserCard;
