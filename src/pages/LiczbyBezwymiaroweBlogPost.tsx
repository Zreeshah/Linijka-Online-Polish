import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LiczbyBezwymiaroweBlogPost: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>Liczby Bezwymiarowe – Czym Są i Do Czego Służą | Linijka-Online.pl</title>
        <meta name="description" content="Liczby bezwymiarowe – definicja, przykłady (Reynolds, Mach, π) i zastosowanie w fizyce oraz inżynierii. Skorzystaj z linijki online." />
        <meta name="keywords" content="liczby bezwymiarowe, liczba Reynoldsa, liczba Macha, pi, linijka online, miarka" />
        <link rel="canonical" href="https://linijka-online.pl/blog/liczby-bezwymiarowe" />
        <meta property="og:title" content="Liczby Bezwymiarowe – Czym Są i Do Czego Służą" />
        <meta property="og:description" content="Poznaj liczby bezwymiarowe i ich kluczową rolę w nauce i inżynierii." />
        <meta property="og:url" content="https://linijka-online.pl/blog/liczby-bezwymiarowe" />
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
              Liczby Bezwymiarowe
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              <strong>Liczby bezwymiarowe</strong> to wielkości fizyczne, które nie mają jednostek miary – ich
              wartość jest „czystą liczbą”. Powstają najczęściej jako stosunek dwóch wielkości tego samego wymiaru.
              Odgrywają kluczową rolę w inżynierii, fizyce i matematyce.
            </p>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Najpopularniejsze przykłady</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="bg-ruler-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-ruler-text mb-2">Liczba π (pi)</h3>
                <p className="text-gray-700 text-sm">Stosunek obwodu okręgu do jego średnicy ≈ 3,14159.</p>
              </div>
              <div className="bg-ruler-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-ruler-text mb-2">Liczba Reynoldsa</h3>
                <p className="text-gray-700 text-sm">Opisuje charakter przepływu cieczy – laminarny czy turbulentny.</p>
              </div>
              <div className="bg-ruler-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-ruler-text mb-2">Liczba Macha</h3>
                <p className="text-gray-700 text-sm">Stosunek prędkości obiektu do prędkości dźwięku.</p>
              </div>
              <div className="bg-ruler-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-ruler-text mb-2">Współczynnik tarcia</h3>
                <p className="text-gray-700 text-sm">Bezwymiarowy stosunek siły tarcia do siły nacisku.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-ruler-text mt-8 mb-4">Dlaczego są ważne?</h2>
            <p className="text-gray-700 mb-4">
              Liczby bezwymiarowe pozwalają porównywać zjawiska niezależnie od skali i jednostek. Dzięki nim
              inżynierowie mogą testować małe modele w tunelach aerodynamicznych i wyciągać wnioski o pełnowymiarowych
              konstrukcjach.
            </p>

            <p className="text-gray-700">
              Chcesz coś zmierzyć w praktyce? Skorzystaj z naszej <Link to="/" className="text-ruler-primary hover:underline font-medium">linijki online</Link> lub <strong>miarki cm</strong>.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiczbyBezwymiaroweBlogPost;