
import "./About.css";
import aboutImage from "../assets/IMG_3505.PNG";
import {
  FaCheckCircle,
  FaTools,
  FaTint,
  FaHeadset,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

function About() {
  const whatsappNumber = "919145198238";

  const whatsappMessage =
    "Hello Star Aqua Services, I would like to enquire about your water purifier services.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Left: Image */}
          <div className="about-visual">
            <div className="about-image-background" />

            <div className="filter-image-container">
              <img
                src={aboutImage}
                alt="Star Aqua Services RO water purifier"
                className="filter-image"
                loading="lazy"
              />
            </div>

            <div className="about-image-badge">
              <span className="about-image-badge-icon">
                <FaTint />
              </span>
              <span>
                <strong>Star Aqua Services</strong>
                <small>Water Purifier Solutions</small>
              </span>
            </div>
          </div>

          {/* Right: About content */}
          <div className="about-content">
            <span className="about-label">
              <FaTint />
              ABOUT STAR AQUA
            </span>

            <h2>
              Your Trusted Partner for
              <span> Pure Water Solutions</span>
            </h2>

            <p className="about-description">
              At Star Aqua Services, we provide water purifier
              repair, installation, filter replacement and
              maintenance support to help keep your purification
              system running smoothly.
            </p>

            <p className="about-description">
              We serve customers in Pimpri-Chinchwad, Wakad,
              Thergaon and nearby areas, offering practical
              solutions for household and commercial RO systems.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <span className="about-feature-icon">
                  <FaTools />
                </span>
                <div>
                  <strong>RO Repair & Maintenance</strong>
                  <small>
                    Assistance with common purifier problems
                  </small>
                </div>
              </div>

              <div className="about-feature">
                <span className="about-feature-icon">
                  <FaCheckCircle />
                </span>
                <div>
                  <strong>Installation & Filter Replacement</strong>
                  <small>
                    Service for your water purifier system
                  </small>
                </div>
              </div>

              <div className="about-feature">
                <span className="about-feature-icon">
                  <FaHeadset />
                </span>
                <div>
                  <strong>Customer Assistance</strong>
                  <small>
                    Contact us to discuss your service needs
                  </small>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="about-contact-button"
            >
              <FaWhatsapp />
              Enquire on WhatsApp
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Statistics */}
        <div className="service-statistics">
          <div className="stat-card">
            <span className="stat-icon">
              <FaTools />
            </span>
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <span className="stat-icon">
              <FaCheckCircle />
            </span>
            <h3>4.85</h3>
            <div className="rating-stars" aria-label="Five stars">
              ★★★★★
            </div>
            <p>Service Rating</p>
          </div>

          <div className="stat-card">
            <span className="stat-icon">
              <FaHeadset />
            </span>
            <h3>24x7</h3>
            <p>Service Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
