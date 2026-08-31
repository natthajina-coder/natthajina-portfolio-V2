export type Metric = { value: string; label: string };

export type ScopeItem = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  role: string;
  organization: string;
  client: string;
  location: string;
  period: string;
  detailImage?: string;
  referenceUrl?: string;
  summary: string;
  scope: ScopeItem[];
  contributions: string[];
  results: string[];
  metrics: Metric[];
  capabilities: string[];
};

export const careerMetrics: Metric[] = [
  { value: "10+ Years", label: "Project & Program Experience" },
  { value: "23 Sites", label: "Multi-Site Program Portfolio" },
  { value: "1,600 MW", label: "Power Plant Construction" },
  { value: "$15M", label: "Owner-Side Capital Project" },
];

export const projects: Project[] = [
  {
    slug: "coal-fired-power-plants",
    number: "05",
    title: "Coal-Fired Power Plants",
    category: "Asset Performance & Predictive Analytics",
    role: "Technical Program Manager",
    organization: "SCG / REPCO NEX",
    client: "Aboitiz Power Corporation",
    location: "Davao and Cebu, Philippines",
    period: "2023-2024",
    referenceUrl: "https://aboitizpower.com/news/partnerships/aboitizpower-repco-nex-team-up-for-first-smart-power-plants-in-ph",
    summary:
      "Asset Performance Management Program delivery across two coal-fired power plants.",
    scope: [
      { label: "Client", value: "Aboitiz Power Corporation" },
      { label: "Plants", value: "2 coal-fired power plants - Therma South and Therma Visayas" },
      { label: "Combined Capacity", value: "640 MW" },
      { label: "Location", value: "Davao and Cebu, Philippines" },
      { label: "Period", value: "2023-2024" },
      {
        label: "Main Equipment",
        value:
          "Circulating Fluidized Bed (CFB) boilers, steam turbines, generators, boiler feedwater pumps, ID/FD/PA fans, air preheaters, condensers, and cooling-water systems",
      },
    ],
    contributions: [
      "Led the predictive-analytics and anomaly-detection workstream across the two-plant program, working with Aboitiz reliability and plant teams in the Philippines.",
      "Owned technical requirements, data-readiness assessment, predictive-analytics requirements, UAT, deployment readiness, Go-Live coordination, training, and operational handover.",
      "Defined requirements and user workflows for centralized plant monitoring through the Unified Operations Center.",
      "Coordinated a cross-country team spanning Thailand and the Philippines through on-site workshops, remote execution, documented action ownership, and milestone-based site visits.",
      "Led critical on-site Go-Live activities at Therma South, including UAT closure, model validation, user training, issue resolution, and Go/No-Go readiness.",
    ],
    results: [
      "Successfully brought Therma South into production use before the end of NJ's assignment.",
      "Enabled plant teams to use predictive analytics and anomaly detection to support more condition-informed operating and maintenance decisions.",
      "Reduced unnecessary time-based maintenance activities for selected equipment and generated maintenance savings.",
    ],
    metrics: [
      { value: "2", label: "Power Plants" },
      { value: "640 MW", label: "Combined Capacity" },
      { value: "2", label: "Countries Coordinated" },
      { value: "2023-24", label: "Program Period" },
    ],
    capabilities: [
      "Technical Program Management",
      "Predictive Analytics",
      "Data Readiness",
      "UAT",
      "Go-Live",
      "Cross-Country Delivery",
      "Training & Handover",
    ],
  },
  {
    slug: "gas-fired-ccgt-cogeneration",
    number: "04",
    title: "Gas-Fired CCGT & Cogeneration Power Plants",
    category: "Multi-Site Asset Performance Program",
    role: "Technical Program Manager",
    organization: "SCG / REPCO NEX",
    client: "B.Grimm Power Public Company Limited",
    location: "Thailand",
    period: "2019-2023",
    referenceUrl: "https://www.aveva.com/en/perspectives/presentations/2023/b-grimm-power-s-asset-management-strategy-optimization-by-data-driven-approach/",
    summary:
      "End-to-end delivery of a multi-site asset-performance and predictive-analytics program across CCGT and cogeneration power plants.",
    scope: [
      { label: "Client", value: "B.Grimm Power Public Company Limited" },
      { label: "Portfolio", value: "16 sites - 14 CCGT / cogeneration plants and 2 solar sites" },
      { label: "Location", value: "Thailand" },
      { label: "Period", value: "2019-2023" },
      { label: "Main Equipment", value: "Gas turbines, steam turbines, generators, boilers, and major auxiliary systems" },
      {
        label: "Technology",
        value: "AVEVA Predictive Analytics integrated with plant historian and control-system data",
      },
    ],
    contributions: [
      "Led end-to-end program delivery from technical assessment and business requirements through planning, data readiness, model development, UAT, Go-Live, training, and handover.",
      "Owned technical requirements, master schedule, cost controls, resource allocation, risk management, change control, stakeholder management, UAT, deployment readiness, and executive reporting.",
      "Personally developed predictive models during the pilot phase and later led data scientists and reliability engineers responsible for model development and deployment during the scaled rollout.",
      "Established a standardized deployment model covering requirements, readiness gates, schedules, resource plans, acceptance criteria, and Go/No-Go reviews.",
      "Managed multiple plant deployments concurrently, balancing resources and priorities based on asset criticality, data readiness, and plant maintenance schedules.",
      "Led customer governance with Plant Directors, Plant Managers, and SCG leadership, translating schedule, risk, technical performance, deployment readiness, and adoption into management decisions.",
      "Led UAT, plant-user training, knowledge transfer, and operational handover to enable customer teams to operate and further develop the solution independently.",
    ],
    results: [
      "Reduced average site deployment time from approximately 5 months to 3.5 months - about 30% faster.",
      "Reduced change requests by approximately 80% through standardized requirements and deployment processes.",
      "Achieved approximately 80% target-user adoption within 60 days of Go-Live.",
      "Created a repeatable deployment model that supported expansion across a broader multi-country power-generation portfolio.",
    ],
    metrics: [
      { value: "16", label: "Portfolio Sites" },
      { value: "~30%", label: "Faster Deployment" },
      { value: "~80%", label: "Fewer Change Requests" },
      { value: "~80%", label: "60-Day Adoption" },
    ],
    capabilities: [
      "Program Management",
      "Master Scheduling",
      "Resource Planning",
      "Risk & Change Control",
      "AVEVA Predictive Analytics",
      "Executive Governance",
      "UAT & Go-Live",
    ],
  },
  {
    slug: "biomass-cogeneration",
    number: "03",
    title: "Biomass Cogeneration Power Plants",
    category: "Asset Performance & Predictive Analytics",
    role: "Technical Program Manager",
    organization: "SCG / REPCO NEX",
    client: "SCG Packaging (SCGP)",
    location: "Thailand",
    period: "2023",
    summary:
      "Extension of a standardized predictive-analytics delivery model into biomass cogeneration assets.",
    scope: [
      { label: "Client", value: "SCG Packaging (SCGP)" },
      { label: "Plants", value: "2 biomass cogeneration plants" },
      { label: "Combined Capacity", value: "Approximately 100 MW" },
      { label: "Location", value: "Thailand" },
      { label: "Period", value: "2023" },
      {
        label: "Main Equipment",
        value: "Boilers, steam turbines, generators, boiler feedwater pumps, and major auxiliary systems",
      },
    ],
    contributions: [
      "Applied the same standardized predictive-analytics delivery framework used across SCG's wider power-generation portfolio to biomass cogeneration assets.",
      "Coordinated technical assessment, asset prioritization, historian-data readiness, predictive-model development, integration, testing, and deployment activities.",
      "Led cross-functional coordination among plant engineers, reliability specialists, data specialists, and technology resources.",
      "Managed requirements, schedule, deployment readiness, risk and issue resolution, UAT, user training, and knowledge transfer.",
      "Focused predictive-analytics deployment on critical rotating and thermal equipment, including boilers, steam turbines, generators, and boiler feedwater pumps.",
    ],
    results: [
      "Extended the predictive-analytics program beyond gas-fired generation into biomass cogeneration assets.",
      "Enabled plant teams to apply equipment-health monitoring and anomaly detection to critical biomass-power equipment.",
      "Contributed to the broader SCG power-generation program spanning 23 sites, three countries, and more than 3.5 GW of assets.",
    ],
    metrics: [
      { value: "2", label: "Biomass Plants" },
      { value: "~100 MW", label: "Combined Capacity" },
      { value: "23", label: "Broader Portfolio Sites" },
      { value: "3.5+ GW", label: "Broader Portfolio" },
    ],
    capabilities: [
      "Technical Program Management",
      "Biomass Cogeneration",
      "Asset Prioritization",
      "Historian Data",
      "Predictive Analytics",
      "Cross-Functional Leadership",
      "Knowledge Transfer",
    ],
  },
  {
    slug: "petrochemical-terminal-expansion",
    number: "02",
    title: "Petrochemical Terminal Expansion",
    category: "$15M Brownfield Design-Build Expansion",
    role: "Project Manager",
    organization: "SCG",
    client: "Dow joint-venture petrochemical operation / Rayong Terminal",
    location: "Map Ta Phut, Rayong, Thailand",
    period: "2016-2019",
    summary:
      "Design-Build expansion delivered inside an operating petrochemical terminal without a total terminal shutdown.",
    scope: [
      { label: "Client / Project Environment", value: "Dow joint-venture petrochemical operation / Rayong Terminal" },
      { label: "Project Value", value: "Approximately $15M" },
      { label: "Location", value: "Map Ta Phut, Rayong, Thailand" },
      { label: "Period", value: "2016-2019" },
      { label: "Delivery Model", value: "Owner / Developer-side Design-Build" },
      {
        label: "Major Scope",
        value:
          "2 marine loading arms, 2 transfer pumps, 2 storage tanks, new pipe rack, existing substation revamp, associated piping, and terminal infrastructure",
      },
    ],
    contributions: [
      "Served as Owner-side Project Manager with end-to-end responsibility from technical assessment and scope definition through engineering, procurement, construction, commissioning, and operational handover.",
      "Developed project scope, technical requirements, procurement packages, project budget, master schedule, milestones, risk register, and execution strategy.",
      "Led RFQ/RFP development, technical and commercial bid evaluations, bid leveling, vendor negotiations, contract administration, and equipment procurement.",
      "Managed the engineering consultant and Design-Build engineering team, including constructability reviews and interfaces between new facilities and the operating terminal.",
      "Coordinated construction sequencing and system-by-system tie-ins so the expansion could be delivered without a total terminal shutdown.",
      "Managed contractor interfaces, schedule recovery, change orders, claims, project risks, permitting, regulatory requirements, and marine-installation constraints.",
      "Coordinated Mechanical Completion, punch-list closure, testing, commissioning, performance acceptance, documentation, and final operational handover.",
      "Reported scope, schedule, cost, risk, HSE, and key project decisions to management and the project steering committee.",
    ],
    results: [
      "Delivered the approximately $15M project on schedule and on budget with zero accidents.",
      "Avoided approximately $500K in excess project cost through technical-commercial bid evaluation and removal of over-specified scope.",
      "Protected approximately $300K of project budget by evaluating and negotiating a $400K contractor claim down to approximately $100K.",
      "Delivered the brownfield expansion through system-by-system integration without requiring a total terminal shutdown.",
      "Protected a schedule-critical marine loading-arm installation window by coordinating permitting, engineering, contractors, Operations, port activities, vessel access, and tidal constraints.",
    ],
    metrics: [
      { value: "~$15M", label: "Project Value" },
      { value: "~$500K", label: "Cost Avoided" },
      { value: "~$300K", label: "Budget Protected" },
      { value: "Zero", label: "Accidents" },
    ],
    capabilities: [
      "Owner-Side Project Management",
      "Design-Build",
      "Brownfield Construction",
      "RFQ / RFP",
      "Bid Evaluation",
      "Change Orders & Claims",
      "Commissioning",
      "Operational Handover",
    ],
  },
  {
    slug: "nong-saeng-1600mw-ccgt",
    number: "01",
    title: "1,600 MW Combined-Cycle Power Plant",
    category: "Mechanical Construction, Completion & Commissioning",
    role: "Project Engineer",
    organization: "Sino-Thai Engineering & Construction",
    client: "Gulf Development Public Company Limited",
    location: "Saraburi, Thailand",
    period: "2013-2014",
    detailImage: "/projects/Project01-detail.jpeg",
    referenceUrl: "https://www.mhi.com/news/1112131481.html",
    summary:
      "Mechanical installation, completion, and commissioning coordination for two power blocks of a 1,600 MW combined-cycle power plant.",
    scope: [
      { label: "Client", value: "Gulf Development Public Company Limited" },
      { label: "Project", value: "Nong Saeng Combined Cycle Power Plant" },
      { label: "Capacity", value: "1,600 MW - 2 power blocks" },
      { label: "Location", value: "Saraburi, Thailand" },
      { label: "Period", value: "2013-2014" },
      { label: "Main Equipment", value: "4 Mitsubishi M701F gas turbines, 2 steam turbines, and 6 generators" },
    ],
    contributions: [
      "Owned the mechanical gas-turbine, steam-turbine, and generator construction scope across both power blocks from equipment receiving through installation, Mechanical Completion, pre-commissioning, commissioning coordination, and turnover.",
      "Directed five contractor scopes and coordinated up to approximately 40 field personnel alongside Mitsubishi Heavy Industries specialists.",
      "Managed major-equipment installation including setting, alignment, leveling, coupling, grouting, auxiliary systems, piping interfaces, and mechanical assembly.",
      "Coordinated heavy-lift planning and execution, including lifting-plan review, crane capacity, rigging arrangements, pre-lift safety reviews, and equipment placement.",
      "Managed QA/QC inspections, ITP requirements, punch lists, Mechanical Completion packages, contractor progress, and construction-to-commissioning turnover.",
      "Controlled short-term construction schedules in Microsoft Project, monitored progress and critical-path impacts, and developed recovery plans when activities fell behind.",
      "Led commissioning-readiness coordination for major milestones including gas-turbine first fire and steam-turbine rolling.",
      "Coordinated QA/QC, MHI OEM specialists, contractors, commissioning teams, and Owner representatives through system walkdowns and readiness reviews.",
    ],
    results: [
      "Supported successful completion of the 1,600 MW plant to on-time Commercial Operation Date with zero accidents.",
      "Resolved a steam-turbine alignment problem caused by piping-induced load and coordinated piping cut-and-reweld corrective work with MHI and contractors.",
      "Implemented a night-shift recovery plan that recovered the full 3-day delay and restored Mechanical Completion to schedule.",
      "Coordinated closure of approximately 150 punch items across 20 systems, supporting on-schedule GT first-fire and steam-turbine-rolling milestones.",
    ],
    metrics: [
      { value: "1,600 MW", label: "Plant Capacity" },
      { value: "2", label: "Power Blocks" },
      { value: "3 Days", label: "Delay Recovered" },
      { value: "~150", label: "Punch Items Closed" },
    ],
    capabilities: [
      "Power Plant Construction",
      "MHI M701F",
      "Heavy Lift",
      "Mechanical Completion",
      "Schedule Recovery",
      "Pre-Commissioning",
      "Commissioning Coordination",
      "Owner Turnover",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
