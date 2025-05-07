import React from "react";
import Title from "../components/Title";
import UnorderList from "../components/UnorderList";

function About() {
  return (
    <>
      <Title
        name="Node JS Guides"
        collName={"GDC Zarobi"}
        schoolName={"GHS Zarobi"}
        contactNo={"0310"}
        rollNo={"5"}
      />
      ;
      <UnorderList />
      <Title name="General" />;
      <Title name="Node JS Core Concept" />;
    </>
  );
}

export default About;
