export default function JamesPortfolioPreview() {
  const experiences = [
    {
      title: "Mechanical Design Engineer",
      company: "Ohmplus Technology Inc.",
      period: "June 2024 – Present",
      bullets: [
        "Designed RF testing fixtures and precision motion mechanisms to improve test stability and repeatability for antenna and module validation.",
        "Developed manufacturable assemblies using SolidWorks, GD&T, and tolerance analysis to improve build consistency and reduce assembly risk.",
        "Resolved assembly and debugging issues with RF and production teams, accelerating integration and prototype readiness.",
      ],
    },
    {
      title: "Product Manager",
      company: "Ohmplus Technology Inc.",
      period: "June 2021 – June 2024",
      bullets: [
        "Managed RF measurement equipment programs from concept to production, aligning technical scope with schedule and manufacturing readiness.",
        "Coordinated engineering, manufacturing, and quality teams to keep projects on track and reduce execution delays.",
        "Delivered multiple projects on time while meeting quality requirements and cost targets.",
      ],
    },
    {
      title: "Research Assistant",
      company: "National Taiwan University",
      period: "November 2020 – June 2021",
      bullets: [
        "Supported mechanical design research for precision measurement systems, improving test setup reliability and workflow consistency.",
        "Assisted with experimental setup and data collection, helping maintain repeatable execution and clear technical records.",
        "Contributed to technical documentation and publication support through structured engineering reporting.",
      ],
    },
    {
      title: "Laser Operator",
      company: "Abcor Pty. Ltd.",
      period: "January 2018 – June 2020",
      bullets: [
        "Operated laser cutting equipment for precision manufacturing, maintaining dimensional accuracy and consistent output quality.",
        "Maintained process control and equipment condition to support stable production performance.",
        "Improved workflow efficiency through process optimization, reducing rework risk and supporting on-time delivery.",
      ],
    },
  ];

  const skills = {
    "Core Engineering": [
      "SolidWorks",
      "2D / 3D Mechanical Design",
      "GD&T",
      "Tolerance Analysis",
      "Precision Mechanism Design",
      "DFM / DFA",
    ],
    Analysis: ["FEA", "Thermal Analysis", "CFD Simulation", "Structural Evaluation"],
    "Test & Manufacturing": [
      "RF Test Fixture Design",
      "Precision Assembly",
      "Assembly & Validation",
      "CNC Machining Coordination",
      "FARO Arm Measurement",
      "Quality Control",
    ],
    Documentation: [
      "Technical Documentation",
      "Engineering Reports & Specifications",
      "Microsoft Office Suite",
    ],
  };

  const projectVisuals = {
    "Vertical RF Testing System Development": {
      label: "System Layout Preview",
      accent: "from-sky-500/15 to-cyan-500/10",
      line: "bg-sky-600/20",
      chip: "text-sky-700 border-sky-200 bg-sky-50",
    },
    "RF Module Design – Beamforming & Up/Down Converter": {
      label: "Module Enclosure Preview",
      accent: "from-emerald-500/15 to-teal-500/10",
      line: "bg-emerald-600/20",
      chip: "text-emerald-700 border-emerald-200 bg-emerald-50",
    },
    "Desktop High-Frequency RF Test Chamber": {
      label: "Chamber CAD Preview",
      accent: "from-violet-500/15 to-indigo-500/10",
      line: "bg-violet-600/20",
      chip: "text-violet-700 border-violet-200 bg-violet-50",
    },
  } as const;

  const projects = [
    {
      title: "Vertical RF Testing System Development",
      role: "Lead Mechanical Engineer",
      period: "May 2022 – September 2022",
      problem:
        "Built a vertical laboratory test infrastructure for antenna and wireless module evaluation with repeatable measurements, operator safety, and ergonomic use.",
      actions: [
        "Designed modular reflector-based test geometry",
        "Implemented automated DUT platform with lift and in-out motion",
        "Created quick-change DUT mounting with locating pins and pneumatic pressing",
        "Validated design with FEA and laser alignment calibration",
      ],
      results: [
        "Material change time reduced from 6 minutes to under 2 minutes",
        "Successfully demonstrated at the 2023 International Microwave Symposium",
        "Achieved repeatable, stable RF measurements meeting design thresholds",
      ],
      metrics: [
        { label: "Changeover", value: "< 2 min" },
        { label: "Improvement", value: "67%" },
        { label: "Validation", value: "Stable" },
      ],
      imageSrc:
        "https://res.cloudinary.com/dv0jk958g/image/upload/v1772599026/Vertical_RF_Testing_System_Development_hvfik3.jpg",
      imageAlt: "Vertical RF testing system overview",
      showImage: true,
      imageHint: "Vertical system photo connected from Cloudinary.",
      tags: ["SolidWorks", "FEA", "CNC", "Pneumatics", "Laser Alignment"],
    },
    {
      title: "RF Module Design – Beamforming & Up/Down Converter",
      role: "Lead Mechanical Design Engineer",
      period: "October 2024 – December 2024",
      problem:
        "Designed reusable RF modules for a university lab while balancing thermal performance, EMC compliance, safety, and ease of use.",
      actions: [
        "Developed thermal management for compact modules",
        "Implemented EMC-compliant housing with conductive seams",
        "Optimized heatsink geometry for natural convection",
        "Standardized architecture for manufacturing efficiency",
      ],
      results: [
        "Reduced lead time and manufacturing cost through reusable architecture",
        "Met all thermal and EMC targets with 100% End-of-Line pass rate",
        "Successfully deployed in a teaching laboratory",
      ],
      metrics: [
        { label: "EOL Pass", value: "100%" },
        { label: "Architect.", value: "Reusable" },
        { label: "Compliance", value: "Thermal+EMC" },
      ],
      imageSrc:
        "https://res.cloudinary.com/dv0jk958g/image/upload/v1772599009/RF_Module_Design_-_Beamforming_krnzno.jpg",
      imageAlt: "RF module beamforming enclosure",
      secondaryImageSrc:
        "https://res.cloudinary.com/dv0jk958g/image/upload/v1772599016/RF_Module_Design_-_UpDown_Converter_jd7fhf.jpg",
      secondaryImageAlt: "RF module up-down converter enclosure",
      showImage: true,
      imageHint: "Dual module photos connected from Cloudinary.",
      tags: ["SolidWorks", "CFD/FEA", "Thermal", "EMC", "GD&T"],
    },
    {
      title: "Desktop High-Frequency RF Test Chamber",
      role: "Mechanical Design Engineer",
      period: "May 2025 – August 2025",
      problem:
        "Created a portable desktop RF measurement enclosure with high isolation and geometric repeatability under tight size and weight limits.",
      actions: [
        "Designed compact isolation-focused enclosure",
        "Created precision adjustable horn antenna fixture",
        "Implemented knife-edge conductive sealing for EMC",
        "Optimized absorber layout across a wide frequency range",
      ],
      results: [
        "Achieved compact form factor with excellent repeatability",
        "Maintained high RF isolation across 1–67 GHz",
        "Balanced structural integrity with portability and usability",
      ],
      metrics: [
        { label: "Frequency", value: "1–67 GHz" },
        { label: "Form Factor", value: "Desktop" },
        { label: "Isolation", value: "High" },
      ],
      imageSrc:
        "https://res.cloudinary.com/dv0jk958g/image/upload/v1772598989/Desktop_High-Frequency_RF_Test_Chamber_lvbdts.jpg",
      imageAlt: "Desktop RF test chamber exterior",
      showImage: true,
      imageHint: "Desktop chamber photo connected from Cloudinary.",
      tags: ["RF Shielding", "EMC", "GD&T", "Portable Design"],
    },
  ];

  const Pill = ({ text }: { text: string }) => (
    <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {text}
    </span>
  );

  const getMetricLabelClass = (label: string) => {
    const len = label.replace(/\s+/g, "").length;
    if (len >= 11) return "text-[8px] tracking-[0.02em]";
    if (len >= 9) return "text-[9px] tracking-[0.03em]";
    return "text-[9px] tracking-[0.04em]";
  };

  const getMetricValueClass = (value: string) => {
    const compactLength = value.replace(/\s+/g, "").length;
    if (compactLength >= 12) return "text-[11px] sm:text-[13px]";
    if (compactLength >= 10) return "text-[12px] sm:text-[14px]";
    return "text-[13px] sm:text-[15px]";
  };

  const SectionTitle = ({
    eyebrow,
    title,
    subtitle,
  }: {
    eyebrow: string;
    title: string;
    subtitle?: string;
  }) => (
    <div className="mb-8">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{eyebrow}</div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{subtitle}</p> : null}
    </div>
  );

  const ProjectVisual = ({
    title,
    hint,
    imageSrc,
    imageAlt,
    secondaryImageSrc,
    secondaryImageAlt,
    showImage,
  }: {
    title: string;
    hint: string;
    imageSrc?: string;
    imageAlt?: string;
    secondaryImageSrc?: string;
    secondaryImageAlt?: string;
    showImage?: boolean;
  }) => {
    const visual = projectVisuals[title as keyof typeof projectVisuals];

    if (showImage && imageSrc) {
      const hasSecondaryImage = Boolean(secondaryImageSrc);

      return (
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
          <div
            className={`relative w-full ${
              hasSecondaryImage ? "grid h-[300px] grid-rows-2 gap-px bg-white" : "h-[300px]"
            }`}
          >
            <img src={imageSrc} alt={imageAlt || title} className="h-full w-full object-cover" loading="lazy" />
            {hasSecondaryImage ? (
              <img
                src={secondaryImageSrc}
                alt={secondaryImageAlt || `${title} secondary view`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : null}
          </div>
        </div>
      );
    }

    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
          visual?.accent || "from-slate-100 to-slate-200"
        }`}
      >
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-4 top-4 h-16 w-24 rounded-xl border border-white/70 bg-white/60" />
          <div className="absolute right-5 top-6 h-10 w-16 rounded-lg border border-white/70 bg-white/50" />
          <div className="absolute bottom-5 left-6 h-12 w-28 rounded-xl border border-white/70 bg-white/50" />
          <div className="absolute bottom-8 right-8 h-20 w-20 rounded-2xl border border-white/70 bg-white/40" />
        </div>
        <div className="relative min-h-[240px] p-4">
          <div className="flex items-start justify-between gap-3">
            <div
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                visual?.chip || "text-slate-700 border-slate-200 bg-white/80"
              }`}
            >
              {visual?.label || "Project Preview"}
            </div>
            <div className="rounded-full border border-white/70 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
              Concept View
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className={`h-2 w-10/12 rounded-full ${visual?.line || "bg-slate-300"}`} />
            <div className={`h-2 w-7/12 rounded-full ${visual?.line || "bg-slate-300"}`} />
            <div className={`h-20 rounded-2xl ${visual?.line || "bg-slate-300"} opacity-80`} />
            <div className="grid grid-cols-3 gap-2">
              <div className={`h-10 rounded-xl ${visual?.line || "bg-slate-300"}`} />
              <div className={`h-10 rounded-xl ${visual?.line || "bg-slate-300"}`} />
              <div className={`h-10 rounded-xl ${visual?.line || "bg-slate-300"}`} />
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/70 bg-white/70 p-3 text-xs leading-6 text-slate-600 shadow-sm">
            {hint}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-6 hidden rounded-2xl border border-white/60 bg-white/85 px-5 py-3 shadow-sm backdrop-blur md:flex md:items-center md:justify-between">
          <div className="text-sm font-semibold">James Huang</div>
          <nav className="flex gap-5 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </header>

        <main className="space-y-8">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.35fr_0.65fr] lg:p-10">
              <div>
                <div className="mb-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Mechanical Portfolio
                </div>
                <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  黃仲瑄 / James Huang
                </h1>
                <p className="mt-4 max-w-3xl text-lg font-semibold text-slate-700 sm:text-xl">
                  Mechanical Design Engineer | RF Test Fixtures | Precision Mechanisms | Thermal Design
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Specialized in RF test systems, precision fixtures, thermal management, and manufacturable mechanical design. This version is built as a cleaner, more polished portfolio landing page for recruiting and resume use.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                  >
                    View Featured Projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Seeking Roles</div>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <div>Mechanical Design Engineer</div>
                    <div>RF / Test Fixture Design</div>
                    <div>Precision Equipment / Automation</div>
                    <div>Thermal / Enclosure Design</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Core Strengths</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "SolidWorks",
                      "GD&T",
                      "Tolerance Analysis",
                      "FEA",
                      "Thermal Design",
                      "RF Fixture Design",
                    ].map((item) => (
                      <Pill key={item} text={item} />
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Quick Value</div>
                  <p className="mt-2 text-sm leading-7 text-slate-100">
                    Designed systems that improved repeatability, reduced setup time, and balanced engineering performance with manufacturing practicality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle
              eyebrow="About"
              title="Engineering focus built around precision, manufacturability, and real-world deployment"
              subtitle="As a Mechanical Design Engineer at Ohmplus Technology Inc., I specialize in RF testing systems, thermal management, and precision mechanical design. With a strong foundation in SolidWorks, FEA analysis, and GD&T, I bring innovative solutions to complex engineering challenges."
            />
          </section>

          <section id="experience" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle eyebrow="Experience" title="Work Experience" />
            <div className="space-y-5">
              {experiences.map((job) => (
                <div key={job.title + job.period} className="rounded-2xl border border-slate-200 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                      <p className="text-sm text-slate-600">{job.company}</p>
                    </div>
                    <div className="text-sm font-medium text-slate-500">{job.period}</div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle eyebrow="Skills" title="Technical Skill Set" />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Pill key={item} text={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle
              eyebrow="Projects"
              title="Featured Engineering Projects"
              subtitle="A project-first layout makes your strongest technical work easier for hiring managers and engineering leads to scan quickly."
            />
            <div className="grid gap-5 items-stretch lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex h-full min-h-[1120px] flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="mb-4">
                    <ProjectVisual
                      title={project.title}
                      hint={project.imageHint}
                      imageSrc={project.imageSrc}
                      imageAlt={project.imageAlt}
                      secondaryImageSrc={project.secondaryImageSrc}
                      secondaryImageAlt={project.secondaryImageAlt}
                      showImage={project.showImage}
                    />
                  </div>
                  <div className="mb-5 grid grid-cols-3 items-stretch gap-2">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex h-[96px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-2 py-3 text-center shadow-sm"
                      >
                        <div
                          className={`font-semibold uppercase leading-none text-slate-500 whitespace-nowrap ${getMetricLabelClass(
                            metric.label
                          )}`}
                        >
                          {metric.label}
                        </div>
                        <div
                          className={`mt-4 max-w-full font-bold leading-none tracking-tight text-slate-900 whitespace-nowrap ${getMetricValueClass(
                            metric.value
                          )}`}
                        >
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="min-h-[84px]">
                      <h3 className="text-lg font-semibold leading-snug text-slate-900">{project.title}</h3>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                      <span>{project.role}</span>
                      <span>•</span>
                      <span>{project.period}</span>
                    </div>

                    <div className="mt-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Problem</div>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{project.problem}</p>
                    </div>

                    <div className="mt-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Engineering Actions
                      </div>
                      <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-700">
                        {project.actions.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Results</div>
                      <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-700">
                        {project.results.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tags.map((tag) => (
                      <Pill key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionTitle eyebrow="Education" title="Academic Background" />
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Bachelor of Science Degree</h3>
                <p className="mt-1 text-sm text-slate-600">Minghsin University of Science and Technology</p>
                <p className="mt-3 text-sm font-medium text-slate-500">Sep 2006 – Jun 2009</p>
              </div>
            </div>

            <div id="contact" className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
              <SectionTitle
                eyebrow="Contact"
                title="Ready for interviews, project discussions, and new opportunities"
                subtitle="For deployment, place your resume PDF in /public/files/Resume.pdf (Next.js) or /files/Resume.pdf in your static site output so the download button works correctly."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Email</div>
                  <a
                    href="mailto:jams923@hotmail.com"
                    className="mt-3 block text-sm text-slate-100 underline underline-offset-4 hover:text-white"
                  >
                    jams923@hotmail.com
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/chung-hsuan-huang-856a69372/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block text-sm text-slate-100 underline underline-offset-4 hover:text-white"
                  >
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/files/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm"
                >Download Resume (PDF)</a>
                <button className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white">
                  View Project Deck
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
