// src/App.js
import React from 'react';
import Header from './components/partials/Navbar';
import Main from './components/Main';
import Footer from './components/partials/Footer';

function App() {
    return (
    <div className="relative bg-primary overflow-x-hidden">
      {/* Background Layer */}
        <div className="fixed bottom-0 left-0 z-0 w-full h-full opacity-20 pointer-events-none">
        <img
            src="/path-to-your-assets/matrix-bg.svg"
            alt="Background"
            className="w-full h-full object-contain filter invert"
        />
        </div>

      {/* Main Content */}
        <div className="relative z-10">
        <Header />
        <div className="container mx-auto p-4">
            <Main />
        </div>
        </div>

      {/* Footer */}
        <Footer />
    </div>
    );
}

export default App;
