import BrandLogo from './BrandLogo';
import { BRAND } from '../constants/brand';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <BrandLogo size="md" />
          <p className="footer__tagline">{BRAND.tagline}</p>
          <p>{BRAND.shortTagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Rodapé">
          <a href="#sobre">O Evento</a>
          <a href="#experiencia">Experiência</a>
          <a href="#galeria">Galeria</a>
          <a href="#cadastro">Cadastro</a>
        </nav>

        <div className="footer__social">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="WhatsApp">WhatsApp</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2023 {BRAND.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
