import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Import App component
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App /> {/* Render the App component here */}
    </StrictMode>
  );
}
