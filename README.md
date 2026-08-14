# faoTech — portfolio

Site da faoTech com portfolio pessoal em [`/me`](https://faotech.com.br/me).

- `faotech.com.br` → redireciona para `/me`
- Stack: Next.js (App Router) + TypeScript + Tailwind + **Fira Code**

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000/me](http://localhost:3000/me).

## Deploy no Railway + domínio `faotech.com.br`

### 1. Subir o projeto

1. Faça push deste repositório no GitHub (já existe: `faotech-portfolio`).
2. Em [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**.
3. Selecione `faotech-portfolio`.
4. No serviço → **Settings → Networking → Generate Domain** (URL `*.up.railway.app` para testar).
5. Confirme o deploy e abra `https://SEU-PROJETO.up.railway.app/me`.

O projeto já está com `output: "standalone"` e `railway.toml` para build/start no Railway.

### 2. Apontar `faotech.com.br`

1. No serviço Railway → **Settings → Networking → + Custom Domain**.
2. Adicione `faotech.com.br` (e, se quiser, `www.faotech.com.br`).
3. A Railway mostra **dois registros DNS** — copie os dois:
   - `CNAME` → alvo `*.up.railway.app` (ou o host que a UI mostrar)
   - `TXT` → verificação de propriedade (`_railway-verify...`)
4. No **GoDaddy → Meu Produtos → Domínios → faotech.com.br → DNS / Gerenciar DNS**:
   - Remova registros `A`/`CNAME` antigos de `@` e `www` que conflitem (ex.: parking da GoDaddy).
   - Crie o **TXT** exatamente como a Railway pedir (geralmente `_railway-verify` ou o nome que a UI mostrar).
   - Para o apex (`faotech.com.br` / `@`):
     - Preferência: na Railway adicione também `www.faotech.com.br`.
     - No GoDaddy: `CNAME` de `www` → host `*.up.railway.app` indicado pela Railway.
     - No GoDaddy: use **Encaminhamento de domínio** (Domain Forwarding) de `faotech.com.br` → `https://www.faotech.com.br` (permanente / 301), **ou** se a Railway/GoDaddy oferecerem ALIAS/ANAME no `@`, use o CNAME/ALIAS do apex.
   - GoDaddy costuma **não** aceitar CNAME puro no `@`; por isso `www` + encaminhamento do apex é o caminho mais estável.
5. Espere a verificação ficar verde na Railway (SSL automático; pode levar minutos a algumas horas).
6. Valide:
   - `https://www.faotech.com.br/me` → portfolio
   - `https://faotech.com.br` → deve chegar em `/me` (via redirect do site e/ou encaminhamento)

**Importante:** sem o registro `TXT`, o domínio pode ficar em 404 mesmo com o CNAME ok.

## Conteúdo editável

Textos e links ficam em [`src/app/me/content.ts`](src/app/me/content.ts).  
Assets da marca em `public/brand`, wallpapers em `public/wallpapers`, CV em `public/cv`.
