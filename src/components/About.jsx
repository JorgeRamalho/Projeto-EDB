import './About.css';

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80';

export default function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__visual" data-reveal="left">
          <div className="about__img-wrap">
            <img
              src={ABOUT_IMG}
              alt="Ambiente de boteco com luzes quentes e mesas de madeira"
              loading="lazy"
            />
            <div className="about__img-frame" aria-hidden="true" />
          </div>
          <blockquote className="about__quote">
            <p>&ldquo;Cheers! Let&apos;s learn English the boteco way.&rdquo;</p>
            <cite>— English de Boteco</cite>
          </blockquote>
        </div>

        <div className="about__text" data-reveal>
          <span className="section-label">O lançamento</span>
          <h2 id="about-title" className="section-title">
            Uma noite para quem quer inglês com <em>alma brasileira</em>
          </h2>
          <p>
            A <strong>English de Boteco</strong> nasce da ideia de que aprender um idioma
            pode ser leve, social e cheio de personalidade — como aquela mesa de bar onde
            todo mundo vira amigo.
          </p>
          <p>
            No evento de lançamento você conhece a metodologia, prova o clima das aulas e
            ainda pode garantir seu lugar entre os primeiros 50 cadastrados com{' '}
            <strong>ingresso gratuito</strong>.
          </p>

          <ul className="about__features">
            <li>
              <span className="about__icon" aria-hidden="true">🍺</span>
              <div>
                <h3>Imersão descontraída</h3>
                <p>Conversação real, música e ambiente de boteco.</p>
              </div>
            </li>
            <li>
              <span className="about__icon" aria-hidden="true">📚</span>
              <div>
                <h3>Inglês prático</h3>
                <p>Foco no que você usa no dia a dia e no trabalho.</p>
              </div>
            </li>
            <li>
              <span className="about__icon" aria-hidden="true">🎟️</span>
              <div>
                <h3>Ingressos free</h3>
                <p>Cadastre-se abaixo e concorra à entrada sem custo.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
