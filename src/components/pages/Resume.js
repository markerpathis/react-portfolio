import React from "react";
import Button from "react-bootstrap/Button";
import ResumeDoc from "../../assets/Resume.pdf";

const styles = {
  button: {
    backgroundColor: "#1D3557",
    border: "transparent",
  },
};

export default function Resume() {
  return (
    <div className="content">
      <h2>Resume</h2>
      <Button style={styles.button} target="_blank" rel="noreferrer" href={ResumeDoc} download="Resume.pdf">
        Download
      </Button>
      <br></br>
      <br></br>
      <h2>Skills Summary</h2>

      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Express.js</li>
        <li>React.js (in progress)</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Git</li>
      </ul>
    </div>
  );
}
