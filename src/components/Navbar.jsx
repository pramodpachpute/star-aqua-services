
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import logoImage from "../assets/Star_aqua_services_logo.png.jpeg";
import "./Navbar.css";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Service Areas", id: "ServiceAreas" },
  { label: "Contact", id: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  const businessPhoneNumber = "919145198238";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      if (location.pathname !== "/") return;

      const offset = 150;
      let current = "home";

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= window.scrollY + offset) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    setActiveSection(id);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `/#${id}`);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const id = decodeURIComponent(location.hash.slice(1));
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a
          href="/#home"
          className="logo"
          aria-label="Star Aqua Services Home"
          onClick={(event) => handleNavigation(event, "home")}
        >
          <img
            src={logoImage}
            alt="Star Aqua Services"
            className="logo-image"
          />
        </a>

        <nav
          id="main-navigation"
          className={`nav-menu ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`/#${id}`}
              className={
                location.pathname === "/" && activeSection === id
                  ? "nav-link active-link"
                  : "nav-link"
              }
              onClick={(event) => handleNavigation(event, id)}
            >
              {label}
            </a>
          ))}

          <a
            href={`tel:+${businessPhoneNumber}`}
            className="nav-call nav-call-mobile"
            onClick={() => setMenuOpen(false)}
          >
            <FaPhoneAlt />
            Call Now
            <FaArrowRight />
          </a>
        </nav>

        <div className="navbar-actions">
          <a
            href={`tel:+${businessPhoneNumber}`}
            className="nav-call nav-call-desktop"
          >
            <FaPhoneAlt />
            <span>Call Now</span>
            <FaArrowRight className="nav-call-arrow" />
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
