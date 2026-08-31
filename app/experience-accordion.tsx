"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Resource = {
  source: string
  type: string
  date: string
  title: string
  description: string
  href: string
}

type Role = {
  id: string
  company: string
  title: string
  dates: string
  location: string
  summary: string
  tags: string[]
  bullets: string[]
  image: {
    src: string
    alt: string
    caption: string
    orientation?: "portrait" | "landscape"
    position?: string
  }
  resources?: Resource[]
}

const roles: Role[] = [
  {
    id: "01",
    company: "SCG · Petrochemical, Industrial & Power Businesses",
    title: "Technical Program Manager — Industrial Solution for Power Plant",
    dates: "2019 — 2024",
    location: "Thailand / 3 countries",
    summary:
      "Led end-to-end delivery of the AVEVA Predictive Analytics workstream within a $10M APM program across 23 client power plants, directing a 10-member cross-functional team with AVEVA as technology partner.",
    tags: ["APM", "Predictive Analytics", "PI System", "UAT", "Go-Live", "Client Governance"],
    bullets: [
      "Built a client-specific predictive-analytics business case using historical equipment-failure data; demonstrated up to two months of early anomaly detection and helped turn a one-plant pilot into company-wide expansion.",
      "Standardized requirements, schedules, and PI System data-readiness gates across up to four concurrent site deployments, cutting average site delivery from ~5 months to 3.5 months.",
      "Mentored plant engineers to independently build and sustain site-specific predictive models while preserving rollout schedule.",
      "Led Go/No-Go governance with Plant Directors, Plant Managers, and corporate leaders; reached 80% active use among target users within 60 days.",
    ],
    image: {
      src: "/experience/technical-program-manager.png",
      alt: "Technical Program Manager project team in an industrial control-room environment",
      caption: "Technical Program Manager · Cross-functional digital-transformation delivery team",
      orientation: "landscape",
    },
    resources: [
      {
        source: "AVEVA",
        type: "Presentation",
        date: "2023",
        title: "B.Grimm Power's Asset Management Strategy Optimization by Data-Driven Approach",
        description:
          "AVEVA World session on using predictive analytics and historian data to support asset-strategy decisions, early anomaly detection, and long-term plant self-sufficiency.",
        href: "https://www.aveva.com/en/perspectives/presentations/2023/b-grimm-power-s-asset-management-strategy-optimization-by-data-driven-approach/",
      },
      {
        source: "AboitizPower",
        type: "Project article",
        date: "May 31, 2024",
        title: "AboitizPower, REPCO NEX team up for first smart power plants in PH",
        description:
          "Project Arkanghel partnership to develop digital twins for two AboitizPower thermal plants as pioneer sites for broader smart-power-plant deployment.",
        href: "https://aboitizpower.com/news/partnerships/aboitizpower-repco-nex-team-up-for-first-smart-power-plants-in-ph",
      },
    ],
  },
  {
    id: "02",
    company: "SCG · Petrochemical Plant",
    title: "Reliability Data Scientist",
    dates: "2016 — 2019",
    location: "Thailand",
    summary:
      "Turned machinery expertise into scalable predictive equipment-health analytics, moving from an in-house anomaly-detection proof of concept to AVEVA Predictive Analytics across four petrochemical plants.",
    tags: ["AAKR", "Machine Learning", "Digital Twin", "DCS", "IoT", "FMEA"],
    bullets: [
      "Built and validated an in-house AAKR-based machine-learning anomaly-detection proof of concept, then selected AVEVA to scale across Olefins, HDPE, LDPE, and PP plants.",
      "Redesigned the day-to-day predictive-maintenance workflow with Operations, Maintenance, and Reliability, achieving zero unplanned downtime across monitored assets and approximately $1M in cost savings.",
      "Designed digital-twin architecture combining DCS and IoT real-time data with AspenTech IP.21, AVEVA PI System, and Yokogawa Exaquantum.",
      "Used criticality analysis, RCM data, and new FMEAs to close coverage gaps across 40 critical failure modes.",
    ],
    image: {
      src: "/experience/reliability-data-scientist.jpg",
      alt: "Reliability Data Scientist with project collaborators during a technology-partner visit",
      caption: "Reliability Data Scientist · Industrial analytics and technology collaboration",
      orientation: "landscape",
    },
  },
  {
    id: "03",
    company: "SCG · Petrochemical Plant",
    title: "Maintenance Engineer",
    dates: "2014 — 2015",
    location: "Thailand",
    summary:
      "Owned mechanical-maintenance strategy, SAP PM, budgeting, planning, and execution in a high-hazard petrochemical operating environment.",
    tags: ["Turnaround", "SAP PM", "Mechanical", "Planning", "Safety"],
    bullets: [
      "Delivered a $5M, 21-day turnaround on schedule with zero accidents.",
      "Extended major-equipment maintenance intervals from three to five years, reducing lifecycle costs by approximately $200K.",
    ],
    image: {
      src: "/experience/maintenance-engineer.jpg",
      alt: "Maintenance Engineer with colleagues at an industrial plant site",
      caption: "Maintenance Engineer · Petrochemical plant field work",
      orientation: "landscape",
    },
  },
  {
    id: "04",
    company: "Sino-Thai Engineering & Construction · Power & Infrastructure EPC",
    title: "Project Engineer — Combined Cycle Power Plant Construction",
    dates: "2013",
    location: "Thailand",
    summary:
      "Led field delivery for major rotating equipment on a 1,600 MW combined-cycle power project from installation through mechanical completion, commissioning coordination, and turnover.",
    tags: ["1,600 MW CCGT", "MHI M701F", "Commissioning", "Mechanical Completion", "EPC"],
    bullets: [
      "Directed five contractors and up to 40 personnel alongside MHI specialists.",
      "Delivered 4 Mitsubishi M701F gas turbines, 2 steam turbines, and 6 generators through turnover.",
      "Achieved on-time commercial operation with zero accidents.",
    ],
    image: {
      src: "/experience/project-engineer.jpg",
      alt: "Project Engineer at a combined-cycle power plant construction site",
      caption: "Project Engineer · Nong Saeng combined-cycle power plant construction site",
      orientation: "portrait",
      position: "center 38%",
    },
    resources: [
      {
        source: "Mitsubishi Heavy Industries",
        type: "Official project release",
        date: "Dec 13, 2011",
        title: "MHI Receives Full-turnkey Order for 1,600MW GTCC Power Plant",
        description:
          "Official MHI release for the Nong Saeng project: two 800 MW trains with four M701F gas turbines, two steam turbines and six generators; Sino-Thai is named for site civil construction and installation.",
        href: "https://www.mhi.com/news/1112131481.html",
      },
    ],
  },
]

