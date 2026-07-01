import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import "./Nav.css";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#projects", label: "projects" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo mono">
          <span className="nav__logo-muted">~/</span>
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="nav__cursor" aria-hidden="true" />
        </a>
        <nav className="nav__links mono">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
