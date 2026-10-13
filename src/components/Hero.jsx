
import "./Hero.css";
import heroImage from "../assets/HeroImage.png";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaTools,
  FaTint,
} from "react-icons/fa";

function Hero() {
  // Confirm these are your correct business numbers.
  const businessPhoneNumber = "919145198238";
  const whatsappNumber = "919145198238";

  const whatsappMessage =
    "Hello Star Aqua Services, I would like to enquire about RO water purifier service.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <FaCheckCircle />
            <span>Professional Water Purifier Solutions</span>
          </div>

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            STAR AQUA SERVICES
          </div>

          <h1>
            Pure Water.
            <br />
            <span className="hero-gradient-text">
              Better Living.
            </span>
            <br />
            Every Day.
          </h1>

          <p className="hero-description">
            Keep your family&apos;s water purifier working at its best.
            From RO repair and installation to filter replacement
            and maintenance, Star Aqua Services brings dependable
            doorstep support to Pimpri-Chinchwad, Wakad, Thergaon
            and nearby areas.
          </p>

          <div className="hero-buttons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-btn"
            >
              <FaWhatsapp />
              <span>Enquire on WhatsApp</span>
              <FaArrowRight className="hero-button-arrow" />
            </a>

            <a
              href={`tel:+${businessPhoneNumber}`}
              className="hero-call-btn"
            >
              <FaPhoneAlt />
              <span>Call Now</span>
            </a>
          </div>

          <div className="hero-trust-strip">
            <div className="hero-trust-item">
              <span className="hero-trust-icon">
                <FaTools />
              </span>
              <span>
                <strong>Expert Service</strong>
                <small>Repair & maintenance</small>
              </span>
            </div>

            <div className="hero-trust-divider" />

            <div className="hero-trust-item">
              <span className="hero-trust-icon">
                <FaShieldAlt />
              </span>
              <span>
                <strong>Reliable Support</strong>
                <small>Doorstep assistance</small>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-halo" />

          <div className="hero-image-frame">
            <img
              src={heroImage}
              alt="Star Aqua Services water purifier repair and maintenance"
              className="hero-main-image"
              fetchPriority="high"
            />
          </div>

          <div className="hero-floating-card">
            <div className="floating-icon">
              <FaTint />
            </div>
            <div>
              <strong>Pure Water</strong>
              <small>Complete Water Solutions</small>
            </div>
          </div>

          <div className="hero-mini-badge">
            <FaCheckCircle />
            RO Service & Care
          </div>
        </div>
      </div>

      <div className="hero-bottom-accent" />
    </section>
  );
}

export default Hero;
