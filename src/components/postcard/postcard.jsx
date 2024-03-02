const PostCard = () => {
  return (
    <div className="post-card">
      <img
        src="https://via.placeholder.com/150"
        alt="Post"
        className="post-card-image"
      />

      <div className="post-card-content">
        <p className="post-tag">Productivity</p>
        <h3 className="post-card-title">
          The 80+ Hour Week: Why we Cant Leave Work At Work
        </h3>
        <p className="post-card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          aspernatur explicabo sapiente! Qui laborum quae quis laboriosam quos
          exercitationem
        </p>
      </div>

      <div className="creator">
        <p className="post-card-author">abenable</p>
        <span className="post-card-date">25-03-2024</span>
      </div>
    </div>
  );
};

export default PostCard;
