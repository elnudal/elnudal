# Mi Vidriera

Catálogo estático (Astro) que muestra nuestros productos y envía al comprador
a **MercadoLibre** para completar la compra. Se despliega en **GitHub Pages**
con dominio propio.

## Modelo

- El sitio es **100% estático** → hosting gratis en GitHub Pages.
- Los productos se traen desde la **API de MercadoLibre** en *build time*.
- El botón **Comprar en MercadoLibre** lleva al `permalink` de cada publicación.
- El pago, el envío y la garantía los maneja MercadoLibre.

## Estructura

```
mi-vidriera/
├─ .github/workflows/deploy.yml   → build + deploy automático a GitHub Pages
├─ astro.config.mjs               → config (site/base para GitHub Pages)
├─ public/
│  ├─ CNAME                       → tu dominio propio
│  └─ favicon.ico
├─ scripts/
│  └─ sync-mercadolibre.mjs       → (opcional) baja publicaciones de ML
└─ src/
   ├─ layouts/Layout.astro
   ├─ components/ProductCard.astro
   ├─ pages/index.astro           → home + catálogo
   ├─ lib/mercadolibre.js         → fuente de productos (stub → API real)
   ├─ data/products.sample.json   → datos de ejemplo (borrar al conectar ML)
   └─ styles/global.css           → tokens de diseño
```

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist
npm run preview   # sirve /dist localmente
```

## Poner online (una sola vez)

1. Creá un repo vacío en GitHub (ej: `mi-vidriera`).
2. Editá `astro.config.mjs` y `public/CNAME` con **tu dominio**.
3. Subí el código:

   ```bash
   git init
   git add .
   git commit -m "Setup inicial: vidriera con Astro"
   git branch -M main
   git remote add origin git@github.com:TU_USUARIO/mi-vidriera.git
   git push -u origin main
   ```

4. En GitHub: **Settings → Pages → Source: GitHub Actions**.
5. En **Settings → Pages → Custom domain**: cargá tu dominio y esperá la
   verificación + el SSL.
6. En tu proveedor de DNS, apuntá el dominio a GitHub Pages
   (registro `CNAME` a `TU_USUARIO.github.io`, o los `A` de GitHub para el apex).

A partir de ahí, cada `git push` a `main` redepliega solo.

## Pendiente (próximo paso)

- Conectar la API real de MercadoLibre (OAuth) en `src/lib/mercadolibre.js`.
- Cargar los Secrets `ML_CLIENT_ID`, `ML_CLIENT_SECRET`, `ML_REFRESH_TOKEN`,
  `ML_SELLER_ID` en **Settings → Secrets and variables → Actions**.
