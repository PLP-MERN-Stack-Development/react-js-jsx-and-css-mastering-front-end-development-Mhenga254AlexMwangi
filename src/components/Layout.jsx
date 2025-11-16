import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
