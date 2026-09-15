import Hero from "../hero/Hero";
import Promise from "../promise/promise";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Team from "../team/Team";
import ServiceArea from "../serviceArea/ServiceArea";
import Testimonials from "../testimonials/Testimonials";
import CallToAction from "../cta/CallToAction";

export default function Dashboard() {
  return (
    <div>
      <Hero />
      <Promise/>
      <Services/>
      <Portfolio />
      <Team />
      <ServiceArea />
      <Testimonials />
      <CallToAction />
     </div>
  );
}
