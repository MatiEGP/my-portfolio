import { profile } from "../data/profile";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="mono footer__text">
          © {new Date().getFullYear()} {profile.name} — construido con React, TypeScript y Vite.
        </p>
        <a href="#top" className="footer__top mono">
          ↑ volver arriba
        </a>
      </div>
    </footer>
  );
}
