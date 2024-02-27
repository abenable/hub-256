import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [cookie, setCookie, removeCookie] = useCookies(['authToken']);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:5000/auth/register', {
        username,
        email,
        password,
      });
      setCookie('authToken', response.data.access_token);
      localStorage.setItem('isLoggedIn', true);
      navigate('/');
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input
        type='username'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUp;
