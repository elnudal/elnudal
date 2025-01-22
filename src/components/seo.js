import React from "react";

const SEO = ({ title, description, children }) => {
  const defaultTitle = "El Nudal Macrame y Decoración para el hogar";
  const defaultDescription = "Macramé y decoración fina desde Buenos Aires. Diseños únicos y artesanales con envíos a toda Argentina.";

  const seo = {
    title: title ? `${title} | El Nudal` : defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="es" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
      {children}
    </>
  );
};

export default SEO;