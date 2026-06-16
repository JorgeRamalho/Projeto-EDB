/** Caminho de asset com base relativa (Vite, Live Server e GitHub Pages). */
export function assetUrl(path) {
  const clean = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}
