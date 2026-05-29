import { LOGO, BRAND } from '../constants/brand';
import './BrandLogo.css';

/**
 * Logo oficial EDB — reutilizável com tamanhos e atributos configuráveis.
 */
export default function BrandLogo({
  size = 'md',
  showTagline = false,
  className = '',
  ...imgProps
}) {
  const sizeClass = `brand-logo--${size}`;

  return (
    <div className={`brand-logo ${sizeClass} ${className}`.trim()}>
      <img
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        decoding="async"
        {...imgProps}
      />
      {showTagline && (
        <span className="brand-logo__tagline">{BRAND.tagline}</span>
      )}
    </div>
  );
}