function ResourceCards({ resources }: { resources: Resource[] }) {
  return (
    <div className="resource-section" aria-label="Project references">
      <div className="resource-heading">
        <strong>PROJECT REFERENCES</strong>
        <span>External sources that provide additional project context.</span>
      </div>
      <div className="resource-grid">
        {resources.map((resource) => (
          <a href={resource.href} target="_blank" rel="noreferrer" key={resource.href}>
            <div className="resource-meta">
              <span>{resource.source}</span>
              <span>{resource.type} · {resource.date}</span>
            </div>
            <h4>{resource.title}</h4>
            <p>{resource.description}</p>
            <b>Open reference <ExternalLink size={13} /></b>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function ExperienceAccordion() {
  return (
    <Accordion className="experience-list" type="single" collapsible defaultValue="01">
      {roles.map((role) => (
        <AccordionItem className="experience-item" value={role.id} key={role.id}>
          <AccordionTrigger className="experience-trigger">
            <span className="experience-index">{role.id}</span>
            <span className="experience-title">
              <small>{role.company}</small>
              <strong>{role.title}</strong>
            </span>
            <span className="experience-meta">
              <small>{role.dates}</small>
              <small>{role.location}</small>
            </span>
          </AccordionTrigger>
          <AccordionContent className="experience-content">
            <p className="role-summary">{role.summary}</p>
            <div className="tag-row">
              {role.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="role-grid">
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className="role-bullet" aria-hidden="true">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <figure className={role.image.orientation === "portrait" ? "portrait" : "landscape"}>
                <div>
                  <Image
                    src={role.image.src}
                    alt={role.image.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 42vw"
                    style={{ objectPosition: role.image.position ?? "center" }}
                  />
                </div>
                <figcaption>{role.image.caption}</figcaption>
              </figure>
            </div>
            {role.resources?.length ? <ResourceCards resources={role.resources} /> : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
