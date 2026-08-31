import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ContributionSection,
  ProjectHero,
  ProjectResults,
  ProjectScope,
} from "@/components/project-detail";
import { SiteFooter } from "@/components/site-footer";
import { getProject, projects } from "@/src/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, url: `/projects/${project.slug}`, images: [] },
    twitter: { title: project.title, description: project.summary, images: [] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />
      <ProjectScope project={project} />
      <ContributionSection project={project} />
      <ProjectResults project={project} />
      <SiteFooter />
    </>
  );
}
