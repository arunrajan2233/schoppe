import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug, getRelatedServices } from "../../_data/services";
import ServiceDetail from "../../_components/services/ServiceDetail";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Schopp24 Gebäudemanagement`,
    description: service.intro,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);

  return <ServiceDetail service={service} related={related} />;
}
