import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import { Link } from "gatsby"

const NotFoundPage = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <>
      No pudimos encontrar lo que estabas buscando.
      <br />
      <Link to="/">Ir al inicio</Link>.
    </>
  )
}

export default NotFoundPage