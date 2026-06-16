# English de Boteco — Site de Lançamento

**Repositório:** [github.com/JorgeRamalho/EnglishdeBoteco](https://github.com/JorgeRamalho/EnglishdeBoteco)

**Site online (acesso remoto):** [jorgeramalho.github.io/EnglishdeBoteco](https://jorgeramalho.github.io/EnglishdeBoteco/)

## Hospedagem no GitHub Pages

O deploy é automático a cada `push` na branch `main` (workflow publica em `gh-pages` com fotos, logo e favicon).

**URL do site:** `https://jorgeramalho.github.io/EnglishdeBoteco/`

1. Abra [Settings → Pages](https://github.com/JorgeRamalho/EnglishdeBoteco/settings/pages)
2. **Build and deployment** → **Source:** **Deploy from a branch**
3. **Branch:** `gh-pages` · pasta **`/ (root)`** → **Save**
4. Aguarde 2–5 minutos e acesse o link acima

---

Landing page do evento de lançamento da **English de Boteco**, com identidade visual em marrom amadeirado e dourado (logo), tipografia contrastante, textura de madeira e galeria com 6 fotos reais da comunidade em `public/images/encontros/`.

## Tecnologias

- **HTML5** semântico (`index.html`)
- **CSS3** (variáveis, gradientes, animações, layout responsivo)
- **React 18** + **JavaScript** (componentes, validação de formulário)
- **Vite** (build e dev server)

## Formulário de cadastro

Campos: nome, data de nascimento, cidade, telefone, e-mail e endereço.

Os cadastros válidos são salvos em `localStorage` (chave `edb-cadastros`) para demonstração. Em produção, conecte a um backend ou serviço de e-mail/CRM.

## Como rodar

### Versão HTML + CSS + JavaScript (sem React)

Abra `site.html` no navegador ou use uma extensão **Live Server**:

| Arquivo | Conteúdo |
|---------|----------|
| `style.css` | Estilos completos (importa `css/style.css`) |
| `css/style.css` | Folha única com todo o CSS do site |
| `script.js` | Menu, animações, validação e envio do formulário |
| `js/script.js` | Cópia do mesmo script |
| `site.html` | Página completa ligada aos arquivos acima |

### Versão React (Vite)

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

### Live Server (VS Code)

O `index.html` da raiz é React — o Live Server não transpila JSX. Use:

```bash
npm run build
```

Depois abra `index.html` com **Open with Live Server** (redireciona para `dist/`). Para rebuild automático:

```bash
npm run live:watch
```

Ou use `npm run live` para build + preview na porta 5500.

## Build para produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/   # Header, Hero, About, Experience, Gallery, RegistrationForm, Footer
  styles/       # global.css, App.css
  App.jsx
  main.jsx
```

## Logo e favicon

Arquivos em `public/`:

- `logo-edb.png` — logo oficial (header, hero, rodapé, formulário)
- `favicon.png` — ícone da aba do navegador
- `site.webmanifest` — nome, cores e ícones para “adicionar à tela inicial”

Constantes centralizadas em `src/constants/brand.js`.

## Fotos da comunidade

| Arquivo | Legenda |
|---------|---------|
| `encontro-edb-1.jpg` | Hopia Craft Beer |
| `encontro-edb-2.jpg` | Encontro ao ar livre |
| `encontro-edb-3.jpg` | Boteco da Skina |
| `encontro-edb-4.jpg` | Galera no boteco |
| `encontro-edb-5.jpg` | Choppinho |
| `encontro-edb-6.jpg` | Comunidade reunida |

No GitHub Pages, imagens e logo usam caminhos relativos via `import.meta.env.BASE_URL` em `src/utils/assetUrl.js`.
