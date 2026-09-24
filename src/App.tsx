import { ThemeProvider } from './context/ThemeContext';
import { DemoBar } from './components/DemoBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Gallery } from './components/Gallery';
import { Amenities } from './components/Amenities';
import { Calculator } from './components/Calculator';
import { Enquire } from './components/Enquire';
import { Footer } from './components/Footer';
import { BoltPromo } from './components/BoltPromo';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bone">
        <DemoBar />
        <Navbar />
        <main>
          <Hero />
          <Overview />
          <Gallery />
          <Amenities />
          <Calculator />
          <Enquire />
        </main>
        <Footer />
        <BoltPromo />
        <a
          href="https://bolt.new/fork/sb1-x7nrnkk6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Built with Bolt"
          className="fixed bottom-4 right-4 z-50 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/assets/white_circle_360x360.png"
            alt="Built with Bolt"
            className="h-16 w-16 drop-shadow-lg sm:h-20 sm:w-20"
          />
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;
