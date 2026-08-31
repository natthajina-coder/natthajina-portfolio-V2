"use client"

import Image from "next/image"
import type { CSSProperties, ComponentType } from "react"
import { useEffect, useState } from "react"
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  UserRound,
} from "lucide-react"

import ExperienceAccordion from "./experience-accordion"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

type SectionId = "about" | "experience" | "case-study" | "capabilities" | "education" | "contact"

type NavItem = {
  id: SectionId
  label: string
  icon: ComponentType<{ size?: number; strokeWidth?: number }>
}

const navigation: NavItem[] = [
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "case-study", label: "Case Study", icon: ChartNoAxesCombined },
  { id: "capabilities", label: "Capabilities", icon: Layers3 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
]

const metrics = [
  ["10+", "years of industrial experience"],
  ["23", "power plants transformed"],
  ["4", "petrochemical plants transformed"],
  ["$10M", "multi-site APM program"],
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <div className="heading-rule" aria-hidden="true" />
    </header>
  )
}

function AboutPanel() {
  return (
    <section aria-labelledby="about-title">
      <div className="section-heading">
        <span>ABOUT ME</span>
        <h2 id="about-title">Engineering depth. Business perspective. Delivery discipline.</h2>
        <div className="heading-rule" aria-hidden="true" />
      </div>

      <div className="about-grid">
        <p className="about-lede">
          I help industrial organizations improve equipment reliability, modernize maintenance,
          and scale data-driven solutions from pilot to enterprise deployment—connecting
          engineering, operations, technology, and business teams to deliver measurable
          operational value.
        </p>
        <p className="about-copy">
          I combine mechanical engineering, plant maintenance, reliability, and digital program
          leadership to improve asset performance and scale predictive-analytics solutions across
          complex industrial environments.
        </p>
      </div>

      <div className="metric-grid" aria-label="Career highlights">
        {metrics.map(([value, label]) => (
          <article className="metric-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function EducationPanel() {
  return (
    <section aria-labelledby="education-title">
      <div id="education-title">
        <SectionHeading eyebrow="EDUCATION & CREDENTIALS" title="Engineering foundation. Business lens." />
      </div>
      <div className="education-list">
        <article className="education-card featured">
          <div className="education-year">2025</div>
          <div>
            <h3>Master of Business Administration <em>(STEM)</em></h3>
            <p>University of Southern California · Marshall School of Business</p>
            <span>Los Angeles, California</span>
          </div>
        </article>
        <article className="education-card">
          <div className="education-year">2013</div>
          <div>
            <h3>Bachelor of Engineering</h3>
            <p>Mechanical Engineering · Kasetsart University</p>
            <span>Bangkok, Thailand</span>
          </div>
        </article>
        <article className="education-card">
          <div className="education-year">2023</div>
          <div>
            <h3>Project Management Professional</h3>
            <p>PMP Certification</p>
            <span>Project Management Institute</span>
          </div>
        </article>
      </div>
      <RecognitionPanel />
    </section>
  )
}

function RecognitionPanel() {
  return (
    <section className="recognition-subsection" aria-labelledby="recognition-title">
      <div className="subsection-heading" id="recognition-title">
        <span>SELECTED RECOGNITION</span>
        <h3>Cleantech strategy with real-world impact.</h3>
      </div>
      <div className="recognition-feature">
        <figure>
          <Image
            src="/recognition/rice-cleantech-competition.jpg"
            alt="USC Marshall team at the 2024 Rice Cleantech Innovation Competition"
            fill
            sizes="(max-width: 760px) 100vw, 48vw"
          />
        </figure>
        <div className="recognition-copy">
          <div className="recognition-topline">
            <span className="rank-badge">TOP<br />5</span>
            <span>RICE BUSINESS · HOUSTON · 2024</span>
          </div>
          <h3>Rice Cleantech Innovation Competition</h3>
          <p className="recognition-lede">
            Placed fifth among 34 business-school teams as part of USC Marshall’s first team
            to compete at the annual Rice Cleantech Innovation Competition.
          </p>
          <p>
            The team proposed a Vehicle-to-Grid framework for California, combining
            grid-stability needs, EV-owner incentives, infrastructure economics, and a
            revenue-sharing business model.
          </p>
          <a
            className="article-link"
            href="https://www.marshall.usc.edu/posts/marshall-team-places-at-rice-cleantech-innovation-competition"
            target="_blank"
            rel="noreferrer"
          >
            Read the USC Marshall article <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactPanel() {
  return (
    <section className="contact-panel" aria-labelledby="contact-title">
      <div id="contact-title">
        <SectionHeading eyebrow="CONTACT" title="Let’s connect." />
      </div>
      <p>
        I’m always open to meaningful conversations and opportunities where I can contribute,
        learn, and help teams deliver complex work.
      </p>
      <div className="contact-actions">
        <a href="mailto:natthajina@gmail.com">
          <Mail size={19} />
          <span><small>EMAIL</small>natthajina@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/natthapol-jinavanich/" target="_blank" rel="noreferrer">
          <b className="linkedin-mark" aria-hidden="true">in</b>
          <span><small>CONNECT</small>LinkedIn profile</span>
        </a>
        <a href="/resume/Natthapol_Jinavanich_Resume.docx" download>
          <Download size={19} />
          <span><small>DOCUMENT</small>Download resume</span>
        </a>
      </div>
    </section>
  )
}

function CaseStudyPanel() {
  return (
    <section className="case-study-panel" aria-labelledby="case-study-title">
      <div id="case-study-title">
        <SectionHeading eyebrow="CASE STUDY" title="Predictive Maintenance & APM Transformation" />
      </div>
      <div className="case-study-meta">B.Grimm Power · Power Generation · Thailand</div>
      <p className="case-study-intro">
        Scaling predictive analytics from pilot to enterprise deployment across a multi-site power
        generation portfolio.
      </p>
      <div className="case-study-narrative">
        <article>
          <span>CHALLENGE</span>
          <p>Improve equipment reliability and move maintenance decision-making toward a more data-driven approach while maintaining plant reliability and performance.</p>
        </article>
        <article>
          <span>SOLUTION</span>
          <p>Deploy AVEVA Predictive Analytics to support early anomaly detection, condition monitoring, and data-driven maintenance decision-making.</p>
        </article>
        <article className="case-study-led">
          <span>WHAT I LED</span>
          <p>Led the predictive-analytics workstream from business case development and technical assessment through IT integration, UAT, deployment, training, go-live, and post-launch support—coordinating plant engineering, reliability, IT/OT, technology partners, and senior plant stakeholders.</p>
        </article>
      </div>

      <div className="case-study-impact" aria-label="Case study impact">
        <div>
          <h3>MY PROGRAM IMPACT</h3>
          <dl className="impact-list">
            <div><dt>23 POWER PLANTS</dt><dd>Program scale across three countries</dd></div>
            <div><dt>~5 → 3.5 MONTHS</dt><dd>Average site delivery cycle</dd></div>
            <div><dt>UP TO 2 MONTHS</dt><dd>Early anomaly detection demonstrated</dd></div>
            <div><dt>80%</dt><dd>Target-user adoption within 60 days</dd></div>
          </dl>
        </div>
        <div>
          <h3>PUBLISHED BUSINESS IMPACT</h3>
          <dl className="impact-list published">
            <div><dt>50%</dt><dd>Shorter outage duration</dd></div>
            <div><dt>&gt;$1M</dt><dd>Maintenance cost benefit</dd></div>
          </dl>
        </div>
      </div>

      <figure className="case-study-visual">
        <Image
          src="/case-study/bgrimm-aveva-case-study-slide.png"
          alt="Published B.Grimm Power and AVEVA case-study slide showing predictive model results before and after an intervention"
          width={1276}
          height={714}
          sizes="(max-width: 760px) 100vw, 780px"
        />
        <figcaption>Published project case study — B.Grimm Power / AVEVA, 2023.</figcaption>
      </figure>
      <a className="case-study-download" href="/case-study/bgrimm-aveva-case-study-slide.pdf" download>
        Download case study slide <ExternalLink size={14} />
      </a>
    </section>
  )
}

const capabilityGroups: Array<[string, string[]]> = [
  ["RELIABILITY & MAINTENANCE", ["RCA / RCFA", "FMEA", "Asset Criticality", "Preventive & Predictive Maintenance"]],
  ["ASSET PERFORMANCE MANAGEMENT", ["AVEVA Predictive Analytics", "Condition Monitoring", "Anomaly Detection", "APM"]],
  ["DIGITAL TRANSFORMATION", ["IT/OT Integration", "Digital Twin", "UAT", "Deployment", "Adoption"]],
  ["PROGRAM & BUSINESS LEADERSHIP", ["Business Case", "Schedule", "Budget", "Risk", "Governance", "Executive Stakeholders"]],
]

function CapabilitiesPanel() {
  return (
    <section aria-labelledby="capabilities-title">
      <div id="capabilities-title">
        <SectionHeading eyebrow="CAPABILITIES" title="Reliability expertise, scaled through program leadership." />
      </div>
      <div className="capability-list">
        {capabilityGroups.map(([title, items]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{(items as string[]).join(" · ")}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContentPanel({ active }: { active: SectionId }) {
  if (active === "experience") {
    return (
      <section aria-labelledby="experience-title">
        <div className="section-heading">
          <span>EXPERIENCE</span>
          <h2 id="experience-title">Engineering, technology, and business outcomes.</h2>
          <div className="heading-rule" aria-hidden="true" />
        </div>
        <ExperienceAccordion />
      </section>
    )
  }
  if (active === "education") return <EducationPanel />
  if (active === "case-study") return <CaseStudyPanel />
  if (active === "capabilities") return <CapabilitiesPanel />
  if (active === "contact") return <ContactPanel />
  return <AboutPanel />
}

export default function PortfolioDemo() {
  const [active, setActive] = useState<SectionId>("about")

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1) as SectionId
      if (navigation.some((item) => item.id === hash)) setActive(hash)
    }
    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    return () => window.removeEventListener("hashchange", syncFromHash)
  }, [])

  const selectSection = (id: SectionId) => {
    setActive(id)
    window.history.replaceState(null, "", `#${id}`)
    if (window.innerWidth < 900) {
      document.getElementById("portfolio-content")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <main className="portfolio-page">
      <section className="hero-cover" aria-label="NJ portfolio introduction">
        <Image
          className="cover-image"
          src="/banner-industrial-blue-hour.png"
          alt="Industrial plant at blue hour"
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="profile-card" aria-label="Profile summary">
        <div className="profile-photo-shell">
          <Image
            src="/profile/natthapol-jinavanich.jpeg"
            alt="Natthapol NJ Jinavanich professional portrait"
            fill
            priority
            sizes="190px"
          />
        </div>
        <div className="profile-intro">
          <p>WELCOME TO MY PORTFOLIO</p>
          <h1>Natthapol <span>(NJ)</span> Jinavanich</h1>
          <strong>Reliability &amp; Maintenance Digital Transformation</strong>
        </div>
        <dl className="profile-facts">
          <div>
            <dt>EMAIL</dt>
            <dd><a href="mailto:natthajina@gmail.com">natthajina@gmail.com</a></dd>
          </div>
          <div>
            <dt>LOCATION</dt>
            <dd><MapPin size={15} /> Los Angeles, California</dd>
          </div>
          <div>
            <dt>CREDENTIAL</dt>
            <dd>PMP Certified</dd>
          </div>
          <div>
            <dt>EDUCATION</dt>
            <dd>Mechanical Engineering · MBA</dd>
          </div>
        </dl>
      </section>

      <SidebarProvider
        className="portfolio-workspace"
        style={{ "--sidebar-width": "164px" } as CSSProperties}
      >
        <Sidebar collapsible="none" className="portfolio-sidebar" aria-label="Portfolio sections">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigation.map((item) => {
                    const Icon = item.icon
                    return (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          className="portfolio-nav-button"
                          isActive={active === item.id}
                          aria-pressed={active === item.id}
                          onClick={() => selectSection(item.id)}
                        >
                          <Icon size={19} strokeWidth={1.8} />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <section
          className="content-card"
          id="portfolio-content"
          role="tabpanel"
          aria-label={`${navigation.find((item) => item.id === active)?.label} section`}
        >
          <div className="content-enter" key={active}>
            <ContentPanel active={active} />
          </div>
        </section>
      </SidebarProvider>

      <footer className="site-footer">
        <span>Natthapol “NJ” Jinavanich</span>
        <span>Reliability &amp; Maintenance Digital Transformation · Mechanical Engineer · MBA · PMP</span>
      </footer>
    </main>
  )
}
