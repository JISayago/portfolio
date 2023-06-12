import React from 'react';
import Logo from './Logo';
import Links from './Links';


function Header() {
    return (
      <header className="p-2 flex
      mbl:flex-col 
      pcs:flex-row">        
        <Logo/>
        <Links/>
      </header>
  )
}
export default Header;