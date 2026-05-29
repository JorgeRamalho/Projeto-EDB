import BrandLogo from './BrandLogo';
import { BRAND } from '../constants/brand';
import './Hero.css';

const HERO_IMG =
  'https://images.unsplash.com/photo-1572116469694-31d19d9c1a0c?w=1920&q=80';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg">
        <img src={HERO_IMG} alt="" className="hero__bg-img" fetchPriority="high" />
        <div className="hero__bg-gradient" />
        <div className="hero__bg-degrade" />
      </div>

      <div className="hero__content">
        <div className="hero__logo-wrap" data-reveal>
          <BrandLogo size="xl" showTagline />
        </div>

        <p className="hero__badge" data-reveal>
          <span className="hero__badge-dot" />
          Lançamento oficial · Edição inaugural
        </p>

        <h1 id="hero-title" className="hero__title hero__title--sr">
          {BRAND.name} — {BRAND.tagline}
        </h1>

        <p className="hero__subtitle" data-reveal>
          O inglês que você aprende entre um chop gelado e boa conversa. Venha viver a
          noite de lançamento e concorra a <strong>ingressos gratuitos</strong> para o
          nosso primeiro encontro.
        </p>

        <div className="hero__actions" data-reveal>
          <a href="#cadastro" className="hero__btn hero__btn--primary">
            Cadastrar e concorrer
          </a>
          <a href="#sobre" className="hero__btn hero__btn--ghost">
            Conhecer o evento
          </a>
        </div>

        <dl className="hero__stats" data-reveal>
          <div>
            <dt>Data</dt>
            <dd>Em breve</dd>
          </div>
          <div>
            <dt>Vagas free</dt>
            <dd>50 ingressos</dd>
          </div>
          <div>
            <dt>Clima</dt>
            <dd>Boteco &amp; English</dd>
          </div>
        </dl>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Role</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
