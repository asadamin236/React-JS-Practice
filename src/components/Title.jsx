import React from "react";

const Title = ({ name, schoolName, collName, contactNo, rollNo }) => {
  return (
    <div>
      <h3 style={{ fontsize: 100, color: "green" }}>{name}</h3>;
      <h3 style={{ fontsize: 100, color: "green" }}>{rollNo}</h3>;
      <h3 style={{ fontsize: 100, color: "green" }}>{collName}</h3>;
      <h3 style={{ fontsize: 100, color: "green" }}>{schoolName}</h3>;
      <h3 style={{ fontsize: 100, color: "green" }}>{contactNo}</h3>;
    </div>
  );
};

export default Title;
