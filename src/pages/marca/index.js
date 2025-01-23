import * as React from "react";
import SEO from "../../components/seo";
import Menu from "../../components/menu";
import "../../styles/index.css";

const BrandPage = () => {
  return (
    <>
      <div id="brand">
        <Menu />
        <main>
          <h2>Propósito del manual de marca</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <h2>Historia, tono y voz</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </main>
      </div>
    </>
  );
};

export default BrandPage;

export const Head = () => <SEO title="Manual de Marca" />;
