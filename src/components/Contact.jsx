
import "./Contact.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaArrowRight,
  FaExternalLinkAlt,
  FaTint,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const contactInformation = {
  businessName: "Star Aqua Services",
  businessPhoneNumber: "9145198238",
  whatsappNumber: "919145198238",
  businessAddress:
    "Mangalmurti Apartment, Near Bhagvanti School, Rupeenagar, Talawade, Pimpri-Chinchwad, Pune, Maharashtra 411062",
  workingHours: "24 Hrs",
  emailAddress: "pachputesantosh0938@gmail.com",
};

function Contact() {
  const whatsappMessage =
    "Hello Star Aqua Services, I would like to enquire about RO water purifier service.";

  const whatsappUrl = `https://wa.me/${
    contactInformation.whatsappNumber
  }?text=${encodeURIComponent(whatsappMessage)}`;

  const mapSearchQuery = encodeURIComponent(
    "Star Aqua Service, Rupeenagar, Talawade, Mangalmurti Apartment, Near Bhagvanti School, Pune, Maharashtra 411062"
  );

  const googleMapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${mapSearchQuery}`;

  const googleMapsEmbedUrl =
    `https://www.google.com/maps?q=${mapSearchQuery}&output=embed`;

  return (
    <>
      <section className="contact-section" id="Contact">
        <div className="contact-container">
          {/* Heading */}
          <div className="contact-heading">
            <span className="contact-label">
              <FaTint />
              CONTACT STAR AQUA
            </span>

            <h2>
              Let's Get Your Water
              <span> Purifier Working Again</span>
            </h2>

            <p>
              Need RO repair, installation, filter replacement or
              maintenance? Get in touch with Star Aqua Services
              and tell us how we can help.
            </p>
          </div>

          {/* Contact + Map */}
          <div className="contact-content">
            {/* Contact Card */}
            <div className="contact-card">
              <div className="contact-card-heading">
                <span className="contact-card-heading-icon">
                  <FaTools />
                </span>

                <div>
                  <h3>Get in Touch</h3>
                  <p>We're here to help with your RO service needs.</p>
                </div>
              </div>

              <div className="contact-details-list">
                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <FaPhoneAlt />
                  </span>

                  <div className="contact-detail-text">
                    <strong>Call Us</strong>
                    <a
                      href={`tel:+91${contactInformation.businessPhoneNumber}`}
                    >
                      +91 {contactInformation.businessPhoneNumber}
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <FaWhatsapp />
                  </span>

                  <div className="contact-detail-text">
                    <strong>WhatsApp</strong>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with Star Aqua Services
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <FaMapMarkerAlt />
                  </span>

                  <div className="contact-detail-text">
                    <strong>Our Location</strong>
                    <span>{contactInformation.businessAddress}</span>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <FaClock />
                  </span>

                  <div className="contact-detail-text">
                    <strong>Service Hours</strong>
                    <span>{contactInformation.workingHours}</span>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <FaEnvelope />
                  </span>

                  <div className="contact-detail-text">
                    <strong>Email Address</strong>
                    <a
                      href={`mailto:${contactInformation.emailAddress}`}
                    >
                      {contactInformation.emailAddress}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-buttons">
                <a
                  href={`tel:+91${contactInformation.businessPhoneNumber}`}
                  className="contact-call-button"
                >
                  <FaPhoneAlt />
                  Call Now
                  <FaArrowRight />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp-button"
                >
                  <FaWhatsapp />
                  WhatsApp
                  <FaArrowRight />
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div className="contact-map-card">
              <div className="contact-map-heading">
                <span className="contact-map-heading-icon">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <h3>Find Our Location</h3>
                  <p>Talawade, Pimpri-Chinchwad, Pune</p>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  src={googleMapsEmbedUrl}
                  title="Star Aqua Services location on Google Maps"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Open in Google Maps
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="contact-bottom-note">
            <FaCheckCircle />
            <span>
              Contact us to confirm service availability, timing
              and charges for your location.
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-brand-title">
                <span className="footer-brand-icon">
                  <FaTint />
                </span>

                <h3>Star Aqua Services</h3>
              </div>

              <p>
                Water purifier repair, installation, filter
                replacement and maintenance services across
                selected areas of Pune and Pimpri-Chinchwad.
              </p>
            </div>

            <div className="footer-navigation">
              <h4>Quick Links</h4>

              <div className="footer-links">
                <a href="/#home">Home</a>
                <a href="/#about">About Us</a>
                <a href="/#services">Our Services</a>
                <a href="/#ServiceAreas">Service Areas</a>
                <a href="/#Contact">Contact Us</a>
              </div>
            </div>

            <div className="footer-contact">
              <h4>Contact Information</h4>

              <a
                href={`tel:+91${contactInformation.businessPhoneNumber}`}
              >
                <FaPhoneAlt />
                +91 {contactInformation.businessPhoneNumber}
              </a>

              <a
                href={`mailto:${contactInformation.emailAddress}`}
              >
                <FaEnvelope />
                {contactInformation.emailAddress}
              </a>

              <span>
                <FaMapMarkerAlt />
                Talawade, Pimpri-Chinchwad, Pune
              </span>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()}{" "}
              {contactInformation.businessName}. All rights reserved.
            </p>

            <p>
              Designed for Star Aqua Services
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
