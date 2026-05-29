import './Gallery.css';
import { assetUrl } from '../utils/assetUrl';

const PHOTOS = [
  {
    src: assetUrl('images/encontros/encontro-edb-1.jpg'),
    alt: 'Comunidade English de Boteco no Hopia Craft Beer',
    wide: true,
  },
  {
    src: assetUrl('images/encontros/encontro-edb-2.jpg'),
    alt: 'Grupo da comunidade em encontro ao ar livre',
    wide: false,
  },
  {
    src: assetUrl('images/encontros/encontro-edb-3.jpg'),
    alt: 'Noite no Boteco da Skina',
    wide: false,
  },
  {
    src: assetUrl('images/encontros/encontro-edb-4.jpg'),
    alt: 'Galera celebrando no boteco',
    wide: true,
  },
  {
    src: assetUrl('images/encontros/encontro-edb-5.jpg'),
    alt: 'Encontro da comunidade no Choppinho',
    wide: false,
  },
  {
    src: assetUrl('images/encontros/encontro-edb-6.jpg'),
    alt: 'Comunidade reunida para a noite de inglês',
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
