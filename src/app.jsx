import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return <RouterProvider router={router} />;
  // return <div>Hello</div>;
}

export default App;
