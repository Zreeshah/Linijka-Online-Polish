import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MiernikGlebokosciBlogPost: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>Miernik Głębokości – Co To i Jak Używać | Linijka-Online.pl</title>
        <meta name="description" content="Miernik głębokości – do czego służy, rodzaje i jak prawidłowo go używać. Poznaj alternatywy: linijka online i miarka cm w telefonie." />
        <meta name="keywords" content="miernik głębokości, suwmiarka, pomiar głębokości, linijka online, miarka cm w telefonie" />
        <link rel="canonical" href="https://linijka-online.pl/blog/miernik-glebokosci" />
        <meta property="og:title" content="Miernik Głębokości – Co To i Jak Używać" />
        <meta property="og:description" content="Praktyczny przewodnik po miernikach głębokości i ich zastosowaniach." />
        <meta property="og:url" content="https://linijka-online.pl/blog/miernik-glebokosci" />
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
              Miernik Głębokości – co to i jak używać
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              <strong>Miernik głębokości</strong> to precyzyjne narzędzie pomiarowe służące do określania
              głębokości otworów, rowków, wycięć czy zagłębień w materiale. Jest niezbędny w warsztacie,
              mechanice precyzyjnej i obróbce skrawaniem.
            </p>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Rodzaje mierników głębokości</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Suwmiarka z miernikiem głębokości</strong> – najbardziej popularna, dokładność do 0,02 mm.</li>
              <li><strong>Mikrometr głębokościowy</strong> – do bardzo precyzyjnych pomiarów rzędu mikrometrów.</li>
              <li><strong>Cyfrowy miernik głębokości</strong> – z elektronicznym odczytem na wyświetlaczu.</li>
              <li><strong>Mechaniczna głębokościówka zegarowa</strong> – stosowana w warsztatach mechanicznych.</li>
            </ul>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Jak prawidłowo używać?</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
              <li>Oczyść powierzchnię oraz otwór, aby uniknąć błędów pomiaru.</li>
              <li>Połóż podstawę miernika płasko na powierzchni materiału.</li>
              <li>Wsuń trzpień pomiarowy do dna otworu bez nadmiernego nacisku.</li>
              <li>Odczytaj wynik – w przypadku suwmiarki na skali głównej i noniuszu.</li>
            </ol>

            <div className="bg-ruler-primary/10 border-l-4 border-ruler-primary p-4 rounded-lg my-6">
              <p className="text-ruler-text">
                <strong>Wskazówka:</strong> do prostych pomiarów codziennych wystarczy zwykła
                <Link to="/" className="text-ruler-primary hover:underline font-medium"> linijka online</Link> lub
                <strong> miarka cm w telefonie</strong>.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MiernikGlebokosciBlogPost;