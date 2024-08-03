import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
      <div class="nav-left">
      <div class="logo"></div>
          <div className="items">
                <p class="plans">PLANS</p>
                <p class="menu">ON THE MENU</p>
                <p class="market">MARKET</p>
                <p class="gifts">GIFTS CARDS</p>
                <p class="wine">BLOG</p>
            </div>
            </div>
      <div className="nav-right">
      <div className="button">
                <p className="login">LOG IN</p>
                <button className="signup">SIGN UP</button>
            </div>
      </div>
      </nav>
    </header>
  );
}

export default Header;

