import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PostCard from "../../components/postcard/postcard";
import { HorizontalCard } from "../../components/cards/horizontalCard";

function Index() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch("https://api.hub256.live/blog/latest");
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
      <HorizontalCard />
      <Container style={{ marginBottom: "20vh" }}>
        <h2 className="mx-auto">Latest Posts</h2>
        <Row
          xs={1}
          lg={3}
          md={2}
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
