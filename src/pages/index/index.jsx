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
      <Container>
        <Row xs={auto} lg={2} md={auto} xl={3} className="g-4">
          {latestPosts.map((post, idx) => (
            <Col key={idx}>
              <PostCard key={post._id} post={post} />
            </Col>
          ))}
        </Row>
      </Container>
      <main className="content">
        <div className="target-post">
          <div className="target-post-img">
            <img
              src="https://via.placeholder.com/150"
              alt="Post"
              className="post-card-image"
            />
          </div>
          <div className="target-post-content">
            <p>Management</p>
            <h3>How to Get Started with Blogging</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptas, quidem, doloribus, quos eum quae voluptate quod
              consectetur
            </p>
            <p>Read article</p>
          </div>
        </div>
        <div>
          <h3>Most popular articles</h3>
          <div>
            <div className="popular-post"></div>
            <div className="posts"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
