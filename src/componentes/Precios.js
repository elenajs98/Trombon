import React from 'react';

export const Precios = () => {
  return (
      <>
<div id="Pricing">
          <div className="caja">
            <div className="nombre">
              <p>tenor trombone</p>
            </div>
            <div className="precio">
              <p><strong>$600</strong></p>
            </div>
            <div className="info">
              <p>Lorem ipsum.</p>
              <p>Lorem ipsum.</p>
              <p>Lorem ipsum dolor.</p>
              <p>Lorem ipsum.</p>
            </div>
            <button id="submit" type="submit">select</button>
          </div>
          <br />
          <div className="caja">
            <div className="nombre">
              <p>bass trombone</p>
            </div>
            <div className="precio">
              <p><strong>$900</strong></p>
            </div>
            <div className="info">
              <p>Lorem ipsum.</p>
              <p>Lorem ipsum.</p>
              <p>Lorem ipsum dolor.</p>
              <p>Lorem ipsum.</p>
            </div>
            <button id="submit" type="submit">select</button>
          </div>
          <br />
          <div className="caja">
            <div className="nombre">
              <p>valve trombone</p>
            </div>
            <div className="precio">
              <p><strong>$1200</strong></p>
            </div>
            <div className="info">
              <p>Plays similar to a trompet</p>
              <p>Great for jazz bands.</p>
              <p>Lorem ipsum dolor.</p>
              <p>Lorem ipsum.</p>
            </div>
            <button id="submit" type="submit">select</button>
          </div>
        </div>
        </>
  );
};
export default Precios;