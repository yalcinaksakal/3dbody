import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>3DBody</div>
        <nav>
          <ul>
            <li>
              <a href='/'>Sign In</a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
