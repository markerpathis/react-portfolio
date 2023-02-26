import React from "react";
import PortfolioCard from "./PortfolioCard";
import CardGroup from "react-bootstrap/CardGroup";

import portfolioImage1 from "../assets/retro-systems.jpg";
import portfolioImage2 from "../assets/jp-choose-your-own.jpg";
import portfolioImage3 from "../assets/sketch-plan.jpg";
import portfolioImage4 from "../assets/top-down-view1.jpg";
import portfolioImage5 from "../assets/top-down-view2.jpg";
import portfolioImage6 from "../assets/movie-moodboard.png";

const portfolioContent = [
  // Project 2
  {
    id: 1,
    title: "Group Project 2 (New DND)",
    description: "Short description... project 2",
    deployedUrl: "https://new-dnd7.herokuapp.com/",
    githubUrl: "https://github.com/deafboi6/newDND",
    image: portfolioImage1,
  },
  // Project 1
  {
    id: 2,
    title: "Group Project 1 (Movie Moodboard)",
    description: "Short description... project 1",
    deployedUrl: "https://abbeydoyle.github.io/movie-moodboard/",
    githubUrl: "https://github.com/abbeydoyle/movie-moodboard",
    image: portfolioImage6,
  },
  // PWA Text Editor
  {
    id: 3,
    title: "PWA: Text Editor",
    description: "Short description... JATE",
    deployedUrl: "https://pwa-text-editor-markerpathis.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/progressive-webapp-text-editor",
    image: portfolioImage2,
  },
  // MVC Tech Blog
  {
    id: 4,
    title: "MVC Tech Blog (Code Onion)",
    description: "Short description... Code Onion",
    deployedUrl: "https://code-onion.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/mvc-tech-blog",
    image: portfolioImage3,
  },
  // Express JS Note Taker
  {
    id: 5,
    title: "Express JS Note Taker",
    description: "Short description... JS Note Taker",
    deployedUrl: "https://note-taker-markerpathis.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/express-js-note-taker",
    image: portfolioImage4,
  },
  // Work Day Scheduler
  {
    id: 6,
    title: "Work Day Scheduler",
    description: "Short description... Work Day Schedule",
    deployedUrl: "https://markerpathis.github.io/work-day-scheduler/",
    githubUrl: "https://github.com/markerpathis/work-day-scheduler",
    image: portfolioImage5,
  },
];

function PortfolioComponent() {
  return (
    <CardGroup>
      <PortfolioCard portfolioContent={portfolioContent} />
    </CardGroup>
  );
}

export default PortfolioComponent;
