import MatrixBg from '../../public/matrix-bg.svg';
import Header from './partials/Navbar';
import Footer from './partials/Footer';
import ScrollToTop from './ScrollToTop';

const MainLayout = ({ children }) => {
    return (
        <div className="bg-color-primary overflow-x-hidden text-color-secondary min-h-screen">
            <Header />

            {/* Background SVG Layer */}
            <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-2">
                <img
                    src={MatrixBg}
                    alt="Background SVG"
                    className="w-160 object-contain filter invert"
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 container mx-auto p-4">
                <ScrollToTop />
                {children}
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;
