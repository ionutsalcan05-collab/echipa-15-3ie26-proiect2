import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">Echipa 15</Link>

                    {/* Meniu Desktop */}
                    <div className="hidden md:flex space-x-8 items-center font-semibold">
                        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
                        <Link to="/about" className="hover:text-blue-500 transition">About</Link>
                        <Link to="/proiecte" className="hover:text-blue-500 transition">Proiecte</Link>
                        <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
                        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>

                    {/* Meniu Mobil */}
                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Offcanvas Mobil */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-xl border-t dark:border-gray-700">
                    <div className="flex flex-col px-6 py-4 space-y-4 font-semibold text-lg">
                        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                        <Link to="/proiecte" onClick={() => setIsOpen(false)}>Proiecte</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}