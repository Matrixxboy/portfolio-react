import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import ScrollToTop from './components/ScrollToTop.jsx';

import MainLayout from './components/MainLayout.jsx';
import MainPage from './components/MainPage.jsx';
import AboutPage from './components/pages/aboutpage/AboutPage.jsx';
import Projects from './components/pages/projectpage/Projects.jsx';
import CertificatePage from './components/pages/certificatepage/CertificatePage.jsx';
import Blog from './components/pages/blogpage/Blog.jsx';
import ContactForm from './components/pages/conatactform/Contactform.jsx';
import RedirectToBackend from './components/partials/RedirectToBackend.jsx';
import AboutWebsite from './components/pages/AboutWebsite/AboutWebsite.jsx';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* ✅ Main Site Routes with fancy layout */}
        <Route path="/" element={<MainLayout><MainPage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/certificates" element={<MainLayout><CertificatePage /></MainLayout>} />
        <Route path="/blogs" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/contactme" element={<MainLayout><ContactForm /></MainLayout>} />
        <Route path='/about-website' element={<MainLayout><AboutWebsite/></MainLayout>}/>
        <Route path='/admin' element={<Navigate to={<RedirectToBackend />} />}/>
        {/* Optional 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
