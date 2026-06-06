import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SystemNaturalnyBlogPost: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>Naturalny System Jednostek – Co To Jest? | Linijka-Online.pl</title>
        <meta name="description" content="Naturalny system jednostek (jednostki Plancka) – wyjaśnienie, zastosowanie w fizyce i porównanie z systemem metrycznym. Skorzystaj z linijki online." />
        <meta name="keywords" content="naturalny system jednostek, jednostki Plancka, linijka, miarka, centymetr online" />
        <link rel="canonical" href="https://linijka-online.pl/blog/system-naturalny-jednostek" />
        <meta property="og:title" content="Naturalny System Jednostek – Co To Jest?" />
        <meta property="og:description" content="Poznaj naturalny system jednostek używany w fizyce teoretycznej i jego znaczenie." />
        <meta property="og:url" content="https://linijka-online.pl/blog/system-naturalny-jednostek" />
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
              Naturalny System Jednostek
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              <strong>Naturalny system jednostek</strong> to system miar oparty wyłącznie na uniwersalnych
              stałych fizycznych, takich jak prędkość światła (c), stała Plancka (ħ) czy stała grawitacji (G).
              Jest szeroko stosowany w fizyce teoretycznej, kosmologii i mechanice kwantowej.
            </p>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Czym różni się od systemu metrycznego?</h2>
            <p className="text-gray-700 mb-4">
              W przeciwieństwie do <strong>systemu metrycznego</strong>, gdzie metr czy <strong>centymetr</strong> są
              konwencjonalnie ustalonymi długościami, naturalny system korzysta z wartości fizycznych istniejących
              w przyrodzie. Dzięki temu wzory upraszczają się, bo wiele stałych przyjmuje wartość 1.
            </p>

            <div className="bg-ruler-primary/10 border-l-4 border-ruler-primary p-4 rounded-lg my-6">
              <p className="text-ruler-text">
                <strong>Przykład:</strong> długość Plancka wynosi około 1,616 × 10⁻³⁵ m – to najmniejsza
                sensowna fizycznie skala długości.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Gdzie używamy systemu naturalnego?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Teoria względności i grawitacja kwantowa</li>
              <li>Fizyka cząstek elementarnych</li>
              <li>Kosmologia i badania wczesnego Wszechświata</li>
            </ul>

            <p className="text-gray-700">
              W codziennym życiu wystarcza nam <Link to="/" className="text-ruler-primary hover:underline font-medium">linijka online</Link> oraz
              klasyczna <strong>miarka cm</strong> – ale warto wiedzieć, że nauka korzysta także z bardziej fundamentalnych miar.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SystemNaturalnyBlogPost;