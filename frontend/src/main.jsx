import React from 'react';
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Import App component
import './index.css';
import { BrowserRouter, Router, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter>
            <App /> {/* Render the App component here */}
        </BrowserRouter>
    </StrictMode>
  );
}
