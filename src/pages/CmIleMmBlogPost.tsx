import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Ruler } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CmIleMmBlogPost: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>1 cm ile mm – Przelicznik centymetrów na milimetry | Linijka-Online.pl</title>
        <meta name="description" content="1 cm ile mm? Sprawdź szybki przelicznik centymetrów na milimetry, przykłady i tabelę konwersji. Skorzystaj z linijki online i miarki cm." />
        <meta name="keywords" content="1 cm ile mm, centymetr na milimetr, miarka cm, linijka online, centymetr online" />
        <link rel="canonical" href="https://linijka-online.pl/blog/1-cm-ile-mm" />
        <meta property="og:title" content="1 cm ile mm – Przelicznik centymetrów na milimetry" />
        <meta property="og:description" content="Sprawdź ile milimetrów to 1 centymetr i jak łatwo przeliczać jednostki długości." />
        <meta property="og:url" content="https://linijka-online.pl/blog/1-cm-ile-mm" />
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
              1 cm ile mm – kompletny przewodnik po przeliczaniu
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              Pytanie <strong>„1 cm ile mm”</strong> pojawia się bardzo często podczas codziennych pomiarów.
              Odpowiedź jest prosta: <strong>1 centymetr = 10 milimetrów</strong>. To podstawowa zależność
              w systemie metrycznym, którą warto zapamiętać raz na zawsze.
            </p>

            <div className="bg-ruler-primary/10 border-l-4 border-ruler-primary p-4 rounded-lg my-6">
              <p className="text-ruler-text font-semibold flex items-center">
                <Ruler className="mr-2 text-ruler-primary" size={20} />
                1 cm = 10 mm  |  1 mm = 0,1 cm
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Jak przeliczyć centymetry na milimetry?</h2>
            <p className="text-gray-700 mb-4">
              Aby zamienić centymetry na milimetry, wystarczy <strong>pomnożyć liczbę centymetrów przez 10</strong>.
              W odwrotną stronę – milimetry na centymetry – dzielimy przez 10.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-ruler-primary/20">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left text-ruler-text">Centymetry (cm)</th>
                    <th className="border border-gray-300 p-2 text-left text-ruler-text">Milimetry (mm)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr><td className="border border-gray-300 p-2">1 cm</td><td className="border border-gray-300 p-2">10 mm</td></tr>
                  <tr><td className="border border-gray-300 p-2">2,5 cm</td><td className="border border-gray-300 p-2">25 mm</td></tr>
                  <tr><td className="border border-gray-300 p-2">5 cm</td><td className="border border-gray-300 p-2">50 mm</td></tr>
                  <tr><td className="border border-gray-300 p-2">10 cm</td><td className="border border-gray-300 p-2">100 mm</td></tr>
                  <tr><td className="border border-gray-300 p-2">30 cm</td><td className="border border-gray-300 p-2">300 mm</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Praktyczne przykłady</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Standardowa <strong>linijka</strong> ma 30 cm, czyli 300 mm.</li>
              <li>Grubość monety 5 zł to około 1,7 mm, czyli 0,17 cm.</li>
              <li>Karta kredytowa ma ok. 8,5 cm długości – to 85 mm.</li>
            </ul>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Zmierz online bez linijki fizycznej</h2>
            <p className="text-gray-700 mb-4">
              Nie masz pod ręką miarki? Skorzystaj z naszej <Link to="/" className="text-ruler-primary hover:underline font-medium">linijki online</Link> –
              precyzyjnej <strong>miarki cm</strong> dostępnej z poziomu przeglądarki na komputerze i w telefonie.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CmIleMmBlogPost;