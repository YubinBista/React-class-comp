import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err)=>console.log(err)
  );
  return (
    <div >
      hi

    </div>
  );
}

export default App;
