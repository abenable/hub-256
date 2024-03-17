import { useEffect, useState } from "react";
import { auto } from "@popperjs/core";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PostCard from "../../components/postcard/postcard";
import IntroCarousel from "../../components/IntroCarousel/IntroCarousel";

function Index() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch(
          "https://hub-256-cf70c3960fba.herokuapp.com/blog/latest"
        );
        const data = await response.json();
        setLatestPosts(data);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <div>
      <IntroCarousel />
      <Container style={{ marginBottom: "20vh" }}>
        <h2>Latest Posts</h2>
        <Row
          xs={auto}
          lg={2}
          md={auto}
          xl={3}
          className="g-4"
          style={{ marginTop: "5vh" }}
        >
          {latestPosts.map((post, idx) => (
            <Col key={idx}>
              <PostCard key={post._id} post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Index;
