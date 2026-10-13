import { useEffect, useState } from "react";
import "./Product.css";

function Products() {

  const [contactInformation, setContactInformation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const product = {
    productName: "Star Aqua RO Water Purifier",
    imageUrl: "/images/ro-purifier.png",
  };


  /* ================= FETCH CONTACT INFORMATION ================= */

  useEffect(() => {

    fetch("https://star-aqua-services.onrender.com/api/contact")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch contact information");
        }

        return response.json();

      })

      .then((data) => {

        setContactInformation(data);
        setIsLoading(false);

      })

      .catch((error) => {

        console.error("Contact API Error:", error);

        setErrorMessage("Unable to load contact information.");

        setIsLoading(false);

      });

  }, []);


  /* ================= LOADING ================= */

  if (isLoading) {
    return (
      <section className="products-section" id="Product">
        <div className="products-container">
          <p>Loading product information...</p>
        </div>
      </section>
    );
  }


  /* ================= ERROR ================= */

  if (errorMessage) {
    return (
      <section className="products-section" id="Product">
        <div className="products-container">
          <p>{errorMessage}</p>
        </div>
      </section>
    );
  }


  /* ================= WHATSAPP URL ================= */

  const whatsappMessage =
    "Hello Star Aqua, I would like to book an RO water purifier service.";

  const whatsappContactUrl =
    `https://wa.me/${contactInformation.whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  /* ================= PRODUCT ================= */

  return (
    <section
      className="products-section"
      id="Product"
    >

      <div className="products-container">

        {/* Heading */}

        <h2 className="products-title">
          Our Product
        </h2>


        {/* Product Card */}

        <div className="product-card">


          {/* Product Image */}

          <div className="product-image-container">

            <img
              src={product.imageUrl}
              alt={product.productName}
              className="product-image"
            />

          </div>


          {/* Product Content */}

          <div className="product-content">

            <h3 className="product-name">
              {product.productName}
            </h3>


            {/* WhatsApp Button */}

            <div className="product-whatsapp-detail">

              <a
                href={whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="product-whatsapp-button"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Products;