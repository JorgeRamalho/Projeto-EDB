/** Caminho de asset compatível com GitHub Pages (/Projeto-EDB/). */
export function assetUrl(path) {
  const clean = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}
