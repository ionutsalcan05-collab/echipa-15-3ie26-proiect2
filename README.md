# Proiect 2 - Web Development (Echipa 15)
**Aplicație Web de Prezentare Personală (Portofoliu)**

Acest proiect reprezintă soluția pentru a doua temă majoră la disciplina Web Development. Arhitectura proiectului este de tip JAMstack, utilizând un Headless CMS (Strapi) pentru gestionarea bazei de date și o aplicație Single Page Application (React + Tailwind CSS) pentru frontend. 

Proiectul a fost stocat pe GitHub și găzduit automat prin Netlify.

---

## 👥 Membrii Echipei și Sarcini

Deși cerința inițială prevedea lucrul în echipe de 4 studenți (Echipa 15), din motive obiective de organizare și participare, am ales sa realizez acest proiect singur si am incercat sa il fac cat mai corect posibil chiar daca am intampinat FOARTE MULTE probleme si erori 

Atribuțiile îndeplinite independent au inclus:
* **Backend:** Configurarea arhitecturii Strapi Cloud, crearea colecțiilor (Collection Types și Single Types), stabilirea permisiunilor de API (Roles & Permissions).
* **Frontend:** Crearea proiectului Vite/React, dezvoltarea componentelor UI (paginile Home, About, Proiecte, Contact), implementarea design-ului responsive folosind Tailwind CSS, Dark/Light Mode, meniuri (Sticky Desktop & Mobile Offcanvas/Hamburger).
* **Integrare:** Configurarea proxy-ului în Vite și pregătirea hook-urilor (`useEffect`, `useState`) pentru apelurile HTTP prin Axios.
* **DevOps:** Gestionarea repository-ului GitHub și configurarea continuous deployment-ului pe platforma Netlify.

---

## ⚠️ Notă Tehnică Importantă: Conexiunea API și Răspunsul SSL

Backend-ul proiectului a fost compilat și publicat cu succes pe platforma Strapi Cloud (versiunea de TypeScript), având rutele și permisiunile de "Public / find" setate corect. Rutele API-ului sunt funcționale la nivel de server. 

Cu toate acestea, pe mediul de dezvoltare și producție frontend am întâmpinat un blocaj de securitate independent de codul sursă. Un program de securitate local / filtru de rețea interceptează traficul web, rezultând într-un atac de tip Man-in-the-Middle la nivelul certificatelor de securitate. Acest lucru generează două erori de sistem care blochează cererile `axios`:
1. În browser (Chrome/Edge): `ERR_SSL_VERSION_OR_CIPHER_MISMATCH`
2. În mediul Node.js (Vite Proxy): `SSL routines:ssl3_read_bytes:ssl/tls alert handshake failure`

**Soluția aplicată:** 
Pentru a demonstra corectitudinea arhitecturii React (gestionarea stărilor, ciclul de viață al componentelor și randarea interfeței), **apelurile reale de rețea (`axios.get`) au fost comentate în codul sursă, iar datele au fost simulate în interiorul hook-urilor `useEffect`** (proces denumit „mocking”). Interfața afișează conținut real și este complet funcțională pentru a putea fi evaluată, dovedind că structura logică a frontend-ului este corect implementată.

---

## 📚 Bibliografie și Surse de Inspirație

În dezvoltarea acestui proiect, m-am bazat pe următoarele resurse și materiale:
1. **Materiale de curs și laborator:** Laboratoarele L02, L05 și L06 pentru setarea infrastructurii Strapi și React.
2. **Documentație Oficială:**
   * React (react.dev) pentru înțelegerea hook-urilor fundamentale.
   * Vite (vitejs.dev) pentru configurarea mediului local și a proxy-ului.
   * Tailwind CSS (tailwindcss.com) pentru utilitarele de stilizare responsive.
3. **Design și Tipografie:** Tema de culori și fonturile (Tipografia Web) au fost generate și preluate folosind platforma **tweakcn.com**, respectând cerința temei.
4. **Surse de Inspirație:** Structura vizuală a portofoliului (Hero Banner, așezarea cardurilor) urmează un layout standard și clasic pentru portofoliile de programatori. Nu a fost utilizat un model de inspirație extern specific (șablon preluat 1 la 1), design-ul fiind construit de la zero folosind blocurile Tailwind.
