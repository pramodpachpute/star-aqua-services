import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ServiceAreas from "./components/ServiceAreas";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import RORepairService from "./pages/RORepairService";
import WaterPurifierRepair from "./pages/WaterPurifierRepair";
import ServiceSEOPage from "./pages/ServiceSEOPage";

import "./App.css";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <ServiceAreas />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* RO Repair */}
        <Route
          path="/ro-repair-service"
          element={<RORepairService />}
        />

        {/* Water Purifier Repair */}
        <Route
          path="/water-purifier-repair"
          element={<WaterPurifierRepair />}
        />

        {/* RO Filter Replacement */}
        <Route
          path="/ro-filter-replacement"
          element={
            <ServiceSEOPage
              title="RO Filter Replacement in Pune & PCMC | Star Aqua Services"
              metaDescription="RO filter replacement service in Pune and Pimpri-Chinchwad. Professional water purifier filter change and maintenance for domestic and commercial RO systems."
              canonicalPath="/ro-filter-replacement"
              label="RO Filter Replacement"
              heading="RO Filter Replacement Service in Pune & Pimpri-Chinchwad"
              intro="Professional RO filter replacement and water purifier filter change service for homes, offices and commercial systems."
              bookingText="Book Filter Replacement"
              serviceMatch="Filter"
              problems={[
                {
                  icon: "🔄",
                  title: "Filter Replacement",
                  description:
                    "Replacement of old or clogged water purifier filters.",
                },
                {
                  icon: "💧",
                  title: "Low Water Flow",
                  description:
                    "Inspection of filters when purifier water output becomes slow.",
                },
                {
                  icon: "🧪",
                  title: "Water Quality",
                  description:
                    "Filter inspection when taste or purification quality changes.",
                },
              ]}
            />
          }
        />

        {/* RO Installation */}
        <Route
          path="/ro-installation"
          element={
            <ServiceSEOPage
              title="RO Installation Service in Pune & PCMC | Star Aqua Services"
              metaDescription="Professional RO installation service in Pune and Pimpri-Chinchwad for domestic and commercial water purifier systems."
              canonicalPath="/ro-installation"
              label="RO Installation"
              heading="Professional RO Installation in Pune & Pimpri-Chinchwad"
              intro="Get professional doorstep RO and water purifier installation for homes, offices and commercial locations."
              bookingText="Book RO Installation"
              serviceMatch="Installation"
              problems={[
                {
                  icon: "🔧",
                  title: "New RO Installation",
                  description:
                    "Professional setup of new RO water purifier systems.",
                },
                {
                  icon: "🏠",
                  title: "Home Installation",
                  description:
                    "Water purifier installation for residential properties.",
                },
                {
                  icon: "🏢",
                  title: "Commercial Installation",
                  description:
                    "Installation support for offices and commercial locations.",
                },
              ]}
            />
          }
        />

        {/* RO Maintenance */}
        <Route
          path="/ro-maintenance-service"
          element={
            <ServiceSEOPage
              title="RO Maintenance Service in Pune & PCMC | Star Aqua Services"
              metaDescription="RO maintenance and water purifier servicing in Pune and Pimpri-Chinchwad. Routine inspection, cleaning and maintenance for domestic and commercial RO systems."
              canonicalPath="/ro-maintenance-service"
              label="RO Maintenance Service"
              heading="RO Maintenance Service in Pune & Pimpri-Chinchwad"
              intro="Routine RO maintenance helps keep your water purifier working efficiently and supports consistent purification performance."
              bookingText="Book RO Maintenance"
              serviceMatch="AMC"
              problems={[
                {
                  icon: "🛠️",
                  title: "Routine Maintenance",
                  description:
                    "Regular inspection and servicing of your RO purifier.",
                },
                {
                  icon: "🧹",
                  title: "Purifier Cleaning",
                  description:
                    "Cleaning and inspection of important purifier components.",
                },
                {
                  icon: "⚙️",
                  title: "System Inspection",
                  description:
                    "Check filters, connections, pump and purifier operation.",
                },
              ]}
            />
          }
        />

        {/* Commercial RO Service */}
        <Route
          path="/commercial-ro-service"
          element={
            <ServiceSEOPage
              title="Commercial RO Service in Pune & PCMC | Star Aqua Services"
              metaDescription="Commercial RO service in Pune and Pimpri-Chinchwad for offices, businesses and commercial water purification systems. Repair, maintenance and installation support."
              canonicalPath="/commercial-ro-service"
              label="Commercial RO Service"
              heading="Commercial RO Service in Pune & Pimpri-Chinchwad"
              intro="Professional commercial RO repair, maintenance and water purification service for offices, businesses and commercial locations."
              bookingText="Book Commercial RO Service"
              serviceMatch="Other"
              problems={[
                {
                  icon: "🏢",
                  title: "Commercial RO Service",
                  description:
                    "Service support for commercial water purification systems.",
                },
                {
                  icon: "⚙️",
                  title: "RO Maintenance",
                  description:
                    "Inspection and maintenance of commercial RO equipment.",
                },
                {
                  icon: "🔧",
                  title: "RO Repair",
                  description:
                    "Diagnosis and repair of common commercial RO problems.",
                },
              ]}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;