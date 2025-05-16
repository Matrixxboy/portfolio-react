import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import MatrixBg from '../public/matrix-bg.svg';

import Header from './components/partials/Navbar';
import Footer from './components/partials/Footer';
import ScrollToTop from './components/ScrollToTop.jsx';

import MainLayout from './components/MainLayout.jsx';
import MainPage from './components/MainPage.jsx';
import AboutPage from './components/pages/aboutpage/AboutPage.jsx';
import Projects from './components/pages/projectpage/Projects.jsx';
import CertificatePage from './components/pages/certificatepage/CertificatePage.jsx';
import Blog from './components/pages/blogpage/Blog.jsx';
import ContactForm from './components/pages/conatactform/Contactform.jsx';

// ✅ Admin Components
import AdminLayout from './admin/AdminLayout.jsx';
import AdminLogin from './admin/AdminLogin.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';

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

        {/* ✅ Admin Panel Routes with clean layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Optional 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
