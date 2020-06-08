import React from 'react';
import './App.css';
import BulletinBoard from './BulletinBoard.js';
import NavigationBar from './NavigationBar.js';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BulletinBoard />
    </div>
  );
}

export default App;
