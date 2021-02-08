import React, { useState } from 'react';

import logoImg from '../../img/logo.svg';

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <h1>Nav</h1>
    </>
  );
}

export default Nav;
