// ---- Content model (single source of truth) ----
// Start simple: copy/edit content here. Later, you can move this object into content.json.
const CONTENT = {
  contact: {
    email: "contact@stephenphillips.xyz",
    website: "stephenphillips.xyz",
    phone: "(714) 388-2104",
  },

  intros: {
    overview:
      "Robotics & computer vision researcher and educator. I build perception systems end-to-end and care deeply about mentoring, teaching, and making technically deep work accessible.",
    industry:
      "Applied scientist and research engineer in robotics and computer vision, focused on mentoring, collaborative research support, and system integration.",
    teaching:
      "Computer vision and robotics researcher with extensive experience designing and teaching technically rigorous courses, with a focus on mentoring and project-based learning.",
  },

  // Section content below is lifted/adapted from your CV markdown.
  // Keep it concise on the site: the PDF remains the full canonical detail.
  education: [
    "University of Pennsylvania — Ph.D. in Computer Science (Advisor: Kostas Daniilidis) — Aug 2014 – May 2021",
    "University of Pennsylvania — M.Sc. in Computer Science — Aug 2014 – Jun 2016",
    "University of California, Los Angeles — B.S. in Computer Science (GPA 3.97) — Aug 2010 – Jun 2014",
  ],

  research: [
    {
      title: "Roboticist / Applied Scientist",
      meta: "Robotics and AI Institute — Cambridge, MA — May 2023 – Present",
      bullets: [
        "Designed a hardware test workflow for RL-based policies for safer deployment on real robots.",
        "Developed sonar–camera fusion for indoor navigation on a legged platform to reduce collisions.",
        "Built semantic mapping pipelines combining self-supervised visual features with LiDAR odometry.",
      ],
    },
    {
      title: "Visiting Assistant Professor",
      meta: "Swarthmore College — Sep 2021 – May 2023",
      bullets: [
        "Mentored senior thesis students and undergraduates on multi-sensor fusion / ML projects.",
        "Mentored extracurricular student projects; students continued to CS/engineering graduate programs.",
      ],
    },
  ],

  software: [
    {
      title: "Waymo — Perception Research Intern",
      meta: "Remote — May 2021 – Jul 2021",
      bullets: [
        "Researched camera–radar fusion for autonomous driving in adverse weather.",
        "Implemented fusion components for the model training pipeline.",
      ],
    },
    {
      title: "Google — Software Engineering Intern",
      meta: "Mountain View, CA — Jun 2017 – Sep 2017",
      bullets: [
        "Worked on Project Tango/Daydream: ML techniques to improve IMU accuracy on smartphones.",
        "Implemented IMU data processing to analyze sensor performance across real-world scenarios.",
      ],
    },
  ],

  publications: [
    "Evora: Deep evidential traversability learning for risk-aware off-road autonomy. IEEE T-RO (2024).",
    "All graphs lead to Rome: Learning geometric and cycle-consistent representations with GCNs. CVPR Workshop (2019).",
    "Unsupervised learning of image motion by recomposing sequences. ICLR (2018).",
    "Fast, robust, continuous monocular egomotion computation. ICRA (2016).",
  ],

  teaching: [
    {
      title: "Engineering 27 / CS 72 — Computer Vision",
      meta: "Swarthmore College — Instructor — Jan 2022 – May 2023 (2×)",
      bullets: [
        "Updated ~20 lectures, 12 homework assignments, and projects including an open-ended capstone.",
      ],
    },
    {
      title: "Engineering 71 — Digital Signal Processing",
      meta: "Swarthmore College — Instructor — Jan 2022 – May 2022",
      bullets: [
        "Designed lectures + projects (DNA correlation, LPC, sound classification, band-pass filtering).",
      ],
    },
    {
      title: "Engineering 15 — Fundamentals of Digital and Embedded Systems",
      meta: "Swarthmore College — Co-instructor — Aug 2021 – Dec 2022 (2×)",
      bullets: [
        "Designed lectures, homework, exams; used Circuit Playground & embedded programming labs.",
      ],
    },
  ],

  awards: [
    "NSF Graduate Research Fellowship Program — Honorable Mention (2016).",
    "Outstanding Reviewer of 3DV (2020) — top 10% by area-chair ratings.",
    "UCLA — Outstanding B.S. Degree Award (Computer Science) (2014).",
    "Certificate in College and University Teaching (UPenn) (2020).",
  ],

  outreach: [
    "Co-director, Penn Open Labs (UPenn) — graduate outreach talks for middle/high school students.",
    "Robot Design Judge, FIRST Lego League Regional Championship (UPenn).",
    "Mentor, NSF Research Experience for Teachers (RET) — Philadelphia School District teachers.",
  ],

  charity: [
    "SaverLife — First Science of Savings Challenge (Hackathon) — team placed 2nd overall (2020).",
    "Google — 24 Hours of Good (2013) — volunteer dev hackathon for local nonprofit.",
    "UCLA — San Diego Zoo App (2011) — Django web app to support zookeeper data entry.",
  ],
};

