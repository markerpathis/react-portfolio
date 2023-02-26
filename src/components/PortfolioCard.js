import React from "react";
import Card from "react-bootstrap/Card";

const styles = {
  portfolioCardContainer: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "10px",
  },
  portfolioCards: {
    width: "30%",
  },
};

function PortfolioCard(props) {
  return (
    <div style={styles.portfolioCardContainer}>
      <>
        {props.portfolioContent.map((item) => (
          <Card style={styles.portfolioCards} key={item.id}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href={item.deployedUrl} target="_blank" rel="noreferrer">
                Deployed App
              </Card.Link>
              <Card.Link href={item.githubUrl} target="_blank" rel="noreferrer">
                GitHub Repo
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </>
    </div>
  );
}

export default PortfolioCard;
