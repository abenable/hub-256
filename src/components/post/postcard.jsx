import './postcard.css';
const PostCard = ({ post }) => {
  const { title, content, tags, author, date, urlToImage } = post;

  return (
    <div className='post'>
      {/* <img src={urlToImage} alt='Image' /> */}
      <div className='post-content'>
        <ul className='tags'>
          {tags.map((tag) => {
            <li key={tag.id}>{tag}</li>;
          })}
        </ul>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className='post-details'>
          <p>{author}</p>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
