import React from 'react'
import './App.css';
import HomeLayout from './Componats/HomeLayout';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <>
        <HomeLayout />
      </>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
}

export default App;
