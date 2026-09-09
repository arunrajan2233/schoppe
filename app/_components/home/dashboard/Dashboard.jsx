import Hero from "../hero/Hero";
import Promise from "../promise/promise";
import Services from "../services/Services";
import ServicesCarousel from "../services/ServicesCarousel";

export default function Dashboard() {
  return (
    <div>
      <Hero />
      <Promise/>
      <Services/>
      <ServicesCarousel/>
     </div>
  );
}
