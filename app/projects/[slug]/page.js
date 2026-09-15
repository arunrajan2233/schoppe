import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug, getRelatedProjects } from "../../_data/projects";
import ProjectDetail from "../../_components/projects/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Schopp24 Gebäudemanagement`,
    description: project.description[0],
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug);

  return <ProjectDetail project={project} related={related} />;
}
