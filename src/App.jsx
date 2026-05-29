import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Gallery />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
