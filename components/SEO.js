class SEOComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const title = this.getAttribute('title') || "El Nudal Macrame y Decoración para el hogar";
      const description =
        this.getAttribute('description') ||
        "Macramé y decoración fina desde Buenos Aires. Diseños únicos y artesanales con envíos a toda Argentina.";
  
      // Establecer el título del documento
      document.title = title;
  
      // Configurar la meta descripción
      this.updateMetaTag('description', description);
  
      // Meta adicionales
      this.updateMetaTag('robots', this.getAttribute('robots') || 'index, follow');
      this.updateMetaTag('language', this.getAttribute('language') || 'es');
      this.updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  
      // Agregar scripts adicionales si existen
      const scripts = this.getAttribute('scripts');
      if (scripts) {
        this.addScript(scripts.split(','));
      }
    }
  
    updateMetaTag(name, content) {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    }
  
    updateLinkTag(rel, href, type) {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (type) link.type = type;
        document.head.appendChild(link);
      }
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
  