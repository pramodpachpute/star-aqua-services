
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTools,
  FaTint,
  FaSyncAlt,
  FaWrench,
  FaFlask,
  FaIndustry,
  FaShieldAlt,
  FaCog,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";
import "./Services.css";
import ServiceRequestForm from "./ServiceRequestForm";

const availableServices = [
  {
    serviceId: 1,
    serviceName: "RO Repair",
    serviceIcon: FaTools,
    serviceDescription:
      "Professional RO repair for leakage, low water flow, unusual noise and other common purifier problems.",
    seoPath: "/ro-repair-service",
  },
  {
    serviceId: 2,
    serviceName: "RO Installation",
    serviceIcon: FaTint,
    serviceDescription:
      "Professional installation and setup of your RO water purifier at home or the workplace.",
    seoPath: "/ro-installation",
  },
  {
    serviceId: 3,
    serviceName: "Filter Change",
    serviceIcon: FaSyncAlt,
    serviceDescription:
      "Replacement of worn-out RO filters and membranes to maintain purifier performance.",
    seoPath: "/ro-filter-replacement",
  },
  {
    serviceId: 4,
    serviceName: "AMC Service",
    serviceIcon: FaWrench,
    serviceDescription:
      "Regular maintenance and servicing to help keep your RO purifier operating efficiently.",
    seoPath: "/ro-maintenance-service",
  },
  {
    serviceId: 5,
    serviceName: "Water Quality Check",
    serviceIcon: FaFlask,
    serviceDescription:
      "Water quality assessment to help identify the right purification and maintenance needs.",
    seoPath: null,
  },
  {
    serviceId: 6,
    serviceName: "Commercial RO Service",
    serviceIcon: FaIndustry,
    serviceDescription:
      "Maintenance and repair support for commercial RO water purification systems.",
    seoPath: "/commercial-ro-service",
  },
  {
    serviceId: 7,
    serviceName: "Water Purifier Repair",
    serviceIcon: FaShieldAlt,
    serviceDescription:
      "Inspection, troubleshooting and repair of different types of water purifiers.",
    seoPath: "/water-purifier-repair",
  },
  {
    serviceId: 8,
    serviceName: "Other Services",
    serviceIcon: FaCog,
    serviceDescription:
      "Have a different water purifier problem? Tell us what you need and enquire about service.",
    seoPath: null,
  },
];

function Services() {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [successToast, setSuccessToast] = useState("");
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? availableServices
    : availableServices.slice(0, 6);

  const handleServiceBooking = (service) => {
    setSelectedService(service);
    setShowRequestForm(true);
  };

  const handleCloseForm = () => {
    setShowRequestForm(false);
    setSelectedService(null);
  };

  const handleSuccess = (message) => {
    setSuccessToast(message);
    handleCloseForm();
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <span className="services-label">
            <FaTint />
            OUR SERVICES
          </span>

          <h2>
            Complete Water Purifier
            <br />
            <span>Care & Solutions</span>
          </h2>

          <p>
            From quick repairs to regular maintenance, explore our
            professional RO water purifier services and request
            assistance through WhatsApp.
          </p>
        </div>

        <div className="services-grid">
          {visibleServices.map((service, index) => {
            const ServiceIcon = service.serviceIcon;

            return (
              <article
                className="service-card"
                key={service.serviceId}
              >
                <div className="service-card-top">
                  <span className="service-icon">
                    <ServiceIcon aria-hidden="true" />
                  </span>

                  <span className="service-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{service.serviceName}</h3>

                <p>{service.serviceDescription}</p>

                <div className="service-card-actions">
                  {service.seoPath && (
                    <Link
                      to={service.seoPath}
                      className="service-learn-more"
                    >
                      Learn More
                      <FaArrowRight />
                    </Link>
                  )}

                  <button
                    type="button"
                    className="service-book-button"
                    onClick={() => handleServiceBooking(service)}
                  >
                    Request Service
                    <FaArrowRight />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {availableServices.length > 6 && (
          <div className="services-show-button-container">
            <button
              type="button"
              className="services-show-button"
              onClick={() => setShowAll((previous) => !previous)}
              aria-expanded={showAll}
            >
              {showAll ? (
                <>
                  Show Fewer Services <FaChevronUp />
                </>
              ) : (
                <>
                  Explore All Services <FaChevronDown />
                </>
              )}
            </button>
          </div>
        )}

        <div className="services-bottom-banner">
          <div className="services-banner-icon">
            <FaCheckCircle />
          </div>

          <div className="services-banner-text">
            <strong>Not sure which service you need?</strong>
            <span>
              Tell us about your purifier problem and we can discuss
              the appropriate service.
            </span>
          </div>

          <button
            type="button"
            onClick={() => handleServiceBooking(availableServices[7])}
            className="services-banner-button"
          >
            Get Assistance <FaArrowRight />
          </button>
        </div>
      </div>

      {showRequestForm && (
        <ServiceRequestForm
          services={availableServices}
          selectedService={selectedService}
          onClose={handleCloseForm}
          onSuccess={handleSuccess}
        />
      )}

      {successToast && (
        <div className="service-success-toast" role="status">
          <FaCheckCircle />
          <span>{successToast}</span>
          <button
            type="button"
            onClick={() => setSuccessToast("")}
            aria-label="Dismiss message"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </section>
  );
}

export default Services;
