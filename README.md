# English de Boteco — Site de Lançamento

**Repositório:** [github.com/JorgeRamalho/Projeto-EDB](https://github.com/JorgeRamalho/Projeto-EDB)

**Site online (acesso remoto):** [jorgeramalho.github.io/Projeto-EDB](https://jorgeramalho.github.io/Projeto-EDB/)

## Hospedagem no GitHub Pages

O deploy é automático a cada `push` na branch `main`.

1. Abra [Settings → Pages](https://github.com/JorgeRamalho/Projeto-EDB/settings/pages)
2. **Build and deployment** → **Source:** escolha **Deploy from a branch**
3. **Branch:** `gh-pages` · pasta **`/ (root)`** → **Save**
4. Aguarde 2–5 minutos e acesse o link acima

---

Landing page do evento de lançamento da **English de Boteco**, com identidade visual inspirada em boteco brasileiro (verde, dourado, âmbar), tipografia contrastante, gradientes e galeria fotográfica.

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

## Imagens de fundo

As fotos de ambiente usam URLs do Unsplash. Substitua por imagens reais do evento nos componentes correspondentes.
