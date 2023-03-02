import React from "react";
import parkerImage from "../../assets/parkerImage.png";

export default function About() {
  return (
    <div className="content">
      <h2>About Me</h2>
      <div>
        <img src={parkerImage} alt="" height="200px" />
      </div>
      <p>
        <br />
        Hello! My name is Parker Mathis and this is my developer portfolio. I'm currently enrolled in the UW coding boot camp and am expecting to complete the program in March 2023. Throughout the
        boot camp, I will be using this portfolio to show links for my projects and assignments. This portfolio will be a project itself, and I'm planning to update it as I learn more throughout the
        boot camp.
        <br />
        <br />
        Check back here later to see more!
      </p>
    </div>
  );
}
