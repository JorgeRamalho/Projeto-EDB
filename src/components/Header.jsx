import { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { BRAND } from '../constants/brand';
import './Header.css';

const NAV = [
  { href: '#sobre', label: 'O Evento' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#cadastro', label: 'Ingressos Free' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#" className="header__logo" aria-label={`${BRAND.name} — início`}>
          <BrandLogo size="sm" />
          <span className="header__logo-text">
            {BRAND.name}
            <small>{BRAND.tagline}</small>
          </span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Principal">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#cadastro" className="header__cta" onClick={closeMenu}>
          Quero meu ingresso
        </a>

        <button
          type="button"
          className={`header__burger ${menuOpen ? 'is-active' : ''}`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
