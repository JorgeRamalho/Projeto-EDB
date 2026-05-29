import './Experience.css';

const STEPS = [
  {
    num: '01',
    title: 'Welcome Drink & Check-in',
    desc: 'Recepção com drinks sem álcool e credencial do evento.',
    img: 'https://images.unsplash.com/photo-1551024709-8f23be0a86f2?w=600&q=80',
  },
  {
    num: '02',
    title: 'Mini-aula ao vivo',
    desc: 'Demonstração da metodologia English de Boteco na prática.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
  {
    num: '03',
    title: 'English Hour no balcão',
    desc: 'Rodas de conversa temáticas com professores e convidados.',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
  },
  {
    num: '04',
    title: 'Sorteio dos ingressos',
    desc: 'Anúncio dos cadastrados contemplados com entrada gratuita.',
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="experience" aria-labelledby="exp-title">
      <div className="experience__header" data-reveal>
        <span className="section-label section-label--light">Programação</span>
        <h2 id="exp-title" className="experience__title">
          Como será a noite de lançamento
        </h2>
        <p className="experience__intro">
          Quatro momentos pensados para você sentir que já faz parte da comunidade
          English de Boteco — antes mesmo da primeira aula.
        </p>
      </div>

      <div className="experience__grid">
        {STEPS.map((step, i) => (
          <article
            key={step.num}
            className="experience__card"
            data-reveal
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="experience__card-img">
              <img src={step.img} alt="" loading="lazy" />
              <span className="experience__card-num">{step.num}</span>
            </div>
            <div className="experience__card-body">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
