import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  portfolioCardContainer: {
    display: "flex",
    justifyContent: "center",
  },
  portfolioCards: {
    width: "100%",
    height: "100%",
  },
  cardImages: {
    height: "65%",
  },
};

function PortfolioCard(props) {
  return (
    <Row xs={1} md={2} lg={3} style={styles.portfolioCardContainer}>
      <>
        {props.portfolioContent.map((item) => (
          <Col className="mb-3">
            <Card style={styles.portfolioCards} key={item.id}>
              <Card.Img style={styles.cardImages} variant="top" src={item.image} />
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
          </Col>
        ))}
      </>
    </Row>
  );
}

export default PortfolioCard;
