// ─────────────────────────────────────────────────────────────
//  scripts/sync-mercadolibre.mjs
//
//  (Opcional) Trae tus publicaciones desde la API de MercadoLibre
//  y las guarda en src/data/products.json, para que el build de
//  Astro las lea sin pegarle a la API en cada página.
//
//  Uso local:   npm run sync:ml
//  En CI:       lo puede correr GitHub Actions antes del build.
//
//  Requiere variables de entorno (nunca hardcodear):
//    ML_CLIENT_ID, ML_CLIENT_SECRET, ML_REFRESH_TOKEN, ML_SELLER_ID
//
//  👉 Este archivo queda como esqueleto. Lo completamos en el paso
//     de configuración OAuth, cuando tengas tu app creada en
//     https://developers.mercadolibre.com.ar
// ─────────────────────────────────────────────────────────────

import { writeFile } from 'node:fs/promises';

async function main() {
  console.log('[sync] Todavía no configurado.');
  console.log('[sync] Próximo paso: crear la app en ML y cargar los Secrets.');

  // Cuando esté listo, la lógica será, a grandes rasgos:
  //
  // 1. Pedir access_token con el refresh_token (POST /oauth/token)
  // 2. GET /users/{ML_SELLER_ID}/items/search?status=active  → IDs
  // 3. GET /items/{id} por cada uno → detalle + permalink
  // 4. Mapear al shape de Product y escribir el JSON:
  //
  // await writeFile(
  //   new URL('../src/data/products.json', import.meta.url),
  //   JSON.stringify(products, null, 2)
  // );

  void writeFile; // evita warning de import sin uso mientras es stub
}

main().catch((err) => {
  console.error('[sync] Error:', err);
  process.exit(1);
});
