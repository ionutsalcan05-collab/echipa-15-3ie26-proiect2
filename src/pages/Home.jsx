import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Banner */}
            <div className="bg-blue-600 dark:bg-blue-900 text-white py-32 px-4 text-center shadow-lg">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Salut, sunt student la 3IE26</h1>
                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">Acesta este portofoliul meu digital. Aici îmi prezint proiectele și parcursul profesional.</p>
                <Link to="/proiecte" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 shadow-md transition-all text-lg">
                    Explorează Proiectele
                </Link>
            </div>

            {/* Carduri Categorii */}
            <div className="max-w-6xl mx-auto py-20 px-4 w-full">
                <h2 className="text-3xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">Ce vei găsi aici</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Despre Mine</h3>
                        <p className="mb-6 opacity-80">Află detalii despre parcursul meu educațional și pasiunile mele.</p>
                        <Link to="/about" className="text-blue-500 font-semibold hover:underline">Citește mai mult &rarr;</Link>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Proiecte</h3>
                        <p className="mb-6 opacity-80">Portofoliul meu de lucrări practice și aplicații dezvoltate.</p>
                        <Link to="/proiecte" className="text-blue-500 font-semibold hover:underline">Vezi galeria &rarr;</Link>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Contact</h3>
                        <p className="mb-6 opacity-80">Ai o propunere sau o întrebare? Lasă-mi un mesaj oricând.</p>
                        <Link to="/contact" className="text-blue-500 font-semibold hover:underline">Trimite un mesaj &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}