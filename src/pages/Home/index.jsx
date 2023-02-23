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
    <div className="w-full h-full flex center-items">
      <div className="m-auto p-10 text-center">
        <h1 className="font-bold text-4xl">Shopping Cart</h1>
        <button
          type="button"
          className="btn w-full mt-10"
          onClick={navigateToAuth}
        >
          Login
        </button>
        <button
          type="button"
          className="btn w-full my-5"
          onClick={navigateToRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
