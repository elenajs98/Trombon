import React from 'react';

export const Encabezado = () => {
  return (
      <>
      <header id="header">
        <div id="title">
          <img
            id="header-img"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png"
            alt="original trombones logo"
          />
        </div>
        <nav id="nav-bar">
          <a className="nav-link" href="#Features">Features</a>
          <a className="nav-link" href="#How_it_works">How it works</a>
          <a className="nav-link" href="#Pricing">Pricing</a>
        </nav>
      </header>
      </>
  );
};
export default Encabezado;