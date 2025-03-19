class SEOComponent extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const title = this.getAttribute('title') || "El Nudal Macramé · Decoración para el hogar";
      const description =
          this.getAttribute('description') ||
          "Macramé y decoración fina desde Buenos Aires. Diseños únicos y artesanales con envíos a toda Argentina.";
      const image = this.getAttribute('image') || "https://elnudalmacrame.com/styles/images/favicon.png"; // URL de la imagen
      const url = this.getAttribute('url') || window.location.href; // URL canónica

      // Establecer el título del documento
      document.title = title;

      // Configurar la meta descripción estándar
      this.updateMetaTag('description', description);

      // Meta adicionales
      this.updateMetaTag('robots', this.getAttribute('robots') || 'index, follow');
      this.updateMetaTag('language', this.getAttribute('language') || 'es');
      this.updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

      // Agregar Open Graph Tags
      this.createMetaTag('og:title', title, 'property');
      this.createMetaTag('og:description', description, 'property');
      this.createMetaTag('og:image', image, 'property');
      this.createMetaTag('og:url', url, 'property');
      this.createMetaTag('og:type', 'website', 'property');

      // Agregar Twitter Card Tags
      this.createMetaTag('twitter:card', 'summary_large_image', 'name');
      this.createMetaTag('twitter:title', title, 'name');
      this.createMetaTag('twitter:description', description, 'name');
      this.createMetaTag('twitter:image', image, 'name');

      // Agregar scripts adicionales si existen
      const scripts = this.getAttribute('scripts');
      if (scripts) {
          this.addScript(scripts.split(','));
      }
  }

  createMetaTag(name, content, attributeType = 'name') {
      let meta = document.querySelector(`meta[${attributeType}="${name}"]`);
      if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attributeType, name);
          document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
  }

  updateMetaTag(name, content, attributeType = 'name') {
      this.createMetaTag(name, content, attributeType);
  }

  addScript(scripts) {
      scripts.forEach((src) => {
          if (!document.querySelector(`script[src="${src.trim()}"]`)) {
              const script = document.createElement('script');
              script.src = src.trim();
              script.defer = true;
              document.head.appendChild(script);
          }
      });
  }
}

// Registrar el web component
customElements.define('seo-component', SEOComponent);