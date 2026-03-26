import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

function GlobeIcon({ className }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M2 12h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon({ className }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 5v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.5 10.5 12 14 15.5 10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SECTIONS = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiencia' },
];

const BADGE_CYCLE_MS = 4200;

function PortfolioBadge() {
  const badgeRef = useRef(null);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;

    const mq =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;
    const reduceMotion = Boolean(mq?.matches);
    if (reduceMotion) {
      el.style.setProperty('--badge-box-glow', '0.5');
      el.style.setProperty('--badge-text-glow', '0.5');
      return undefined;
    }

    const t0 = performance.now();
    let rafId = 0;

    const tick = (now) => {
      const phase =
        (Math.sin(((now - t0) / BADGE_CYCLE_MS) * Math.PI * 2) + 1) / 2;
      const boxGlow = phase;
      const textGlow = 1 - phase;
      el.style.setProperty('--badge-box-glow', String(boxGlow));
      el.style.setProperty('--badge-text-glow', String(textGlow));
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <span ref={badgeRef} className="navbar__badge">
      <span className="navbar__badge-text">Portafolio</span>
    </span>
  );
}

function Navbar() {
  const [lang, setLang] = useState('es');

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <PortfolioBadge />
        </div>

        <nav className="navbar__center" aria-label="Secciones del portafolio">
          <ul className="navbar__links">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a className="navbar__link" href={`#${id}`}>
                  <span className="navbar__link-outline" aria-hidden="true">
                    <span className="navbar__link-line navbar__link-line--top" />
                    <span className="navbar__link-line navbar__link-line--bottom" />
                    <span className="navbar__link-line navbar__link-line--left" />
                    <span className="navbar__link-line navbar__link-line--right" />
                  </span>
                  <span className="navbar__link-text">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__btn navbar__btn--lang"
            aria-label={
              lang === 'es'
                ? 'Cambiar idioma a inglés'
                : 'Cambiar idioma a español'
            }
            onClick={() => setLang((l) => (l === 'es' ? 'en' : 'es'))}
          >
            <GlobeIcon className="navbar__btn-lang-icon" />
            <span className="navbar__btn-lang-label">{lang}</span>
          </button>
          <button type="button" className="navbar__btn navbar__btn--cv">
            <DownloadIcon className="navbar__btn-cv-icon" />
            Descargar CV
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
