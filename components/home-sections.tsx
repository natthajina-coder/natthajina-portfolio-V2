import Image from "next/image";
import { ProjectFeature } from "@/components/project-feature";
import { projects } from "@/src/data/projects";
import { assetUrl } from "@/lib/assets";

export function Hero() {
  return (
    <section id="home" className="home-hero" aria-labelledby="home-hero-title">
      <div className="page-shell home-hero-grid">
        <div className="home-hero-copy">
          <p className="hero-name">Welcome to my portfolio</p>
          <h1 id="home-hero-title">
            I’m <strong>NJ</strong>, a
            <span>Project <em>&amp;</em> Program Manager</span>
          </h1>
          <div className="hero-summary">
            <p>
              I&apos;m a PMP-certified Project and Program Manager with a Mechanical Engineering background and an MBA, bringing 10+ years of experience delivering power generation and industrial capital projects.
            </p>
            <p>
              I&apos;ve led delivery across EPC construction, Design-Build, commissioning, and multi-site power plant programs, with responsibility for scope, schedule, budget, contractors, risk, change control, and handover. Authorized to work in the U.S. without sponsorship.
            </p>
          </div>
        </div>

        <figure className="hero-portrait" aria-label="Portrait of Natthapol Jinavanich">
          <div className="hero-portrait-card" aria-hidden="true" />
          <Image
            className="hero-portrait-image"
            src={assetUrl("/hero-portrait-full.png")}
            alt="Natthapol (NJ) Jinavanich"
            fill
            sizes="(max-width: 640px) 430px, (max-width: 1024px) 560px, 42vw"
            priority
          />
        </figure>

        <ul className="hero-impact-strip" aria-label="Professional profile">
          <li><strong>Project &amp; Program Manager</strong><span>Role</span></li>
          <li><strong>Mechanical Engineer</strong><span>Background</span></li>
          <li><strong>MBA</strong><span>Degree</span></li>
          <li><strong>PMP</strong><span>Certification</span></li>
        </ul>
      </div>
    </section>
  );
}

export function SelectedProjects() {
  return (
    <section id="experience" className="page-shell projects-section section-rule">
      <div className="section-heading-row">
        <h2>Project Experience</h2>
        <p>Five delivery environments across power generation, industrial capital projects and asset program management.</p>
      </div>
      <div className="project-card-grid">
        {[...projects]
          .sort((a, b) => Number(a.number) - Number(b.number))
          .map((project) => <ProjectFeature key={project.slug} project={project} />)}
      </div>
    </section>
  );
}

export function CaseStudy() {
  return (
    <section id="case-study" className="page-shell case-study-section section-rule">
      <p className="case-study-kicker">Case Study</p>
      <div className="case-study-grid">
        <Image
          className="case-study-image"
          src={assetUrl("/case-studies/atnorth-site-visit.jpg")}
          alt="NJ and the USC Marshall MBA project team at atNorth in Denmark"
          width={1800}
          height={1350}
        />
        <div className="case-study-copy">
          <p className="case-study-label">Selected MBA Project</p>
          <h2>atNorth — Data Center Development</h2>
          <p className="case-study-meta">Denmark · USC Marshall MBA</p>
          <p className="case-study-summary">
            Partnered with atNorth to assess data center best practices and emerging technologies across site selection, energy infrastructure, heat reuse, operational monitoring, and digital tools.
          </p>
          <a className="case-study-reference" href="https://www.linkedin.com/posts/atnorth_last-week-our-den01-site-welcomed-28-mba-activity-7309861554454192128-bejz" target="_blank" rel="noreferrer">
            <span>Project Reference</span>
            <strong>atNorth — USC Marshall Site Visit <span aria-hidden="true">↗</span></strong>
          </a>
        </div>
      </div>
    </section>
  );
}

const capabilityGroups = [
  {
    title: "Project & Program Delivery",
    description: "Own scope, schedule, budget, risk, and execution from planning through handover.",
  },
  {
    title: "Power & Infrastructure",
    description: "Deliver complex power-generation and industrial projects across engineering, construction, and commissioning.",
  },
  {
    title: "Commercial & Portfolio Management",
    description: "Manage budgets, procurement, contracts, change, business cases, and portfolio governance.",
  },
  {
    title: "Cross-Functional Leadership",
    description: "Align engineering, operations, vendors, customers, and leadership to drive decisions and delivery.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="page-shell capabilities-section section-rule">
      <div className="section-heading-row">
        <h2>Capabilities</h2>
        <p>How I lead and deliver complex projects.</p>
      </div>
      <div className="capability-grid">
        {capabilityGroups.map((group, index) => (
          <article key={group.title}>
            <p className="capability-number">0{index + 1}</p>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="page-shell education-section section-rule">
      <div className="section-heading-row">
        <h2>Education</h2>
        <p>Engineering foundation strengthened by business and project leadership.</p>
      </div>
      <div className="education-list">
        <article>
          <div className="education-year">2025</div>
          <div>
            <p className="education-school">University of Southern California</p>
            <h3>Master of Business Administration (STEM)</h3>
            <p>Marshall School of Business · Los Angeles, California</p>
          </div>
        </article>
        <article>
          <div className="education-year">2023</div>
          <div>
            <p className="education-school">Project Management Institute</p>
            <h3>Project Management Professional</h3>
            <p>PMP Certification</p>
          </div>
        </article>
        <article>
          <div className="education-year">2013</div>
          <div>
            <p className="education-school">Kasetsart University</p>
            <h3>Bachelor of Engineering</h3>
            <p>Mechanical Engineering · Bangkok, Thailand</p>
          </div>
        </article>
      </div>
    </section>
  );
}
