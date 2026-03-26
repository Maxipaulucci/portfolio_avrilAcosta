import './Navbar.css';

const SECTIONS = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiencia' },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <span className="navbar__badge" aria-hidden="true">
            Portafolio
          </span>
        </div>

        <nav className="navbar__center" aria-label="Secciones del portafolio">
          <ul className="navbar__links">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a className="navbar__link" href={`#${id}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__btn navbar__btn--lang"
            aria-label="Cambiar idioma a inglés"
          >
            EN
          </button>
          <button type="button" className="navbar__btn navbar__btn--cv">
            Descargar CV
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
