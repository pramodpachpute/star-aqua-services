
import { useEffect, useState } from "react";
import "./Gallery.css";

import {
  FaImages,
  FaExpandAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Image6.jpg";
import Image7 from "../assets/Image7.jpg";

const galleryImages = [
  { id: 1, imageUrl: Image1, alt: "RO Water Purifier" },
  { id: 2, imageUrl: Image2, alt: "RO Water Purifier Service" },
  { id: 3, imageUrl: Image3, alt: "Industrial RO Plant" },
  { id: 4, imageUrl: Image4, alt: "RO Filter Replacement" },
  { id: 5, imageUrl: Image5, alt: "Water Purifier Repair" },
  { id: 6, imageUrl: Image6, alt: "Water Quality Testing" },
  { id: 7, imageUrl: Image7, alt: "RO Filter Service" },
];

const INITIAL_IMAGE_COUNT = 6;

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, INITIAL_IMAGE_COUNT);

  const closePreview = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      (current + 1) % galleryImages.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          (current - 1 + galleryImages.length) % galleryImages.length
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          (current + 1) % galleryImages.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        {/* Heading */}
        <div className="gallery-heading">
          <span className="gallery-label">
            <FaImages />
            OUR WORK GALLERY
          </span>

          <h2>
            A Closer Look at
            <span> Our Work</span>
          </h2>

          <p>
            Explore photos of water purifiers, RO systems,
            filter replacement, repair and maintenance work
            from Star Aqua Services.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {visibleImages.map((galleryImage, index) => (
            <button
              type="button"
              className="gallery-card"
              key={galleryImage.id}
              onClick={() => setSelectedIndex(index)}
              aria-label={`View ${galleryImage.alt}`}
            >
              <img
                src={galleryImage.imageUrl}
                alt={galleryImage.alt}
                loading="lazy"
              />

              <span className="gallery-card-overlay">
                <span className="gallery-expand-icon">
                  <FaExpandAlt />
                </span>

                <span className="gallery-card-title">
                  {galleryImage.alt}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Show More / Less */}
        {galleryImages.length > INITIAL_IMAGE_COUNT && (
          <div className="gallery-button-container">
            <button
              type="button"
              className="gallery-show-button"
              onClick={() => setShowAll((previous) => !previous)}
              aria-expanded={showAll}
            >
              {showAll ? (
                <>
                  <FaArrowUp />
                  Show Less
                </>
              ) : (
                <>
                  <FaArrowDown />
                  View All Photos
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Image Preview */}
      {selectedIndex !== null && (
        <div
          className="gallery-lightbox"
          role="presentation"
          onClick={closePreview}
        >
          <div
            className="gallery-lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={closePreview}
              aria-label="Close image preview"
            >
              <FaTimes />
            </button>

            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-prev"
              onClick={showPrevious}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            <img
              src={galleryImages[selectedIndex].imageUrl}
              alt={galleryImages[selectedIndex].alt}
              className="gallery-lightbox-image"
            />

            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-next"
              onClick={showNext}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

            <div className="gallery-lightbox-caption">
              <strong>{galleryImages[selectedIndex].alt}</strong>
              <span>
                {selectedIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
