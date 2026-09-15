import { notFound } from "next/navigation";
import { JOBS, getJobBySlug, getRelatedJobs } from "../../_data/jobs";
import JobDetail from "../../_components/jobs/JobDetail";

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} | Schopp24 Gebäudemanagement`,
    description: job.intro,
  };
}

export default async function JobPage({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const related = getRelatedJobs(slug);

  return <JobDetail job={job} related={related} />;
}
