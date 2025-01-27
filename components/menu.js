class MenuComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      // Obtener la ruta actual
      const currentPath = window.location.pathname;
  
      // Lista de enlaces del menú
      const menuItems = [
        { name: "Inicio", path: "/marca/" },
        { name: "Logotipo", path: "/marca/logo" },
        { name: "Colores", path: "/marca/colores" },
        { name: "Tipografía", path: "/marca/tipografia" },
        { name: "Patrones y gráficos", path: "/marca/patrones" },
        { name: "Tarjetas de presentación", path: "/marca/tarjetas" },
        { name: "Redes sociales", path: "/marca/redes-sociales" },
        { name: "Publicidades", path: "/marca/publicidades" },
      ];
  
      // Generar el HTML del menú
      const menuHTML = `
        <nav>
          <ul>
            ${menuItems
              .map((item) => {
                const isActive = currentPath === item.path;
                return `
                  <li>
                    <a
                      href="${item.path}"
                      style="
                        text-decoration: none;
                        color: ${isActive ? "rgb(47, 47, 34)" : "rgba(47, 47, 34, .8)"};
                        font-weight: ${isActive ? "bold" : "normal"};
                        display: flex;
                        align-items: center;
                      "
                    >
                      <aside style="display: ${isActive ? "initial" : "none"}; margin-right: 8px;"></aside> ${item.name}
                    </a>
                  </li>
                `;
              })
              .join("")}
          </ul>
        </nav>
      `;
  
      // Renderizar el menú dentro del componente
      this.innerHTML = menuHTML;
    }
  }
  
  // Registrar el Web Component
  customElements.define("menu-component", MenuComponent);
  