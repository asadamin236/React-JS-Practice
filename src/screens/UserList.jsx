import React from "react";
import UserCard from "../components/UserCard";
// import data from "../utils/data";

const UserList = () => {
  return (
    <div>
      {data.map(({ name, email, rollNo }, index) => (
        <UserCard name={name} email={email} rollNo={rollNo} />
      ))}
    </div>
  );
};

export default UserList;

let data = [
  {
    name: "Asad",
    email: "asad@gmail.com",
    rollNo: "5",
  },
  {
    name: "Amir",
    email: "amir@gmail.com",
    rollNo: "6",
  },
  {
    name: "Aqib",
    email: "aqib@gmail.com",
    rollNo: "7",
  },
];
