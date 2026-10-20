// ─────────────────────────────────────────────────────────────
//  ACCESO A PRODUCTOS
//
//  Este módulo es la ÚNICA fuente de productos para todo el sitio.
//  Hoy devuelve datos de ejemplo (products.sample.json).
//  En el próximo paso lo conectamos a la API real de MercadoLibre.
//
//  Se ejecuta en BUILD TIME (Astro genera el sitio estático), así
//  que las credenciales de ML viven en variables de entorno del
//  build (GitHub Actions Secrets) y NUNCA llegan al navegador.
// ─────────────────────────────────────────────────────────────

import sampleProducts from '../data/products.sample.json';

/**
 * @typedef {Object} Product
 * @property {string}  id                 ID de MercadoLibre (ej: "MLA123...")
 * @property {string}  title              Título de la publicación
 * @property {number}  price              Precio
 * @property {string}  currency           Moneda (ej: "ARS")
 * @property {number}  available_quantity Stock disponible
 * @property {string}  thumbnail          URL de la imagen
 * @property {string}  permalink          URL de la publicación en ML (para el checkout)
 * @property {string}  condition          "new" | "used"
 * @property {boolean} free_shipping      Si tiene envío gratis
 */

/**
 * Devuelve la lista de productos para renderizar el catálogo.
 * @returns {Promise<Product[]>}
 */
export async function getProducts() {
  // ── HOY: datos de ejemplo ───────────────────────────────────
  return sampleProducts;

  // ── PRÓXIMO PASO: API real de MercadoLibre ──────────────────
  // Descomentar y borrar el return de arriba cuando tengamos las
  // credenciales OAuth configuradas.
  //
  // const token = await getAccessToken();          // ver getAccessToken()
  // const sellerId = process.env.ML_SELLER_ID;
  //
  // // 1) IDs de tus publicaciones activas
  // const search = await fetch(
  //   `https://api.mercadolibre.com/users/${sellerId}/items/search?status=active`,
  //   { headers: { Authorization: `Bearer ${token}` } }
  // ).then((r) => r.json());
  //
  // // 2) Detalle de cada ítem (incluye permalink, precio, stock, imagen)
  // const items = await Promise.all(
  //   search.results.map((id) =>
  //     fetch(`https://api.mercadolibre.com/items/${id}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }).then((r) => r.json())
  //   )
  // );
  //
  // return items.map((it) => ({
  //   id: it.id,
  //   title: it.title,
  //   price: it.price,
  //   currency: it.currency_id,
  //   available_quantity: it.available_quantity,
  //   thumbnail: it.thumbnail.replace('http://', 'https://'),
  //   permalink: it.permalink,
  //   condition: it.condition,
  //   free_shipping: it.shipping?.free_shipping ?? false,
  // }));
}

/**
 * Obtiene un access token de ML usando el refresh token.
 * Los access tokens de ML expiran (~6 h); el refresh token es de
 * larga duración y se guarda como Secret en GitHub Actions.
 * (Implementación completa en el paso de configuración OAuth.)
 * @returns {Promise<string>}
 */
// async function getAccessToken() {
//   const res = await fetch('https://api.mercadolibre.com/oauth/token', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: new URLSearchParams({
//       grant_type: 'refresh_token',
//       client_id: process.env.ML_CLIENT_ID,
//       client_secret: process.env.ML_CLIENT_SECRET,
//       refresh_token: process.env.ML_REFRESH_TOKEN,
//     }),
//   });
//   const data = await res.json();
//   return data.access_token;
// }

/** Formatea un precio en pesos argentinos. */
export function formatPrice(value, currency = 'ARS') {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}
