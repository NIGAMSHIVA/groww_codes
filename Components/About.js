import React from "react";
import Header from "./Header";
import Parent from "./Parent";
import Newhooks from "./Newhooks";

const About = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.Age}</h1>
          <Header />
      <Parent />
      <Newhooks />
    </div>
  );
};

export default About;
