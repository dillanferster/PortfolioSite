import React from "react";

function Nav() {
  return (
    <div>
      <nav
        id="nav"
        className="flex sticky z-[1000] top justify-between pb-4 px-16 pt-4 align-middle text-[var(--black)] max-w-[80rem] mx-auto text-[18px]"
      >
        <div id="nav-title">
          <a href="/">Dillan Ferster</a>
        </div>
        <ul
          id="nav-items"
          className="flex justify-evenly align-middle gap-8 text-[var(--black)]"
        >
          <li>
            <a className="hover:text-[var(--text-hover)]" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--text-hover)]" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--text-hover)]" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--text-hover)]" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <hr className="border-[var(--black)]" />
    </div>
  );
}

export default Nav;
