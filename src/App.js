import React from 'react';
import './App.css';
import Entrance from './Views/Entrance';
import Profile from './Views/Profile';

function App() {
  
  return (
    <div className="App">
        
        <Entrance>
            <Profile/>
            <Profile/>
            <Profile/>
        </Entrance>
        
    </div>

  )
} 


export default App;
