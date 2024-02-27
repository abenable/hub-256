import "./postcard.css";

const PostCard = ({ post }) => {
  const { title, content, tags, author, date } = post;

  return (
    <div className="post-card">
      <div className="post-card-content">
        <h3 className="post-card-title">{title}</h3>
        <p className="post-card-text">{content}</p>
        <ul className="post-card-tags">
          {tags.map((tag) => (
            <li key={tag.id} className="post-card-tag">
              {tag}
            </li>
          ))}
        </ul>
        <div className="post-card-details">
          <p className="post-card-author">{author}</p>
          <span className="post-card-date">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
