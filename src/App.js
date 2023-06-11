import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"
import { Col, Container, Row } from 'react-bootstrap';
import Intro from './components/Intro';
import { Trending } from './components/Trending';
function App() {

  const [count, setCount] = useState(0);



  return (
    // intro section
    <div>
      <div className='background'>
        <h1>PROJECT FILM</h1>
        <NavigationBar />
          <Intro/>
      </div>
      {/* end intro section */}
      <div className='trending'>
          <Trending/>
      </div>
    </div>
  );
}

export default App;
