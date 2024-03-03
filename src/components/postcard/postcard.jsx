const PostCard = ({ post }) => {
  const { title, description, urlToImage, category, author, publishedAt } =
    post;
  return (
    <div className="post-card">
      <img src={urlToImage} alt="Post" className="post-card-image" />

      <div className="post-card-content">
        <p className="post-tag">{category}</p>
        <h3 className="post-card-title">{title}</h3>
        <p className="post-card-text">{description}</p>
      </div>

      <div className="creator">
        <p className="post-card-author">{author.username}</p>
        <span className="post-card-date">{publishedAt}</span>
      </div>
    </div>
  );
};

export default PostCard;
