import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/src/data/projects";

export function ProjectFeature({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card-link" aria-label={`View ${project.title}`}>
      <Card className="project-card">
        <div className="project-card-media" aria-hidden="true">
          <Image
            src={`/projects/Project${project.number}.jpg`}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="project-card-header">
          <div className="project-index-row">
            <span className="project-number">Project {project.number}</span>
          </div>
          <CardTitle className="project-card-title">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="project-card-content">
          <p>{project.summary}</p>
          <dl className="project-card-meta">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
          </dl>
        </CardContent>
        <CardFooter className="project-card-footer">
          <span>View project</span><span aria-hidden="true">↗</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
