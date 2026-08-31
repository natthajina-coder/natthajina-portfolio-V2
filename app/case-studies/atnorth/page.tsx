import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "atNorth Data Center Development",
  description: "Selected USC Marshall MBA project with atNorth in Denmark.",
};

export default function AtNorthCaseStudyPage() {
  return (
    <main className="page-shell atnorth-case-study">
      <Link href="/#case-study" className="back-link">← All case studies</Link>
      <p className="detail-category">Selected MBA Project</p>
      <h1>atNorth — Data Center Development</h1>
      <p className="atnorth-case-study-meta">Denmark · USC Marshall MBA</p>
      <Image
        className="atnorth-case-study-image"
        src="/case-studies/atnorth-site-visit.jpg"
        alt="NJ and the USC Marshall MBA project team at atNorth in Denmark"
        width={1800}
        height={1350}
        priority
      />
      <div className="atnorth-case-study-copy">
        <p>
          Partnered with atNorth to assess data center best practices and emerging technologies across site selection, energy infrastructure, heat reuse, operational monitoring, and digital tools.
        </p>
        <a className="project-reference" href="https://www.linkedin.com/posts/atnorth_last-week-our-den01-site-welcomed-28-mba-activity-7309861554454192128-bejz" target="_blank" rel="noreferrer">
          <span>Project Reference</span>
          <strong>atNorth — USC Marshall Site Visit <span aria-hidden="true">↗</span></strong>
        </a>
      </div>
    </main>
  );
}
