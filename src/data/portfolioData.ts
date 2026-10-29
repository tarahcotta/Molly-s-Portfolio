export interface Project {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  organization: string;
  timeframe: string;
  scopeBadge: string;
  externalUrl?: string;
  summary: string;
  narrative: string[];
  keyOutcomes: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface CoreValue {
  id: string;
  title: string;
  tagline: string;
  description: string;
  quote?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface AwardItem {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export const MOLLY_PROFILE = {
  name: "Molly Hames",
  credentials: "PMP",
  title: "Research Portfolio Director & Federal Program Leader",
  tagline: "Building the operational frameworks that carry high-stakes national research from proposal to publication.",
  bio: "Program executive with 15+ years orchestrating complex national laboratory research and federal awards. Specializes in turning high-risk, fragmented science initiatives into structured, accountable portfolios. Known for protecting principal investigator time, restructuring subcontracts to avoid institutional deficits, and scaling pilot projects into sustained multimillion-dollar programs.",
  location: "Lakewood / Golden, CO",
  email: "mrhames325@gmail.com",
  phone: "303-829-4997",
  linkedInUrl: "https://www.linkedin.com/in/mollyrhames",
  linkedInDisplay: "linkedin.com/in/mollyrhames",
  headshotPath: "/assets/aistudio/molly_24b94531.png",
  resumePdfPath: "/assets/aistudio/MollyHamesResume_adb8620d.pdf",
  certifications: [
    { name: "Project Management Professional (PMP)", issuer: "PMI", status: "Active since 2015" },
    { name: "DOE Q Clearance", issuer: "U.S. Department of Energy", status: "Active" },
    { name: "Unlimited Contracting Officer Warrant", issuer: "U.S. Department of Energy", status: "Prior Authorization ($250M+)" }
  ],
  education: [
    {
      degree: "MBA, Operations Management",
      institution: "Regis University",
      location: "Denver, CO",
      year: "2008",
      notes: "Project Management Certificate"
    },
    {
      degree: "BAS, Visual Arts and Computer Science",
      institution: "Regis University",
      location: "Denver, CO",
      year: "2005",
      notes: "Cum Laude, Dean’s List, Student Government · Minors: Business, Mathematics"
    }
  ]
};

export const KEY_METRICS = [
  { value: "$250M+", label: "Federal Awards Managed", detail: "Prior authorization under DOE Unlimited Contracting Officer Warrant" },
  { value: "95%", label: "PI Admin Burden Relieved", detail: "Reduced project administration from 20+ hrs to 1 hr/month per researcher" },
  { value: "$30M+", label: "Follow-On Program Growth", detail: "Catalyzed through successful delivery of LA100 clean energy transition study" },
  { value: "$1.5M", label: "Direct Capital Saved", detail: "Institutional loan avoided through vendor subcontract restructuring" }
];

export const PHILOSOPHY_QUOTE = "Project management exists to clear obstacles from great science, never to become one.";

export const PHILOSOPHY_NARRATIVE = [
  "Research belongs to the scientists doing it. My job is to protect their time, their funding, and their momentum. Over 15 years directing research portfolios and federal programs, I have managed more than $250M in federal awards, unified multi-laboratory energy programs, and eliminated administrative drag across multidisciplinary teams.",
  "Scientists spend decades establishing the experiments that expand our understanding of energy, climate, and materials. These initiatives represent their life's work. I do not manage their science; I manage the friction surrounding it—securing timely subcontract approvals, modeling burn rates before funds stall, and coordinating across federal monitors so researchers can conduct research.",
  "Isolated task lists fail when applied to complex federal programs. I evaluate how funding solicitations, subcontracts, laboratory milestones, and inter-team dependencies interact across an entire division. When a program is distributed or tangled in legacy compliance, I construct modular tracking frameworks that give leadership immediate visibility while freeing project leads from administrative overhead."
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: "people-first",
    title: "People First",
    tagline: "Empowering the individuals doing the work",
    description: "If you take care of the people, they take care of the work. I work to understand what people are trying to accomplish and then actively remove the barriers standing in their way to achieving it."
  },
  {
    id: "visibility",
    title: "Visibility",
    tagline: "Turning information into actionable clarity",
    description: "Turn project performance information into something people can actually use to make decisions—replacing guesswork with clear, reliable dashboards and insights."
  },
  {
    id: "transparency",
    title: "Transparency",
    tagline: "Speaking up early and welcoming risk discussions",
    description: "Speak up! Do not be afraid to raise concerns, and likewise do not judge concerns raised before they have been considered. Risks are not personal attacks on individuals or the plan; they are the essential key to making plans successful."
  },
  {
    id: "oversight",
    title: "Apply the Right Level of Oversight",
    tagline: "Tailored governance without bureaucracy",
    description: "Only go to the level of detail you need to manage the project and get the work done. Create consistency and approach each project as a unique opportunity with different complexities, risks, and needs."
  },
  {
    id: "think-ahead",
    title: "Think Ahead",
    tagline: "Finding patterns and bridging future opportunities",
    description: "Identify patterns to make order out of chaos. I leverage available tools to connect current work with future opportunities, funding solicitations, and high-level organizational goals."
  },
  {
    id: "sustainable",
    title: "Build Something Sustainable",
    tagline: "Long-term frameworks that evolve",
    description: "Create frameworks and processes that help the organization function better over time, and build in future maintenance reviews to ensure they continue to evolve as teams and missions grow."
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "la100-study",
    order: 1,
    title: "LA100 Clean Energy Transition Study",
    subtitle: "10-Team Grid Modernization Analysis & $30M Program Genesis",
    organization: "National Laboratory of the Rockies (NLR)",
    timeframe: "Jul 2019 – Apr 2020",
    scopeBadge: "$15 Million Multi-Technology Study",
    externalUrl: "https://maps.nlr.gov/la100/#home-1",
    summary: "The City of Los Angeles and LADWP required an authoritative, high-profile pathway to 100% renewable electricity. The project demanded continuous orchestration of 10 internal research teams analyzing 16 distinct technologies. By identifying critical subcontract bottlenecks and renegotiating vendor terms mid-cycle, our team eliminated the need for a projected $1.5M laboratory bridge loan (recognized by the Chief Financial Officer). Synchronized deliverable review matrices compressed draft-to-final turnaround by more than 80%, directly generating four follow-on projects and an ongoing program office funded at over $30M.",
    narrative: [
      "The City of Los Angeles and LADWP required an authoritative, high-profile pathway to achieve 100% renewable electricity reliably, equitably, and cost-effectively.",
      "The study demanded continuous orchestration of 10 multidisciplinary teams across power systems, economics, air quality, equity, and grid modeling analyzing 16 distinct clean technologies.",
      "Audited critical subcontract choke points and renegotiated vendor scopes mid-cycle, eliminating the need for a projected $1.5M laboratory bridge loan (recognized by the Chief Financial Officer).",
      "Replaced serialized, bottlenecked draft cycles with a synchronized review matrix, compressing draft-to-final turnaround by more than 80% and establishing a repeatable precedent laboratory-wide."
    ],
    keyOutcomes: [
      "Avoided $1.5M laboratory loan through proactive subcontract renegotiation (recognized by CFO)",
      "Accelerated draft-to-final deliverable review time by >80% via synchronized review matrices",
      "Catalyzed four follow-on projects and an ongoing federal/municipal program office exceeding $30M+",
      "Successfully integrated 10 multidisciplinary research teams and 16 clean energy technologies"
    ],
    metrics: [
      { label: "Study Budget", value: "$15M" },
      { label: "Loan Avoided", value: "$1.5M" },
      { label: "Review Speedup", value: ">80%" },
      { label: "Program Expansion", value: "$30M+" }
    ],
    tags: ["Cross-Center Leadership", "Subcontract Renegotiation", "Grid Modeling", "Risk Management"]
  },
  {
    id: "geothermal-algae-portfolios",
    order: 2,
    title: "Geothermal & Algae Research Portfolios",
    subtitle: "Consolidating Distributed Science Into Cohesive Governance",
    organization: "National Laboratory of the Rockies (NLR) · Biosciences & Energy",
    timeframe: "Oct 2014 – Jul 2019",
    scopeBadge: "$29 Million Combined Portfolios",
    summary: "More than $19M in geothermal research projects was scattered across disparate programs without unified financial tracking. Principal investigators spent up to 20 hours each month troubleshooting accounting codes, burn rates, and vendor milestones instead of publishing research. I built unified monthly financial burn models and staffing projection templates, paired with 30-minute consultative reviews. This dropped administrative burden from 20+ hours to 1 hour per month per researcher (a 95% reduction), while bringing in roughly $5M in additional competitive geothermal research awards. Following these results, laboratory executive leadership tasked me with replicating the framework across the $10M algae portfolio.",
    narrative: [
      "More than $19M in geothermal research projects was scattered across disparate programs without unified financial tracking, leaving PIs overburdened by up to 20+ hours/month of accounting and reporting.",
      "Designed and instituted standardized monthly performance dashboards and transparent financial burn models, translating complex laboratory accounting into actionable decision views.",
      "Replaced multi-day email chains with targeted monthly 30-minute syncs to review staffing projections, burn trajectories, and milestone gates in a shared consultative partnership.",
      "Following validated success in Geothermal, laboratory leadership directed replication across the $10M algae biosciences portfolio, securing roughly $5M in additional competitive funding awards."
    ],
    keyOutcomes: [
      "Slashed Principal Investigator administrative overhead from 20+ hours to 1 hour per month (95% reduction)",
      "Secured roughly $5M in additional competitive geothermal research awards",
      "Unified tracking and governance across $19M geothermal and $10M algae multi-center portfolios",
      "Established standardized financial burn models and staffing projection templates adopted laboratory-wide"
    ],
    metrics: [
      { label: "PI Time Saved", value: "95%" },
      { label: "New Funding", value: "$5M" },
      { label: "Combined Portfolios", value: "$29M" },
      { label: "Admin Effort", value: "1 hr/mo" }
    ],
    tags: ["Portfolio Governance", "Scientist Enablement", "Financial Burn Modeling", "Operational Improvement"]
  },
  {
    id: "proposal-dev-strategic-planning",
    order: 3,
    title: "Proposal Development & Strategic Planning",
    subtitle: "Proactive Solicitation Positioning & Early Career Science Honors",
    organization: "National Laboratory of the Rockies (NLR) · Biosciences Center",
    timeframe: "Oct 2014 – Jul 2019",
    scopeBadge: "25+ Proposals Annually · 2 DOE Early Career Awards",
    summary: "Winning competitive scientific solicitations requires anticipation rather than reactive drafting. I developed an early-pipeline strategy to evaluate federal funding opportunities months before official release, provided turnkey compliance templates, and conducted lab-wide briefing sessions. I also facilitated interdisciplinary ideation workshops where emerging scientists received peer review and pitch coaching. Under this framework, the Biosciences Center achieved two DOE Office of Science Early Career Awards in a single funding cycle and maintained a 100% compliance rate across 25+ annual submissions.",
    narrative: [
      "Winning competitive scientific solicitations requires proactive positioning rather than a last-minute scramble. I instituted an early-pipeline framework to evaluate federal solicitations months before release.",
      "Conducted lab-wide intelligence sessions, demystifying sponsor evaluation criteria and providing turnkey compliance templates to junior and senior researchers alike.",
      "Facilitated interdisciplinary strategic ideation workshops where researchers stress-tested nascent concepts and received peer feedback prior to drafting.",
      "Mentored emerging scientists on narrative clarity, risk mitigation, and budget formulation, culminating in two DOE Office of Science Early Career Awards in a single funding cycle."
    ],
    keyOutcomes: [
      "Biosciences Center secured two DOE Office of Science Early Career Awards in a single funding cycle",
      "Coordinated 25+ scientific proposal submissions annually with zero compliance disqualifications",
      "Contributed to 14% average annual growth in the laboratory's industry partnership portfolio",
      "Established laboratory-wide proposal playbooks, templates, and solicitation intelligence briefings"
    ],
    metrics: [
      { label: "Early Career Awards", value: "2 in 1 Yr" },
      { label: "Annual Submissions", value: "25+" },
      { label: "Industry Growth", value: "+14% / Yr" },
      { label: "Compliance Rate", value: "100%" }
    ],
    tags: ["Strategic Ideation", "Early Career Mentorship", "DOE Office of Science", "Business Development"]
  }
];

export const ADDITIONAL_PROJECTS: Project[] = [
  {
    id: "work-planning-control",
    order: 4,
    title: "Work Planning & Control Program",
    subtitle: "Technical Program Management for Enterprise Safety & Agile Modernization",
    organization: "National Laboratory of the Rockies (NLR) · IT Services",
    timeframe: "Apr 2020 – Mar 2023",
    scopeBadge: "$8 Million · 5 Software Projects",
    summary: "I served as Technical Program Manager for five software development projects totaling $8 million. I established program plans and milestones, coordinated stakeholders, and helped teams navigate changes as they adopted agile practices. The work involved balancing technical decisions, end-user needs, and program-level coordination while communicating with senior leadership, the stakeholder committee, and more than 100 end users.",
    narrative: [
      "Work Planning and Control (WP&C) governs critical safety, hazard mitigation, and operational permissions across laboratory facilities.",
      "As Technical Program Manager across 5 interconnected development streams, guided legacy waterfalled groups into modern, transparent Agile sprints.",
      "Facilitated bi-weekly briefings with senior executive stakeholders, laboratory safety directors, and an active advisory user group representing 100+ lab scientists and technicians.",
      "Synchronized architectural roadmaps with enterprise security, quality assurance, and user experience standards."
    ],
    keyOutcomes: [
      "Successfully delivered across five enterprise software projects totaling $8M on schedule",
      "Successfully transitioned five engineering teams to disciplined agile delivery practices",
      "Coordinated cross-functional consensus across senior leadership, safety committees, and 100+ lab end users",
      "Integrated continuous feedback loops into active sprint backlogs"
    ],
    metrics: [
      { label: "Program Budget", value: "$8M" },
      { label: "Software Streams", value: "5 Projects" },
      { label: "User Community", value: "100+ Users" },
      { label: "Methodology", value: "Agile/Scrum" }
    ],
    tags: ["Technical Program Management", "Agile Transformation", "Safety Governance", "Stakeholder Alignment"]
  },
  {
    id: "federal-funding-risk",
    order: 5,
    title: "Federal Funding & Risk Management",
    subtitle: "Unlimited Warrant Stewardship & Recovery Act Risk Framework",
    organization: "U.S. Department of Energy (DOE) · Golden Field Office",
    timeframe: "Sept 2009 – Aug 2013",
    scopeBadge: "100+ Awards · Awards Exceeding $250M",
    summary: "Earlier in my career at DOE, I held an Unlimited Contracting Officer Warrant and managed more than 100 federal awards, including individual awards exceeding $250 million. I also developed a risk-based approach to address additional workload associated with new requirements for Recovery Act projects. The approach reduced the time required from technical project monitors by more than 50%. These experiences helped shape my perspective on financial stewardship, compliance, risk, and applying the right amount of oversight to the situation.",
    narrative: [
      "Granted an Unlimited Contracting Officer Warrant, delegating legal authority to obligate federal funds for clean energy research and commercial demonstration awards exceeding $250M.",
      "During the American Recovery and Reinvestment Act (ARRA), federal reporting requirements surged exponentially, threatening to paralyze technical monitors.",
      "Architected a risk-tiered monitoring protocol, concentrating detailed audits and site inspections on high-exposure awards while streamlining routine reporting for proven performers.",
      "The methodology reduced monitor hours by over 50% while maintaining flawless compliance during comprehensive Inspector General reviews."
    ],
    keyOutcomes: [
      "Held Unlimited Contracting Officer Warrant managing 100+ awards with individual scopes >$250M",
      "Reduced technical project monitor administrative burden by >50% during Recovery Act rollouts",
      "Honored with DOE Service & Innovation Awards (2010, 2011)",
      "Selected for competitive DOE Headquarters leadership detail to modernize workforce systems"
    ],
    metrics: [
      { label: "Max Award Scope", value: "$250M+" },
      { label: "Monitor Time Saved", value: ">50%" },
      { label: "Awards Managed", value: "100+" },
      { label: "Authority", value: "Unlimited Warrant" }
    ],
    tags: ["Federal Contracting", "Risk-Based Governance", "Financial Stewardship", "Recovery Act (ARRA)"]
  },
  {
    id: "enterprise-systems-process",
    order: 6,
    title: "Enterprise Systems & Process Improvement",
    subtitle: "Oracle EPM Implementation & Automated Requirements Framework",
    organization: "National Laboratory of the Rockies (NLR) · IT Services",
    timeframe: "Mar 2023 – Present",
    scopeBadge: "$12 Million Oracle EPM Implementation",
    summary: "In my current IT role, I've contributed to a $12 million Oracle Enterprise Performance Management implementation and supported analysis for over 50 solution requests. I've developed reusable templates and standard deliverables to make requirements analysis more consistent, and I'm working on an automated workflow to improve the process. This reflects my interest in understanding how organizations work and designing better systems to support them.",
    narrative: [
      "Contributing to a flagship $12M Oracle Enterprise Performance Management (EPM) overhaul, modernizing laboratory-wide financial planning, workforce budgeting, and executive reporting.",
      "Conducted in-depth functional and data analysis for 56 distinct solution requests, bridging business units and technical delivery teams.",
      "Engineered four standardized requirement templates and two standard deliverables, eliminating ambiguity and slashing requirements rework.",
      "Designed an automated intake-to-specification workflow that enhances visibility and tracks requirement traceability across sprints."
    ],
    keyOutcomes: [
      "Contributed to $12M Oracle EPM implementation advancing laboratory forecasting and reporting",
      "Managed business analysis and technical translation for 56 enterprise solution requests",
      "Established 4 reusable analysis templates and 2 standard deliverables adopted across IT Services",
      "Designed automated requirements workflow reducing intake latency and improving traceability"
    ],
    metrics: [
      { label: "Implementation Scope", value: "$12M" },
      { label: "Solutions Analyzed", value: "56 Requests" },
      { label: "Standard Templates", value: "4 Reusable" },
      { label: "Standard Deliverables", value: "2 Enterprise" }
    ],
    tags: ["Oracle EPM", "Business Analysis", "Requirements Engineering", "Process Automation"]
  }
];

export const CAREER_HISTORY: ExperienceItem[] = [
  {
    role: "Senior Data Analyst, Information Technology (IT) Services",
    organization: "National Laboratory of the Rockies (NLR)",
    location: "Golden, CO",
    period: "Mar 2023 – Present",
    highlights: [
      "Contributed to delivery of a $12M Oracle Enterprise Performance Management (EPM) implementation, advancing enterprise planning, reporting, and data integration capabilities.",
      "Managed analysis for 56 solution requests, translating business needs into requirements, specifications, documentation, and visualizations for technical delivery teams.",
      "Established standardized analysis practices through four reusable templates and two standard deliverables; currently designing an automated requirements workflow."
    ]
  },
  {
    role: "Client Liaison & Senior Project Manager, IT Services",
    organization: "National Laboratory of the Rockies (NLR)",
    location: "Golden, CO",
    period: "Apr 2020 – Mar 2023",
    highlights: [
      "Managed the $6M Zero Trust initiative addressing 19 federal cybersecurity actions across five working groups, six projects, 11 major tasks, and one workstream.",
      "Served as Technical Program Manager for five Work Planning and Control software development projects totaling $8M, establishing project management plans and milestones and briefing senior leadership, stakeholder committee, and 100+ end users.",
      "Managed the $4M Software Quality Assurance program, coordinating development and DevOps teams to establish a CI/CD framework that reduced prioritized feature delivery from 12 months to two weeks."
    ]
  },
  {
    role: "Project Manager, Grid Systems",
    organization: "National Laboratory of the Rockies (NLR)",
    location: "Golden, CO",
    period: "Jul 2019 – Apr 2020",
    highlights: [
      "Managed the $15M LA100 renewable energy study, coordinating multidisciplinary teams across the laboratory; project success brought four additional projects and a new program totaling $30M+.",
      "Implemented a project management framework for an international portfolio of eight grid projects in India totaling $3.5M, delivering analytical studies and helping state partners develop independent analytical capabilities.",
      "Renegotiated subcontracts to avoid a $1.5M laboratory loan, earning recognition from the CFO; streamlined deliverable review and submission, reducing draft-to-final submission time by 80%."
    ]
  },
  {
    role: "Business Development & Proposal Manager, Biosciences",
    organization: "National Laboratory of the Rockies (NLR)",
    location: "Golden, CO",
    period: "Oct 2014 – Jul 2019",
    highlights: [
      "Facilitated Biosciences Center strategic planning and coordinated 25+ scientific proposal submissions annually; the Center received two Early Career Awards in one year.",
      "Helped develop a laboratory-wide business development strategy that contributed to 14% average annual growth in the industry partnership portfolio.",
      "Served as Operations Manager for $19M geothermal and $10M algae portfolios, implementing project management frameworks that reduced PI administrative burden from 20+ hours to one hour per month and helped secure $5M in additional geothermal funding."
    ]
  },
  {
    role: "Deployment Director",
    organization: "Lyons Volunteers",
    location: "Lyons, CO",
    period: "Oct 2013 – Feb 2014",
    highlights: [
      "Directed 100+ volunteer deployments, contributing $750K in FEMA-aligned labor recovery after devastating historic floods.",
      "Developed nonprofit business plan and budgets for long-term flood recovery; transitioned organization from emergency response to 501(c)(3) with expanded mission."
    ]
  },
  {
    role: "Contracting Officer / Grants Specialist",
    organization: "U.S. Department of Energy (DOE)",
    location: "Golden, CO",
    period: "Sept 2009 – Aug 2013",
    highlights: [
      "Held Unlimited Contracting Officer Warrant authorizing federal funding actions; managed 100+ awards, including individual awards exceeding $250M.",
      "Selected for DOE HQ detail position to support modernization of workforce and systems.",
      "Delivered risk-based solutions to executives through Leadership Development Program."
    ]
  },
  {
    role: "Project Analyst",
    organization: "Navarro Research & Engineering",
    location: "Golden, CO",
    period: "Apr 2007 – Sept 2009",
    highlights: [
      "Managed 50+ projects (~$19M); supported DOE Biomass and Loan Guarantees programs.",
      "Coordinated peer reviews and assessments of $214M in Federal energy investments."
    ]
  }
];

export const AWARDS: AwardItem[] = [
  { title: "President's Award", organization: "National Laboratory of the Rockies (NLR)", year: "2024 & 2017" },
  { title: "Key Contributor Award", organization: "National Laboratory of the Rockies (NLR)", year: "2022" },
  { title: "Employee of the Month", organization: "National Laboratory of the Rockies (NLR)", year: "2022, 2019, 2018" },
  { title: "Service & Innovation Awards", organization: "U.S. Department of Energy (DOE)", year: "2010, 2011" },
  { title: "CFO Recognition for Subcontract Renegotiation", organization: "NLR Leadership", year: "2020" }
];
