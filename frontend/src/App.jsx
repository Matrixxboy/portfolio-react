import { useEffect } from 'react';
import { initParticleBackground } from './utils/particalbackground';
// In your app.js or index.js
import 'bootstrap/dist/css/bootstrap.min.css';  // This imports Bootstrap's CSS
import 'bootstrap';  // Your custom JS or other Bootstrap related settings
// import './index.css'; 

import MainPage from './components/MainPage';
import Header from './components/partials/Navbar';
import Footer from './components/partials/Footer';
import MatrixBg from '../public/matrix-bg.svg';

function App() {
  useEffect(() => {
    initParticleBackground();
  }, []);

  return (
    <>
    <div className='relative bg-color-primary overflow-x-hidden text-color-secondary'>
    {/*  Background SVG Layer */}
    <div className="fixed content-center justify-items-center bottom-0 left-0 z-0 w-full h-full  opacity-1 pointer-events-none">
        <img src={MatrixBg}
            alt="Background SVG"
            className="w-170 object-contain filter invert" />
    </div>

    {/* Main Content Layer  */}
    <div className="relative z-10">
        <div className='sticky'>
        <Header />
        </div>

        <div className="container mx-auto p-4">
            <MainPage />
        </div>

    </div>
    <footer>
      <Footer />
    </footer>
    </div>
    </>
  );
}

export default App;
