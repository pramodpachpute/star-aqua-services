import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ServiceRequestForm from "../components/ServiceRequestForm";
import "./RORepairService.css";

const AVAILABLE_SERVICES = [
  { id: 1, serviceName: "RO Repair" },
  { id: 2, serviceName: "RO Installation" },
  { id: 3, serviceName: "Filter Change" },
  { id: 4, serviceName: "AMC Service" },
  { id: 5, serviceName: "Water Quality Check" },
  { id: 6, serviceName: "Commercial RO Service" },
  { id: 7, serviceName: "Water Purifier Repair" },
  { id: 8, serviceName: "Other Services" },
];

function ServiceSEOPage({
  title,
  metaDescription,
  canonicalPath,
  label,
  heading,
  intro,
  bookingText,
  serviceMatch,
  problems,
}) {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [successToast, setSuccessToast] = useState("");

  const availableServices = AVAILABLE_SERVICES;

  const selectedService =
    availableServices.find((service) =>
      service.serviceName
        .toLowerCase()
        .includes(serviceMatch.toLowerCase())
    ) || availableServices[0];

  useEffect(() => {
    const pageUrl = `https://www.staraquaservices.in${canonicalPath}`;

    document.title = title;

    const description = document.querySelector(
      'meta[name="description"]'
    );

    const canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    const ogUrl = document.querySelector(
      'meta[property="og:url"]'
    );

    const ogTitle = document.querySelector(
      'meta[property="og:title"]'
    );

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (description) {
      description.setAttribute("content", metaDescription);
    }

    if (canonical) {
      canonical.setAttribute("href", pageUrl);
    }

    if (ogUrl) {
      ogUrl.setAttribute("content", pageUrl);
    }

    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", metaDescription);
    }

    return () => {
      document.title =
        "Star Aqua Services | RO Repair, Water Purifier Service & Commercial RO";

      if (description) {
        description.setAttribute(
          "content",
          "Star Aqua Services provides RO repair, water purifier service, installation, maintenance, filter replacement and commercial RO services across Pimpri-Chinchwad, Pune and nearby areas."
        );
      }

      if (canonical) {
        canonical.setAttribute(
          "href",
          "https://www.staraquaservices.in/"
        );
      }

      if (ogUrl) {
        ogUrl.setAttribute(
          "content",
          "https://www.staraquaservices.in/"
        );
      }

      if (ogTitle) {
        ogTitle.setAttribute(
          "content",
          "Star Aqua Services | RO Repair, Water Purifier Service & Commercial RO"
        );
      }

      if (ogDescription) {
        ogDescription.setAttribute(
          "content",
          "Star Aqua Services provides RO repair, water purifier service, installation, maintenance, filter replacement and commercial RO services across Pimpri-Chinchwad, Pune and nearby areas."
        );
      }
    };
  }, [
    title,
    metaDescription,
    canonicalPath,
  ]);

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
              {label}
            </span>

            <h1>{heading}</h1>

            <p className="ro-repair-hero-description">
              {intro}
            </p>

            <div className="ro-repair-actions">

              <button
                type="button"
                className="ro-repair-primary-button"
                onClick={() => setShowRequestForm(true)}
              >
                {bookingText}
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

        {/* OUR SERVICE */}
        <section className="ro-repair-section">
          <div className="ro-repair-container">

            <div className="ro-repair-heading">

              <span className="ro-repair-label">
                Our Service
              </span>

              <h2>
                Professional {label} in Pune & PCMC
              </h2>

              <p>
                Reliable doorstep service for homes, offices and
                commercial locations across Pune and
                Pimpri-Chinchwad.
              </p>

            </div>

            <div className="ro-repair-grid">

              {problems.map((item) => (
                <article
                  className="ro-repair-card"
                  key={item.title}
                >

                  <div className="ro-repair-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </article>
              ))}

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
                Star Aqua Services
              </h2>

            </div>

            <div className="ro-repair-features">

              <div className="ro-repair-feature">

                <strong>
                  Doorstep Service
                </strong>

                <p>
                  Convenient service directly at your location.
                </p>

              </div>

              <div className="ro-repair-feature">

                <strong>
                  Domestic & Commercial
                </strong>

                <p>
                  Service for homes, offices and commercial systems.
                </p>

              </div>

              <div className="ro-repair-feature">

                <strong>
                  Professional Support
                </strong>

                <p>
                  Inspection and suitable service based on your
                  purifier requirements.
                </p>

              </div>

              <div className="ro-repair-feature">

                <strong>
                  Pune & PCMC
                </strong>

                <p>
                  Service across Pune, Pimpri-Chinchwad and nearby
                  areas.
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
                Serving Pune & Pimpri-Chinchwad
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

        {/* CTA */}
        <section className="ro-repair-cta">
          <div className="ro-repair-container">

            <h2>
              Need {label}?
            </h2>

            <p>
              Contact Star Aqua Services for professional
              doorstep service in Pune and PCMC.
            </p>

            <div className="ro-repair-actions">

              <button
                type="button"
                className="ro-repair-primary-button"
                onClick={() => setShowRequestForm(true)}
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
            onClose={() => setShowRequestForm(false)}
            onSuccess={handleSuccess}
          />
        )}

        {/* SUCCESS TOAST */}
        {successToast && (
          <div className="service-success-toast">

            <span className="service-success-icon">
              ✓
            </span>

            <span>
              {successToast}
            </span>

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

export default ServiceSEOPage;