// ---- View-specific section ordering (from your cv_template.md) ----
const VIEW_ORDER = {
  overview: ["education", "research", "software", "publications", "teaching", "awards", "outreach", "charity"],
  teaching: ["education", "teaching", "publications", "research", "software", "awards", "outreach", "charity"],
  industry: ["education", "research", "software", "publications", "teaching", "awards", "outreach", "charity"],
};

const SECTION_TITLES = {
  education: "Education",
  research: "Research Experience",
  software: "Software Engineering Experience",
  publications: "Selected Publications",
  teaching: "Teaching Experience",
  awards: "Awards & Certificates",
  outreach: "Outreach & Volunteering",
  charity: "Charity Projects",
};

// ---- Rendering helpers ----
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of children) node.append(c);
  return node;
}

function renderListSection(items) {
  const ul = el("ul");
  items.forEach(t => ul.append(el("li", {}, [document.createTextNode(t)])));
  return ul;
}

function renderCardItems(items) {
  const wrap = el("div");
  items.forEach(it => {
    const card = el("div", { class: "item" }, [
      el("div", { class: "title" }, [document.createTextNode(it.title)]),
      el("div", { class: "meta" }, [document.createTextNode(it.meta || "")]),
    ]);
    if (it.bullets?.length) {
      const ul = el("ul");
      it.bullets.forEach(b => ul.append(el("li", {}, [document.createTextNode(b)])));
      card.append(ul);
    }
    wrap.append(card);
  });
  return wrap;
}

function renderSection(key) {
  const title = SECTION_TITLES[key] || key;
  const section = el("section", { class: "section", "data-section": key }, [
    el("h2", {}, [document.createTextNode(title)]),
  ]);

  const data = CONTENT[key];
  if (!data) {
    section.append(el("p", { class: "muted" }, [document.createTextNode("Content coming soon.")]));
    return section;
  }

  if (Array.isArray(data) && typeof data[0] === "string") {
    section.append(renderListSection(data));
    return section;
  }

  if (Array.isArray(data) && typeof data[0] === "object") {
    section.append(renderCardItems(data));
    return section;
  }

  section.append(el("p", {}, [document.createTextNode(String(data))]));
  return section;
}

function renderView(viewName, panelEl) {
  panelEl.innerHTML = "";

  // Intro blurb
  panelEl.append(
    el("section", { class: "section" }, [
      el("span", { class: "kicker" }, [document.createTextNode("Profile")]),
      el("h2", {}, [document.createTextNode(viewName === "overview" ? "Overview" : viewName[0].toUpperCase() + viewName.slice(1))]),
      el("p", { class: "muted" }, [document.createTextNode(CONTENT.intros[viewName] || "")]),
    ])
  );

  // Ordered sections
  for (const key of VIEW_ORDER[viewName]) {
    panelEl.append(renderSection(key));
  }
}

// ---- Tabs (manual activation: click/enter/space switches, arrows move focus) ----
const tablist = document.querySelector('[role="tablist"]');
const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));

function setTagline(view) {
  const t = document.getElementById("tagline");
  t.textContent = CONTENT.intros[view] || "";
}

function activateTab(tab) {
  const panelId = tab.getAttribute("aria-controls");
  const view = tab.id.replace("tab-", "");

  tabs.forEach(t => {
    const selected = (t === tab);
    t.setAttribute("aria-selected", selected ? "true" : "false");
    t.tabIndex = selected ? 0 : -1;

    const p = document.getElementById(t.getAttribute("aria-controls"));
    if (p) p.hidden = !selected;
  });

  const panel = document.getElementById(panelId);
  renderView(view, panel);
  setTagline(view);
  history.replaceState(null, "", "#" + view);
}

tablist.addEventListener("click", (e) => {
  const tab = e.target.closest('[role="tab"]');
  if (tab) activateTab(tab);
});

tablist.addEventListener("keydown", (e) => {
  const i = tabs.indexOf(document.activeElement);
  if (i < 0) return;

  let j = null;
  if (e.key === "ArrowRight") j = (i + 1) % tabs.length;
  if (e.key === "ArrowLeft")  j = (i - 1 + tabs.length) % tabs.length;

  if (j !== null) {
    e.preventDefault();
    tabs[j].focus();
  }

  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    activateTab(document.activeElement);
  }
});

// Boot
document.getElementById("year").textContent = String(new Date().getFullYear());

const initial = (location.hash || "#overview").replace("#", "");
const initialTab = document.getElementById("tab-" + initial) || document.getElementById("tab-overview");
activateTab(initialTab);

