import './Gallery.css';

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80',
    alt: 'Brinde entre amigos em mesa de bar',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1541532713592-79a031314b06?w=500&q=80',
    alt: 'Detalhe de copos e ambiente acolhedor',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1517457373958-f7b07f8f9f0c?w=500&q=80',
    alt: 'Grupo conversando em ambiente descontraído',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1423666639041-f56000c27a93?w=700&q=80',
    alt: 'Pessoas estudando e interagindo juntas',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80',
    alt: 'Café e conversa em mesa compartilhada',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80',
    alt: 'Celebração e pertencimento em grupo',
    wide: false,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="gallery" aria-labelledby="gallery-title">
      <div className="gallery__header" data-reveal>
        <span className="section-label">Comunidade</span>
        <h2 id="gallery-title" className="section-title">
          O clima que você vai viver
        </h2>
        <p>
          Imagens que traduzem pertencimento: risadas, conversa em inglês e aquela
          sensação de &ldquo;esse lugar é meu&rdquo;.
        </p>
      </div>

      <div className="gallery__mosaic" data-reveal="scale">
        {PHOTOS.map((photo) => (
          <figure
            key={photo.src}
            className={`gallery__item ${photo.wide ? 'gallery__item--wide' : ''}`}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption className="gallery__caption">{photo.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
