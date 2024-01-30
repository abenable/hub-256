import { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
// import PostCard from '../../components/post/postcard';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/blog/all');
      setPosts(response.data.blogs);
    } catch (error) {
      console.error('Error grbbing stories,', error);
    }
  };
  fetchData();

  return (
    <>
      <div className='header'>
        <div className='logo'>
          <h1>HUB-256</h1>
        </div>
        <div className='navbar'>
          <ul>
            <li>Blog</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>
              <button type='button'>Get started</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='section-header'>
        <h2>Explore our latest stories</h2>
        <p>Stay informed and inspired with our bite-size articles.</p>
      </div>
      <div className='main-content'>
        {posts &&
          posts.map((post) => (
            <li key={post._id}>
              <p>{post.title}</p>
              <p>{post.content}</p>
              <p>{post.date}</p>
            </li>
          ))}
      </div>
    </>
  );
};

export default Home;
