"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import "./navbar.scss";
import { useSession, signOut } from 'next-auth/react';



const Navbar = () => {
  const { data: session } = useSession();
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <nav className="navbar">
      <div className='navbar__left'>
        <Link href={'/'}>
      
          <div className="navbar__logo">
            <img src="logo.gif" alt="Logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">Pargati Community</span>
          </div>
        </Link>
      </div>

      <div className='navbar__right'>
        {!session ? (
          <Link href={"/Login"}>
            <button className='navbar__login-btn'>Login</button>
          </Link>
        ) : (
          <div className="navbar__dropdown">
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              onBlur={() => setTimeout(() => setShowDropDown(false), 100)}
              className='navbar__dropdown-btn'
            >
              Hello, {session.user.email}
            </button>
            <ul className={`navbar__dropdown-menu ${showDropDown ? 'show' : ''}`}>
              <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`}>Your Page</Link>
              </li>
              <li>
                <button onClick={() => signOut()}>Sign Out</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
