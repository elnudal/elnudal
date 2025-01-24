import * as React from "react";
import { Link } from "gatsby";
import "../styles/index.css";

const Menu = () => {
  // Obtener la ruta actual con el objeto `window`
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  // Lista de enlaces del menú
  const menuItems = [
    { name: "Inicio", path: "/marca" + "/" },
    { name: "Logotipo", path: "/marca" + "/logo" },
    { name: "Colores", path: "/marca" + "/colores" },
    { name: "Tipografía", path: "/marca" + "/tipografia" },
    { name: "Patrones y gráficos", path: "/marca" + "/patrones" },
    { name: "Tarjetas de presentación", path: "/marca" + "/tarjetas" },
    { name: "Redes sociales", path: "/marca" + "/redes-sociales" },
    { name: "Publicidades", path: "/marca" + "/publicidades" },
  ];

  return (
    <nav>
        <ul style={{ listStyleType: "none" }}>
            {menuItems.map((item) => (
                <li
                    key={item.path}
                >
                    <Link
                        to={item.path}
                        style={{
                            textDecoration: "none",
                            color: currentPath === item.path ? "rgb(47, 47, 34)" : "rgba(47, 47, 34,.8)",
                            fontWeight: currentPath === item.path ? "bold" : "normal",
                        }}
                    >
                        <aside style={{ display: currentPath === item.path ? "initial" : "none" }} /> {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default Menu;
