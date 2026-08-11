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

## Deploy na Vercel + domínio

1. Crie um repositório no GitHub e faça push deste projeto.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório (framework: Next.js).
3. Após o deploy, em **Project → Settings → Domains**, adicione:
   - `faotech.com.br`
   - `www.faotech.com.br` (opcional; redirecione para o apex)
4. No **Registro.br** (ou onde o domínio foi comprado), configure o DNS conforme a Vercel indicar:
   - **Opção A (recomendada):** nameservers da Vercel
   - **Opção B:** registro `A` de `@` apontando para `76.76.21.21` e `CNAME` de `www` para `cname.vercel-dns.com`
5. Aguarde a propagação DNS e valide:
   - `https://faotech.com.br` → `/me`
   - `https://faotech.com.br/me`

## Conteúdo editável

Textos e links ficam em [`src/app/me/content.ts`](src/app/me/content.ts).  
Assets da marca em `public/brand`, wallpapers em `public/wallpapers`, CV em `public/cv`.
