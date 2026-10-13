import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import ServiceRequestForm from "../components/ServiceRequestForm";

import "./RORepairService.css";

function WaterPurifierRepair() {
  const [availableServices, setAvailableServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [successToast, setSuccessToast] = useState("");

  useEffect(() => {
    const pageTitle =
      "Water Purifier Repair in Pune & PCMC | Star Aqua Services";

    const pageDescription =
      "Professional water purifier repair service in Pune and Pimpri-Chinchwad for leakage, low water flow, filter issues, motor problems, membrane replacement and general purifier servicing.";

    const pageUrl =
      "https://www.staraquaservices.in/water-purifier-repair";

    document.title = pageTitle;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", pageDescription);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", pageUrl);

    const ogUrl = document.querySelector(
      'meta[property="og:url"]'
    );

    if (ogUrl) {
      ogUrl.setAttribute("content", pageUrl);
    }

    const ogTitle = document.querySelector(
      'meta[property="og:title"]'
    );

    if (ogTitle) {
      ogTitle.setAttribute("content", pageTitle);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        pageDescription
      );
    }

    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://star-aqua-services-production.up.railway.app/api/services"
        );

        const services = response.data.map((service) => ({
          serviceId: service.id,
          serviceName: service.serviceName,
        }));

        setAvailableServices(services);

        const purifierService = services.find((service) => {
          const name = service.serviceName.toLowerCase();

          return (
            name.includes("repair") ||
            name.includes("other")
          );
        });

        if (purifierService) {
          setSelectedService(purifierService);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();

    return () => {
      document.title =
        "Star Aqua Services | RO Repair, Water Purifier Service & Commercial RO";

      metaDescription.setAttribute(
        "content",
        "Star Aqua Services provides RO repair, water purifier service, installation, maintenance, filter replacement and commercial RO services across Pimpri-Chinchwad, Pune and nearby areas."
      );

      canonical.setAttribute(
        "href",
        "https://www.staraquaservices.in/"
      );

      if (ogUrl) {
        ogUrl.setAttribute(
          "content",
          "https://www.staraquaservices.in/"
        );
      }
    };
  }, []);

  const handleBookService = () => {
    setShowRequestForm(true);
  };

  const handleCloseForm = () => {
    setShowRequestForm(false);
  };

  const handleSuccess = (message) => {
    setSuccessToast(message);
    setShowRequestForm(false);

    setTimeout(() => {
      setSuccessToast("");
    }, 4000);
  };

  return (
    <>
      <Navbar />

      <main className="ro-repair-page">
        <section className="ro-repair-hero">
          <div className="ro-repair-container">
            <span className="ro-repair-label">
              Water Purifier Repair
            </span>

            <h1>
              Professional Water Purifier Repair in
              <span> Pune & Pimpri-Chinchwad</span>
            </h1>

            <p className="ro-repair-hero-description">
              Star Aqua Services provides doorstep water purifier
              repair and servicing for homes, offices and
              commercial locations. We diagnose common purifier
              problems and provide suitable repair and maintenance
              solutions.
            </p>

            <div className="ro-repair-actions">
              <button
                type="button"
                className="ro-repair-primary-button"
                onClick={handleBookService}
              >
                Book Purifier Repair
              </button>

              <a
                href="tel:+919145198238"
                className="ro-repair-secondary-button"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919145198238"
                target="_blank"
                rel="noreferrer"
                className="ro-repair-whatsapp-button"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="ro-repair-section">
          <div className="ro-repair-container">
            <div className="ro-repair-heading">
              <span className="ro-repair-label">
                Common Problems
              </span>

              <h2>
                Water Purifier Problems We
                <span> Service</span>
              </h2>

              <p>
                We inspect and repair common purifier issues that
                affect water flow, purification performance and
                daily usage.
              </p>
            </div>

            <div className="ro-repair-grid">
              <article className="ro-repair-card">
                <div className="ro-repair-icon">💧</div>
                <h3>Water Leakage</h3>
                <p>
                  Repair leakage from pipes, connectors, filter
                  housings and purifier fittings.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">🚰</div>
                <h3>Low Water Output</h3>
                <p>
                  Diagnose slow water flow caused by clogged
                  filters, pressure or membrane problems.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">🔄</div>
                <h3>Filter Problems</h3>
                <p>
                  Inspection and replacement of worn or blocked
                  purifier filters when required.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">⚙️</div>
                <h3>Motor & Pump Issues</h3>
                <p>
                  Diagnosis of purifier motor, booster pump and
                  pressure-related issues.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">🧪</div>
                <h3>Water Quality Issues</h3>
                <p>
                  Check purifier performance and water quality when
                  taste, TDS or purification appears abnormal.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">🛠️</div>
                <h3>General Purifier Service</h3>
                <p>
                  Routine inspection, cleaning and maintenance to
                  help keep the purifier working properly.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="ro-repair-section ro-repair-light-section">
          <div className="ro-repair-container">
            <div className="ro-repair-heading">
              <span className="ro-repair-label">
                Service Support
              </span>

              <h2>
                Doorstep Water Purifier
                <span> Service</span>
              </h2>
            </div>

            <div className="ro-repair-features">
              <div className="ro-repair-feature">
                <strong>Home Service</strong>
                <p>
                  Convenient purifier repair and maintenance at
                  your location.
                </p>
              </div>

              <div className="ro-repair-feature">
                <strong>Domestic & Commercial</strong>
                <p>
                  Support for household, office and commercial
                  purifier systems.
                </p>
              </div>

              <div className="ro-repair-feature">
                <strong>Repair & Maintenance</strong>
                <p>
                  Service for common purifier faults and routine
                  maintenance requirements.
                </p>
              </div>

              <div className="ro-repair-feature">
                <strong>Pune & PCMC</strong>
                <p>
                  Doorstep service across Pimpri-Chinchwad, Pune
                  and nearby areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ro-repair-section">
          <div className="ro-repair-container">
            <div className="ro-repair-heading">
              <span className="ro-repair-label">
                Service Areas
              </span>

              <h2>
                Water Purifier Repair Across
                <span> PCMC & Pune</span>
              </h2>
            </div>

            <div className="ro-repair-area-list">
              <span>Talawade</span>
              <span>Chinchwad</span>
              <span>Akurdi</span>
              <span>Nigdi</span>
              <span>Wakad</span>
              <span>Tathawade</span>
              <span>Thergaon</span>
              <span>Punawale</span>
              <span>Ravet</span>
              <span>Moshi</span>
              <span>Bhosari</span>
              <span>Pimpri</span>
            </div>
          </div>
        </section>

        <section className="ro-repair-cta">
          <div className="ro-repair-container">
            <h2>Need Water Purifier Repair?</h2>

            <p>
              Book professional doorstep water purifier service
              with Star Aqua Services.
            </p>

            <div className="ro-repair-actions">
              <button
                type="button"
                className="ro-repair-primary-button"
                onClick={handleBookService}
              >
                Book Service
              </button>

              <a
                href="tel:+919145198238"
                className="ro-repair-secondary-button"
              >
                Call +91 91451 98238
              </a>
            </div>

            <Link
              to="/ro-repair-service"
              className="ro-repair-home-link"
            >
              View RO Repair Service
            </Link>

            <br />

            <Link
              to="/"
              className="ro-repair-home-link"
            >
              ← Back to Star Aqua Services
            </Link>
          </div>
        </section>

        {showRequestForm && (
          <ServiceRequestForm
            services={availableServices}
            selectedService={selectedService}
            onClose={handleCloseForm}
            onSuccess={handleSuccess}
          />
        )}

        {successToast && (
          <div className="service-success-toast">
            <span className="service-success-icon">✓</span>

            <span>{successToast}</span>

            <button
              type="button"
              onClick={() => setSuccessToast("")}
            >
              ×
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default WaterPurifierRepair;