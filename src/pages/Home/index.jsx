import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  // const location = useLocation();

  // console.log('location', location);

  const navigateToAuth = () => {
    navigate('/auth');
  };
  const navigateToRegister = () => {
    navigate('/auth/register');
  };

  return (
    <div>
      <h1>Home</h1>
      <button type="button" className="btn" onClick={navigateToAuth}>
        Login
      </button>
      <button type="button" className="btn" onClick={navigateToRegister}>
        Register
      </button>
    </div>
  );
}

export default Home;
