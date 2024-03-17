import Card from "react-bootstrap/Card";

const PostCard = ({ post }) => {
  const { title, urlToImage } = post;
  return (
    <Card style={{ width: "auto", height: "auto" }}>
      <Card.Img variant="top" src={urlToImage} style={{ height: "40vh" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Link href="#">Read more.</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
