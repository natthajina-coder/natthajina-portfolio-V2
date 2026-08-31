import Link from "next/link";
import Image from "next/image";
import { MetricGrid } from "@/components/metric-grid";
import type { Project } from "@/src/data/projects";
import { assetUrl } from "@/lib/assets";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="page-shell detail-hero">
      <Link href="/#experience" className="back-link">← All project experience</Link>
      <div className="detail-title-grid">
        <div>
          <p className="detail-category">Project {project.number} · {project.category}</p>
          <h1>{project.title}</h1>
        </div>
        <div className="detail-side-panel">
          <dl className="project-identity">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Company</dt><dd>{project.organization}</dd></div>
            <div><dt>Location</dt><dd>{project.location}</dd></div>
            <div><dt>Period</dt><dd>{project.period}</dd></div>
          </dl>
          {project.referenceUrl && (
            <a className="project-reference" href={project.referenceUrl} target="_blank" rel="noreferrer">
              <span>Project Reference</span>
              <strong>Open reference <span aria-hidden="true">↗</span></strong>
            </a>
          )}
        </div>
      </div>
      {project.detailImage && (
        <figure className="detail-project-photo">
          <Image
            src={assetUrl(project.detailImage)}
            alt={`NJ on site at the ${project.title} project`}
            width={1536}
            height={2048}
            priority
          />
        </figure>
      )}
      <MetricGrid metrics={project.metrics} compact />
    </section>
  );
}

export function ProjectScope({ project }: { project: Project }) {
  return (
    <section className="page-shell detail-section section-rule scope-section">
      <div className="section-lead">
        <p className="section-kicker">01 · Scope</p>
        <h2>Project context and delivery environment.</h2>
        <p>{project.summary}</p>
      </div>
      <dl className="scope-list">
        {project.scope.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function ContributionSection({ project }: { project: Project }) {
  return (
    <section className="contribution-band">
      <div className="page-shell contribution-inner">
        <div className="contribution-intro">
          <p className="section-kicker">02 · Personal Contribution</p>
          <h2>What NJ personally owned and contributed.</h2>
          <p>These statements describe NJ&apos;s direct role within the wider project organization.</p>
        </div>
        <ol className="contribution-list">
          {project.contributions.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProjectResults({ project }: { project: Project }) {
  return (
    <section className="page-shell result-section section-rule">
      <div>
        <p className="section-kicker">03 · Outcome</p>
        <h2>Results delivered.</h2>
      </div>
      <div>
        <ul className="result-list">
          {project.results.map((result) => <li key={result}>{result}</li>)}
        </ul>
        <div className="capability-tags">
          {project.capabilities.map((capability) => <span key={capability}>{capability}</span>)}
        </div>
      </div>
    </section>
  );
}
