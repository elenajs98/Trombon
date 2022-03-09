import React from 'react';

export const Registro = () => {
  return (
      <>
<div id="get-started">
          <strong>HandCrafted, home-made masterprices</strong>
          <form id="form" action="https://www.freecodecamp.com/email-submit">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <br />
            <input id="submit" type="submit" value="get started" className="btn"></input>
          </form>
        </div>
        </>
  );
};
export default Registro;