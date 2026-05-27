import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Proiecte() {
    const [proiecte, setProiecte] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulare date Strapi
        const loadData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));

                setProiecte([
                    {
                        id: 1,
                        NumeProiect: "Proiectul 1 (Portofoliu)",
                        DescriereScurta: "Un portofoliu web modern creat cu React și Tailwind.",
                        // Pune un link fals catre o imagine pentru test, sau lasa gol daca nu ai
                        ImagineProiect: null
                    },
                    {
                        id: 2,
                        NumeProiect: "Proiectul 2",
                        DescriereScurta: "Aplicație web pentru gestionarea task-urilor.",
                        ImagineProiect: null
                    }
                ]);
                setLoading(false);
            } catch (err) {
                setError("Eroare la preluarea proiectelor.");
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) return <div className="text-center py-20 text-xl font-bold">Se încarcă proiectele...</div>;

    return (
        <div className="max-w-6xl mx-auto py-20 px-4 min-h-[70vh]">
            <h1 className="text-4xl font-bold mb-12 text-center border-b-4 border-blue-500 inline-block pb-2 mx-auto flex justify-center">Portofoliu Proiecte</h1>

            {proiecte.length === 0 ? (
                <p className="text-center text-xl opacity-70">Nu s-a găsit niciun proiect în baza de date.</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {proiecte.map((item) => {
                        const p = item.attributes || item;
                        return (
                            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                                <div className="p-6 flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{p.NumeProiect || "Proiect"}</h3>
                                    <p className="opacity-80 mb-6 text-gray-600 dark:text-gray-300">{p.DescriereScurta || "Fără descriere"}</p>
                                </div>
                                {p.Link && (
                                    <div className="bg-gray-50 dark:bg-gray-700 p-4 border-t dark:border-gray-600">
                                        <a href={p.Link} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center justify-center">
                                            Vezi proiectul live &rarr;
                                        </a>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}