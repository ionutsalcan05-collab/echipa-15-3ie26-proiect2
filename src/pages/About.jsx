import { useState, useEffect } from 'react';
import axios from 'axios';

export default function About() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Am simulat datele de la Strapi din cauza unui blocaj SSL la nivel de Windows/ISP
        const loadData = async () => {
            try {
                // Simulam o mica intarziere de retea
                await new Promise(resolve => setTimeout(resolve, 500));

                setAboutData({
                    Titlu: "Salutare, eu sunt Ionuț Sălcan!",
                    Descriere: "Sunt student și un entuziast al tehnologiilor web moderne. Îmi place să construiesc site-uri rapide, scalabile și cu un design curat, folosind arhitectura JAMstack. Momentan mă concentrez pe perfecționarea abilităților mele în React, Tailwind CSS și soluții de tip Headless CMS, precum Strapi.\n\nDincolo de cod, îmi place să îmi antrenez mintea și spiritul competitiv. Mai joc câte o partidă de poker lunar cu prietenii, la un buget de relaxare de vreo 200 de lei — uneori câștig, alteori pierd, dar pentru mine strategia și probabilitățile din spate sunt cele care fac jocul interesant! Sunt mereu deschis la provocări noi, fie că este vorba de un proiect complex de programare sau de învățarea unui framework nou."
                });
                setLoading(false);
            } catch (err) {
                setError("Eroare la incarcarea datelor.");
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) return <div className="text-center py-20 text-xl font-bold">Se încarcă datele...</div>;

    return (
        <div className="max-w-4xl mx-auto py-20 px-4 min-h-[70vh]">
            <h1 className="text-4xl font-bold mb-10 border-b-4 border-blue-500 inline-block pb-2">Despre Mine</h1>
            {data ? (
                <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">{data.Titlu || "Titlu Lipsă"}</h2>
                    <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
                        <p>{data.Descriere || "Nu ai adăugat încă o descriere în Strapi."}</p>
                    </div>
                </div>
            ) : (
                <div className="bg-red-100 text-red-700 p-6 rounded-lg font-semibold">
                    Nu s-au putut prelua datele. Asigură-te că Strapi funcționează și ai setat permisiunile de Public (find).
                </div>
            )}
        </div>
    );
}