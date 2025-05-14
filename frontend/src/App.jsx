import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { initParticleBackground } from './utils/particalbackground';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import MatrixBg from '../public/matrix-bg.svg';

import Header from './components/partials/Navbar';
import Footer from './components/partials/Footer';

import ScrollToTop from './components/ScrollToTop.jsx';
import MainPage from './components/MainPage.jsx'
import AboutPage from './components/pages/aboutpage/AboutPage.jsx';
import Projects from './components/pages/projectpage/Projects';
import CertificatePage from './components/pages/certificatepage/CertificatePage';
import Blog from './components/pages/blogpage/Blog';
import ContactForm from './components/pages/conatactform/Contactform'
import Admin from './components/admin/Admin.jsx';

function App() {
  // useEffect(() => {
  //   initParticleBackground();
  // }, []);

  return (
    <>
      <div className=' bg-color-primary overflow-x-hidden text-color-secondary'>
          <Header />
        {/* Background SVG Layer */}
        <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-2">
  <img
    src={MatrixBg}
    alt="Background SVG"
    className="w-160 object-contain filter invert"
  />
</div>


        {/* Main Content Layer */}
        <div className="relative z-10">
          

          <div className="container mx-auto p-4">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<CertificatePage />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/contactme" element={<ContactForm />}/>
              <Route path="/admin" element={<Admin />}/>
              {/* Optional: Add a 404 route */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
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
