"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { MenuIcon, MoonIcon, SunIcon } from "./icons";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  // Starts matching the value the inline script (lib/theme-script.ts) already
  // wrote to <html> before hydration, then syncs from the DOM on mount so the
  // icon reflects a saved preference without needing to read localStorage
  // during server rendering (where it doesn't exist).
  const [dark, setDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") !== "light");
  }, []);

  function toggleTheme() {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setDark(!dark);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <a href="#top" className={styles.wordmark}>
          Felipe Carl<span className={styles.wordmarkDot}>.</span>
        </a>

        <div className={styles.navActions}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <button aria-label="Toggle theme" onClick={toggleTheme} className={styles.iconBtn}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href={site.resumeUrl} target="_blank" rel="noopener" className={styles.resumeBtn}>
            Resume
          </a>
        </div>

        <div className={styles.mobileActions}>
          <button aria-label="Toggle theme" onClick={toggleTheme} className={styles.iconBtn}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={styles.iconBtn}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={styles.mobileLink}
            >
              {link.label}
            </a>
          ))}
          <a href={site.resumeUrl} target="_blank" rel="noopener" className={styles.resumeBtnMobile}>
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
