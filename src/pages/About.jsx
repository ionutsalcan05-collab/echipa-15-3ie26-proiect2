import { useState, useEffect } from 'react';
import axios from 'axios';

export default function About() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://victorious-vacation-03e7c67dc.strapiapp.com/api/about?populate=*')
            .then(res => {
                setData(res.data.data?.attributes || res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
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