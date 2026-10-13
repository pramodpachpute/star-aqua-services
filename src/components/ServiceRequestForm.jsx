
import { useEffect, useState } from "react";
import "./ServiceRequestForm.css";

function ServiceRequestForm({
  services,
  selectedService,
  onClose,
  onSuccess,
}) {
  // STAR AQUA WHATSAPP NUMBER
  // Confirm this is your WhatsApp-enabled business number.
  const whatsappNumber = "919145198238";

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Automatically select the service clicked by the customer
  useEffect(() => {
    if (selectedService) {
      setServiceId(String(selectedService.serviceId));
    }
  }, [selectedService]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    // Customer name validation
    if (!customerName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    // Phone number validation
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    // Address validation
    if (!customerAddress.trim()) {
      setErrorMessage("Please enter your service address.");
      return;
    }

    // Service validation
    if (!serviceId) {
      setErrorMessage("Please select a service.");
      return;
    }

    // Problem validation
    if (!problemDescription.trim()) {
      setErrorMessage("Please describe your problem.");
      return;
    }

    // Find selected service using serviceId
    const selectedServiceData = services.find(
      (service) =>
        String(service.serviceId) === String(serviceId)
    );

    if (!selectedServiceData) {
      setErrorMessage("Please select a valid service.");
      return;
    }

    const serviceName = selectedServiceData.serviceName;

    // Prepare WhatsApp message
    const message = [
      "*New Star Aqua Service Request*",
      "",
      `*Customer Name:* ${customerName.trim()}`,
      `*Phone Number:* ${phoneNumber}`,
      `*Address:* ${customerAddress.trim()}`,
      `*Service:* ${serviceName}`,
      `*Problem:* ${problemDescription.trim()}`,
      "",
      "Please contact me for service.",
    ].join("\n");

    // Create WhatsApp URL
    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp directly from the submit action
    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    // If the browser blocks the new tab, show a clickable link
    if (whatsappWindow === null) {
      setErrorMessage(
        "If WhatsApp did not open, please use the link below."
      );
    }

    // Show confirmation without claiming the message was sent
    if (typeof onSuccess === "function") {
      onSuccess("WhatsApp request prepared. Please press Send in WhatsApp.");
    } else {
      onClose();
    }
  };

  return (
    <div className="service-request-overlay">
      <div className="service-request-form-container">

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="service-request-close-button"
          onClick={onClose}
          aria-label="Close service request form"
        >
          ×
        </button>

        {/* HEADING */}
        <h2>Book a Service</h2>

        <p>
          Fill in your details to request an RO water
          purifier service through WhatsApp.
        </p>

        <form onSubmit={handleSubmit}>

          {/* CUSTOMER NAME */}
          <div className="form-group">
            <label htmlFor="customerName">
              Customer Name
            </label>

            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(event) =>
                setCustomerName(event.target.value)
              }
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number
            </label>

            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(event) =>
                setPhoneNumber(
                  event.target.value.replace(/\D/g, "")
                )
              }
              placeholder="Enter 10-digit phone number"
              maxLength={10}
              inputMode="numeric"
              autoComplete="tel-national"
              required
            />
          </div>

          {/* SERVICE ADDRESS */}
          <div className="form-group">
            <label htmlFor="customerAddress">
              Service Address
            </label>

            <textarea
              id="customerAddress"
              value={customerAddress}
              onChange={(event) =>
                setCustomerAddress(event.target.value)
              }
              placeholder="Enter your full address and area"
              rows={3}
              required
            />
          </div>

          {/* SELECT SERVICE */}
          <div className="form-group">
            <label htmlFor="service">
              Select Service
            </label>

            <select
              id="service"
              value={serviceId}
              onChange={(event) =>
                setServiceId(event.target.value)
              }
              required
            >
              <option value="">
                Select a service
              </option>

              {services.map((service) => (
                <option
                  key={service.serviceId}
                  value={service.serviceId}
                >
                  {service.serviceName}
                </option>
              ))}
            </select>
          </div>

          {/* PROBLEM DESCRIPTION */}
          <div className="form-group">
            <label htmlFor="problemDescription">
              Problem Description
            </label>

            <textarea
              id="problemDescription"
              value={problemDescription}
              onChange={(event) =>
                setProblemDescription(event.target.value)
              }
              placeholder="Describe your RO purifier problem"
              rows={4}
              required
            />
          </div>

          {/* ERROR MESSAGE */}
          {errorMessage && (
            <p className="service-request-error" role="alert">
              {errorMessage}
            </p>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="service-request-submit-button"
          >
            Submit Request via WhatsApp
          </button>

        </form>
      </div>
    </div>
  );
}

export default ServiceRequestForm;
