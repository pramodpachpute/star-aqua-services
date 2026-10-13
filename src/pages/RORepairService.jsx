import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ServiceRequestForm from "../components/ServiceRequestForm";

import "./RORepairService.css";

function RORepairService() {
  const availableServices = [
    { id: 1, serviceName: "RO Repair" },
    { id: 2, serviceName: "RO Installation" },
    { id: 3, serviceName: "Filter Change" },
    { id: 4, serviceName: "AMC Service" },
    { id: 5, serviceName: "Water Quality Check" },
    { id: 6, serviceName: "Commercial RO Service" },
    { id: 7, serviceName: "Water Purifier Repair" },
    { id: 8, serviceName: "Other Services" },
  ];

  const selectedService = availableServices[0];

  const [showRequestForm, setShowRequestForm] = useState(false);
  const [successToast, setSuccessToast] = useState("");

  useEffect(() => {
    const pageTitle =
      "RO Repair Service in Pune & PCMC | Star Aqua Services";

    const pageDescription =
      "Professional RO repair service in Pune and Pimpri-Chinchwad for leakage, low water flow, filter replacement, membrane issues, motor problems and TDS adjustment.";

    const pageUrl =
      "https://www.staraquaservices.in/ro-repair-service";

    document.title = pageTitle;

    // Meta Description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", pageDescription);

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", pageUrl);

    // Open Graph URL
    const ogUrl = document.querySelector(
      'meta[property="og:url"]'
    );

    if (ogUrl) {
      ogUrl.setAttribute("content", pageUrl);
    }

    // Open Graph Title
    const ogTitle = document.querySelector(
      'meta[property="og:title"]'
    );

    if (ogTitle) {
      ogTitle.setAttribute("content", pageTitle);
    }

    // Open Graph Description
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        pageDescription
      );
    }

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

        {/* HERO SECTION */}
        <section className="ro-repair-hero">
          <div className="ro-repair-container">
            <span className="ro-repair-label">
              RO Repair Service
            </span>

            <h1>
              Professional RO Repair Service in
              <span> Pune & Pimpri-Chinchwad</span>
            </h1>

            <p className="ro-repair-hero-description">
              Star Aqua Services provides reliable doorstep RO
              repair and water purifier servicing for domestic
              and commercial systems. We diagnose and repair
              common purifier problems quickly and professionally.
            </p>

            <div className="ro-repair-actions">
              <button
                type="button"
                className="ro-repair-primary-button"
                onClick={handleBookService}
              >
                Book RO Repair
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

        {/* COMMON PROBLEMS */}
        <section className="ro-repair-section">
          <div className="ro-repair-container">
            <div className="ro-repair-heading">
              <span className="ro-repair-label">
                Common Problems
              </span>

              <h2>
                RO Problems We <span>Repair</span>
              </h2>

              <p>
                Our technicians handle common RO and water
                purifier problems for major purifier brands.
              </p>
            </div>

            <div className="ro-repair-grid">

              <article className="ro-repair-card">
                <div className="ro-repair-icon">💧</div>
                <h3>RO Water Leakage</h3>
                <p>
                  Repair leaking pipes, fittings, filter housings
                  and purifier connections.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">🚰</div>
                <h3>Low Water Flow</h3>
                <p>
                  Diagnose low output caused by clogged filters,
                  membrane issues or pressure problems.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">🔄</div>
                <h3>Filter Replacement</h3>
                <p>
                  Replacement of sediment, carbon and other RO
                  filters when required.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">🧪</div>
                <h3>TDS Adjustment</h3>
                <p>
                  Check water quality and adjust purifier settings
                  for suitable purified water output.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">⚙️</div>
                <h3>Motor & Pump Issues</h3>
                <p>
                  Diagnosis and repair of RO pump, motor and
                  pressure-related problems.
                </p>
              </article>

              <article className="ro-repair-card">
                <div className="ro-repair-icon">🛠️</div>
                <h3>Membrane Problems</h3>
                <p>
                  Inspection and replacement of RO membranes when
                  purification performance drops.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="ro-repair-section ro-repair-light-section">
          <div className="ro-repair-container">

            <div className="ro-repair-heading">
              <span className="ro-repair-label">
                Why Choose Us
              </span>

              <h2>
                Reliable Doorstep <span>RO Service</span>
              </h2>
            </div>

            <div className="ro-repair-features">

              <div className="ro-repair-feature">
                <strong>Doorstep Service</strong>
                <p>
                  Technician service at homes, offices and
                  commercial locations.
                </p>
              </div>

              <div className="ro-repair-feature">
                <strong>Domestic & Commercial</strong>
                <p>
                  Service support for household purifiers and
                  commercial RO systems.
                </p>
              </div>

              <div className="ro-repair-feature">
                <strong>Major RO Brands</strong>
                <p>
                  Repair and maintenance support for commonly used
                  RO and water purifier brands.
                </p>
              </div>

              <div className="ro-repair-feature">
                <strong>Pune & PCMC Coverage</strong>
                <p>
                  Service across Pimpri-Chinchwad, Pune and nearby
                  service areas.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="ro-repair-section">
          <div className="ro-repair-container">

            <div className="ro-repair-heading">
              <span className="ro-repair-label">
                Service Areas
              </span>

              <h2>
                RO Repair Across <span>PCMC & Pune</span>
              </h2>

              <p>
                Doorstep service is available across many nearby
                areas including the following locations.
              </p>
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

        {/* CTA */}
        <section className="ro-repair-cta">
          <div className="ro-repair-container">

            <h2>Need RO Repair at Your Doorstep?</h2>

            <p>
              Book professional RO repair and water purifier
              service with Star Aqua Services.
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
              to="/"
              className="ro-repair-home-link"
            >
              ← Back to Star Aqua Services
            </Link>

          </div>
        </section>

        {/* SERVICE REQUEST FORM */}
        {showRequestForm && (
          <ServiceRequestForm
            services={availableServices}
            selectedService={selectedService}
            onClose={handleCloseForm}
            onSuccess={handleSuccess}
          />
        )}

        {/* SUCCESS TOAST */}
        {successToast && (
          <div className="service-success-toast">
            <span className="service-success-icon">
              ✓
            </span>

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

export default RORepairService;