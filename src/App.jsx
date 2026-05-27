import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Proiecte from './pages/Proiecte';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/proiecte" element={<Proiecte />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center py-6 mt-auto">
          <p>&copy; 2026 Echipa 15. Toate drepturile rezervate.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;