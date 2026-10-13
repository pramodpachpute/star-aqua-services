
import "./ServiceAreas.css";
import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
  FaMapMarkedAlt,
} from "react-icons/fa";

const serviceAreas = [
  "Pimpri",
  "Chinchwad",
  "Wakad",
  "Thergaon",
  "Punawale",
  "Tathawade",
  "Ravet",
  "Akurdi",
  "Nigdi",
  "Pradhikaran",
  "Bhosari",
  "Hinjewadi",
  "Rahatani",
  "Pimple Saudagar",
  "Pimple Gurav",
  "Pimple Nilakh",
  "Baner",
  "Balewadi",
];

function ServiceAreas() {
  const whatsappNumber = "919145198238";

  const whatsappMessage =
    "Hello Star Aqua Services, I would like to enquire about RO water purifier service in my area.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      className="service-areas-section"
      id="ServiceAreas"
    >
      <div className="service-areas-container">

        {/* Heading */}
        <div className="service-areas-heading">
          <span className="service-areas-label">
            <FaMapMarkerAlt />
            OUR SERVICE LOCATIONS
          </span>

          <h2>
            Serving Pune &
            <span> Pimpri-Chinchwad</span>
          </h2>

          <p>
            Star Aqua Services provides RO water purifier repair,
            installation, filter replacement and maintenance support
            across Pimpri-Chinchwad and selected areas of Pune.
          </p>
        </div>

        {/* Location information */}
        <div className="service-areas-highlight">
          <div className="service-areas-highlight-icon">
            <FaMapMarkedAlt />
          </div>

          <div>
            <strong>Water Purifier Services Near You</strong>
            <p>
              Explore the areas we serve and contact us to confirm
              service availability at your address.
            </p>
          </div>

          <span className="service-areas-count">
            18 Areas
          </span>
        </div>

        {/* Area cards */}
        <div className="service-areas-list">
          {serviceAreas.map((areaName) => (
            <div
              className="service-area-card"
              key={areaName}
            >
              <span className="service-area-icon">
                <FaMapMarkerAlt />
              </span>

              <span className="service-area-name">
                {areaName}
              </span>

              <FaCheckCircle className="service-area-check" />
            </div>
          ))}
        </div>

        {/* Bottom call to action */}
        <div className="service-areas-cta">
          <div className="service-areas-cta-text">
            <h3>Can't find your area?</h3>
            <p>
              Contact Star Aqua Services to check whether
              we can provide service at your location.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="service-areas-whatsapp"
          >
            <FaWhatsapp />
            Check Availability
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;
