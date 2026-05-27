export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto py-20 px-4 min-h-[70vh]">
            <h1 className="text-4xl font-bold mb-10 text-center border-b-4 border-blue-500 inline-block pb-2 mx-auto flex justify-center">Contactează-mă</h1>
            <p className="text-center mb-10 text-lg opacity-80">Ai o întrebare sau vrei să colaborăm? Completează formularul de mai jos.</p>

            <form className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Nume complet</label>
                        <input type="text" className="w-full p-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:text-white transition-all" placeholder="Popescu Ion" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Adresa de Email</label>
                        <input type="email" className="w-full p-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:text-white transition-all" placeholder="email@exemplu.com" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Mesajul Tău</label>
                    <textarea rows="5" className="w-full p-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:text-white transition-all" placeholder="Scrie aici..."></textarea>
                </div>
                <button type="button" className="bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors mt-4 text-lg shadow-md">
                    Trimite Mesajul
                </button>
            </form>
        </div>
    );
}