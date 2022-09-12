import React, { useEffect } from 'react';
import './App.css';
import HamburgerMenu from './Hamburger';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import LoadingBar from './LoadingBar';
import LinearDeterminate from './ProgressBar';
// import TitleEffect from './TitleEffect';
import { Wave1 } from './TitleEffect.js';
import ParticleBackground from './ParticleBackground';
import Circle from './Circle';
function App() {
  const [click, setClick] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [circle, setCircle] = React.useState(false);
  const handleClick = () => setClick(!click);
 
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const loadingRes = await setTimeout(() => {
        return setLoading(true)
      }, 5000);
      const circleRes = await setTimeout(() => {
        return setCircle(true)
      }, 12800);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          !loading ?
          <LinearDeterminate /> :
          
          <>
            {
              !circle &&
              <>
                <Circle />
                <div className="slide-txt">
                  <div className="scroller">
                    <div className="inner">
                      <span>hi,</span>
                      <span>creative agency</span>
                      <span>since 2010</span>
                      <span>through our belief</span>
                    </div>
                  </div>
                </div>
              </>
            }
          </>
          
        }
        {
          circle &&
          <>
            <ParticleBackground />
            <Wave1 />
          </>
        }
        
        
        
        {/* <TitleEffect /> */}
        
        <Router>
          <Link to="/" className="logo-link">
            <img src="../logo192.png" className={`App-logo ${click ? 'logo-disable' : ''}`} alt="logo" />
          </Link>
        </Router>
        <HamburgerMenu click={click} handleClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
