import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="menu">
          
          {/* HOME COM DROPDOWN */}
          <div className="dropdown">
            <Link to="../home" className="menu-item">
              <FiHome size={18} />
              <span>Home</span>
            </Link>

            <div className="dropdown-menu">
              <Link to="/agendamento">Agendamento</Link>
              <Link to="/inbound">Inbound</Link>
              <Link to="/inventario">Inventario</Link>
              <Link to="/outbound">Outbound</Link>
              <Link to="/relatorio">Relatorio</Link>
              <Link to="/mobile">Mobile</Link>
            </div>
          </div>

          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="brand">SWM Company</div>
      </nav>
    </header>
  );
}
