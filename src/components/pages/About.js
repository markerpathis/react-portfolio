import React from "react";
import parkerImage from "../../assets/parkerImage.png";
import "../../styles/content.css";

export default function About() {
  return (
    <div className="content">
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
        So far in the boot camp we've learned HTML, CSS, and we're just getting started on JavaScript! Later on in the boot camp I'll be learning Node, SQL, MongoDB, React, and more. Check back here
        later to see more!
      </p>
    </div>
  );
}
