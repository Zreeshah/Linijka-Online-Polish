import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SystemAnglosaskiBlogPost: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>System Anglosaski Jednostek – Cale, Stopy, Jardy | Linijka-Online.pl</title>
        <meta name="description" content="System anglosaski jednostek: cale, stopy, jardy i mile. Poznaj przeliczenia na centymetry i metry oraz korzystaj z linijki online." />
        <meta name="keywords" content="system anglosaski jednostek, cale na cm, stopy na metry, linijka online, miarka cm" />
        <link rel="canonical" href="https://linijka-online.pl/blog/system-anglosaski-jednostek" />
        <meta property="og:title" content="System Anglosaski Jednostek – Cale, Stopy, Jardy" />
        <meta property="og:description" content="Przeliczenia jednostek imperialnych na system metryczny w praktycznej tabeli." />
        <meta property="og:url" content="https://linijka-online.pl/blog/system-anglosaski-jednostek" />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header />

      <main className="flex-grow py-6">
        <div className="container px-4 mx-auto max-w-3xl">
          <Link to="/" className="inline-flex items-center text-ruler-primary mb-6 hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Powrót do strony głównej
          </Link>

          <article className="bg-white rounded-xl shadow-sm p-5 sm:p-8 mb-8">
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <Clock size={16} className="mr-1" />
              <span>Opublikowano: 14 kwietnia 2025</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-ruler-text mb-6">
              System Anglosaski Jednostek
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              <strong>System anglosaski</strong> (imperialny) jest używany głównie w USA i Wielkiej Brytanii.
              Opiera się na takich jednostkach jak <strong>cal, stopa, jard i mila</strong>. W Polsce dominuje
              system metryczny, dlatego warto znać przeliczenia między tymi systemami.
            </p>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Tabela przeliczeń</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-ruler-primary/20">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left text-ruler-text">Jednostka</th>
                    <th className="border border-gray-300 p-2 text-left text-ruler-text">Wartość metryczna</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr><td className="border border-gray-300 p-2">1 cal (inch)</td><td className="border border-gray-300 p-2">2,54 cm</td></tr>
                  <tr><td className="border border-gray-300 p-2">1 stopa (foot)</td><td className="border border-gray-300 p-2">30,48 cm</td></tr>
                  <tr><td className="border border-gray-300 p-2">1 jard (yard)</td><td className="border border-gray-300 p-2">0,9144 m</td></tr>
                  <tr><td className="border border-gray-300 p-2">1 mila (mile)</td><td className="border border-gray-300 p-2">1,609 km</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Gdzie spotkamy te jednostki?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Rozmiary ekranów telewizorów i monitorów (w calach)</li>
              <li>Wymiary felg samochodowych i kół rowerowych</li>
              <li>Wzrost i waga w krajach anglosaskich (stopy, funty)</li>
              <li>Mapy i drogowskazy w USA i UK (mile)</li>
            </ul>

            <p className="text-gray-700">
              Dzięki naszej <Link to="/" className="text-ruler-primary hover:underline font-medium">linijce online</Link> łatwo
              zmierzysz przedmiot w centymetrach i sam przeliczysz wynik na cale lub stopy.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SystemAnglosaskiBlogPost;