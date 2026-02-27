// ---- Content model (single source of truth) ----
const CV_URLS = {
  overview: "assets/industry/CV-Stephen-Phillips.pdf",
  industry: "assets/industry/CV-Stephen-Phillips.pdf",
  teaching: "assets/teaching/CV-Stephen-Phillips.pdf",
}
const CONTENT = {
  contact: {
    email: "contact@stephenphillips.xyz",
    website: "stephenphillips.xyz",
    phone: "(714) 388-2104",
  },

  brief_intros: {
    overview:
      "Robotics & computer vision researcher and educator. I build perception systems end-to-end and care deeply about mentoring, teaching, and making technically deep work accessible.",
    industry:
      "Applied scientist and research engineer in robotics and computer vision, focused on mentoring, collaborative research support, and system integration.",
    teaching:
      "Computer vision and robotics researcher with extensive experience designing and teaching technically rigorous courses, with a focus on mentoring and project-based learning.",
  },

  intros: {
    overview:
      "I am an applied scientist and research engineer working in robotics and computer vision, with a strong emphasis on mentoring, collaborative research support, and system integration. My work focuses on helping teams solve technically deep problems by bridging theory and practice, building reliable perception and learning systems, and developing a shared understanding of complex tools and models. I thrive in small, highly collaborative environments that value ownership, technical depth, and close mentorship.",
    industry:
      "I am an applied scientist and research engineer working in robotics and computer vision, with a strong emphasis on mentoring, collaborative research support, and system integration. My work focuses on helping teams solve technically deep problems by bridging theory and practice, building reliable perception and learning systems, and developing a shared understanding of complex tools and models. I thrive in small, highly collaborative environments that value ownership, technical depth, and close mentorship.",
    teaching:
      "I am a computer vision and robotics researcher with extensive experience designing and teaching technically rigorous undergraduate and graduate courses. I am particularly motivated by mentoring students and helping them bridge mathematical foundations with real-world systems through project-based learning. Alongside teaching, I contribute to collaborative research and applied engineering efforts that connect theory to practice.",
  },

  // Section content below is lifted/adapted from your CV markdown.
  // Keep it concise on the site: the PDF remains the full canonical detail.
  education: [
    "University of Pennsylvania — Ph.D. in Computer Science (Advisor: Kostas Daniilidis) — Aug 2014 – May 2021",
    "University of Pennsylvania — M.Sc. in Computer Science (GPA 3.96) — Aug 2014 – Jun 2016",
    "University of California, Los Angeles — B.S. in Computer Science (GPA 3.97) — Aug 2010 – Jun 2014",
  ],

  industry: [
    {
      title: "Roboticist / Applied Scientist",
      meta: "Robotics and AI Institute — Cambridge, MA — May 2023 – Present",
      bullets: [
        "Designed a hardware test workflow for RL-based policies for safer deployment on real robots.",
        "Developed sonar–camera fusion for indoor navigation on a legged platform to reduce collisions.",
        "Built semantic mapping pipelines combining self-supervised visual features with LiDAR odometry.",
      ],
    },
  ],

  academic: [
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
    "Xiaoyi Cai, Siddharth Ancha, Lakshay Sharma, Philip R Osteen, Bernadette Bucher, Stephen Phillips, Jiuguang Wang, Michael Everett, Nicholas Roy, and Jonathan P How. 2024. Evora: Deep evidential traversability learning for risk-aware off-road autonomy. IEEE Transactions on Robotics (2024).",
    "Stephen Phillips and Kostas Daniilidis. 2019. All graphs lead to Rome: Learning geometric and cycle-consistent representations with graph convolutional networks. CVPR 2019 Image Matching: Local Features and Beyond Workshop (2019).",
    "Stephen Phillips, Andrew Jaegle, Daphne Ippolito, and Kostas Daniilidis. 2018. Unsupervised learning of image motion by recomposing sequences. International Conference on Learning Representations (ICLR) (2018).",
    "Stephen Phillips, Andrew Jaegle, and Kostas Daniilidis. 2016. Fast, robust, continuous monocular egomotion computation. In Proceedings of the IEEE International Conference on Robotics and Automation (ICRA) 2016, 773–780.",
  ],

  teaching: [
    {
      title: "Engineering 27 / CS 72 — Computer Vision",
      meta: "Swarthmore College — Instructor — Jan 2022 – May 2023 (2×)",
      pre_bullets: [
        "Sophomore/junior level, 15 students",
      ],
      bullets: [
        "Updated 22 lectures, 12 homework assignments, and projects including an open-ended capstone.",
      ],
      post_bullets: [
        "Fundamentals of computer vision, image processing, neural networks, and 3D reconstruction.",
      ],
    },
    {
      title: "Engineering 71 — Digital Signal Processing",
      meta: "Swarthmore College — Instructor — Jan 2022 – May 2022",
      pre_bullets: [
        "Junior/senior level, five students",
      ],
      bullets: [
        "Designed lectures and projects (DNA correlation, LPC, sound classification, band-pass filtering).",
      ],
      post_bullets: [
        "Discrete time signals, Z-transforms, Fourier Transforms, and the Fast Fourier Transform.",
      ],
    },
    {
      title: "Engineering 15 — Fundamentals of Digital and Embedded Systems",
      meta: "Swarthmore College — Co-instructor — Aug 2021 – Dec 2022 (2×)",
      pre_bullets: [
        "Freshman level, 50 students",
      ],
      bullets: [
        "Designed lectures, homework, exams; used Circuit Playground & embedded programming labs.",
      ],
      post_bullets: [
        "Introducing programming with Arduino, and laboratory assignments on hardware implementations.",
      ],
    },
    {
      title: "Engineering 19 — Numerical Methods and Applications in Engineering",
      meta: "Swarthmore College — Instructor — Aug 2021 – Dec 2021",
      pre_bullets: [
        "Sophomore level, 19 students",
      ],
      bullets: [
        "Designed all 22 lectures, 12 homework assignments, two exams, and five projects, and one open-ended final project.",
      ],
      post_bullets: [
        "Introduction to Python, NumPy, and SciPy, basic numerical method algorithms and analysis.",
      ],
    },
    {
      title: "CIS 107/VLST 209 -— Visual Culture through the Computer's Eye",
      meta: "University of Pennsylvania — Co-instructor — Jan 2021 – Jun 2021",
      pre_bullets: [
        "Junior level, online, 15 students (approximately evenly split between Humanities and Engineering)",
      ],
      bullets: [
        "Designed engineering-oriented lectures, facilitated class discussions, mentored student teams in designing datasets.",
      ],
      post_bullets: [
        "Intersection of computer vision and visual studies, dataset and algorithm design, discussion and writing on the real-world stakes of computer vision and the digital humanities.",
      ],
    },
  ],

  teaching_assistant: [
    {
      title: "MCIT 515 — Linear Algebra for Machine Learning",
      meta: "University of Pennsylvania — Head teaching assistant — Jul 2020 – Dec 2020",
      pre_bullets: [
        "Master's level, online, 25-35 students. (No background assumed).",
      ],
      main_bullets: [
        "Updated 22 lectures, 12 homework assignments, and projects including an open-ended capstone.",
      ],
      post_bullets: [
        "Graded homework assignments, developed a project auto-grader, and held office hours.",
      ],
    },
    {
      title: "MEAM620 — Advanced Robotics",
      meta: "University of Pennsylvania — Lecturer and teaching assistant — Jan 2016 – May 2019",
      pre_bullets: [
        "Master's level, 30-40 students",
      ],
      bullets: [
        "Held office hours, designed an auto-grader, assisted with hardware testing for student projects, and designed and delivered six lectures on computer vision for robotics.",
      ],
      post_bullets: [
        "Robotic path planning, control theory, and machine perception/computer vision for quadrotors, with projects using real quadrotors.",
      ],
    },
    {
      title: "CIS390 — Robotics: Planning and Perception",
      meta: "University of Pennsylvania — Lecturer and teaching assistant — Sep 2015 – Dec 2015",
      pre_bullets: [
        "Sophomore level, 20 students",
      ],
      bullets: [
        "Course designed from scratch with other teaching assistants; primary responsibility was designing a simulation environment to test robotic planning algorithms for course coding projects.",
      ],
      post_bullets: [
        "New course in robotic path planning algorithms with Python projects.",
      ],
    },
    {
      title: "Coursera — Robotics: Perception",
      meta: "University of Pennsylvania (Online) — Teaching assistant and homework designer — Jan 2016 – Jul 2016",
      pre_bullets: [
        "General audience, online",
      ],
      bullets: [
        "Designed four homework assignments, wrote supporting teaching material, and wrote an auto-grader for all assignments.",
      ],
      post_bullets: [
        "Perception module of the UPenn Robotics Specialization on Coursera, focused on basics of computer vision such as the image formation process up to multi-view geometry.",
      ],
    }
  ],

  early: [
    {
      title: "UCLA Vision Lab — Undergraduate Researcher",
      meta: "Los Angeles, CA — Aug 2013 – Jul 2014",
      bullets: [
        "Implemented visual-inertial odometry loop-closure system.",
      ],
    },
    {
      title: "UCLA Ozcan Lab — Android Developer Lead",
      meta: "Los Angeles, CA — Oct 2012 – Oct 2013",
      bullets: [
        "Led mobile medical imaging team; contributed to 4 publications.",
      ],
    },
    {
      title: "Google — Software Engineering Intern",
      meta: "Venice Beach, CA — Jun 2013 – Aug 2013",
      bullets: [
        "Spam filtering for Google Video Search.",
      ],
    },
    {
      title: "Zynx — Software Engineering Intern",
      meta: "Westwood, CA — Jun 2012 – Aug 2012",
      bullets: [
        "Medical database synchronization tool.",
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
const SECTIONS = {
  overview: {
    "Education": [ "education" ],
    "Research Experience": ["industry", "academic"],
    "Software Engineering Experience": ["software"],
    "Selected Publications": ["publications"],
    "Teaching Experience": ["teaching"],
    "Awards": ["awards"],
  },
  teaching: {
    "Education": [ "education" ],
    "Teaching Experience": ["teaching_more"],
    "Academic Experience": ["academic"],
    "Selected Publications": ["publications"],
    "Industry Experience": ["industry", "software"],
    "Teaching Assistant Experience": ["teaching"],
    "Awards": ["awards"],
    "Outreach": ["outreach"],
    "Charity": ["charity"],
  },
  industry: {
    "Education": [ "education" ],
    "Experience": ["industry", "academic", "software"],
    "Selected Publications": ["publications"],
    "Teaching Experience": ["teaching_less"],
    "Early Experience": ["early"],
    "Awards": ["awards"],
  },
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

function renderCardItems(items, bullet_type) {
  const wrap = el("div");
  items.forEach(it => {
    const card = el("div", { class: "item" }, [
      el("div", { class: "title" }, [document.createTextNode(it.title)]),
      el("div", { class: "meta" }, [document.createTextNode(it.meta || "")]),
    ]);
    if (!(bullet_type == "less") && it.bullets?.length) {
      const ul = el("ul");
      if (bullet_type == "more" && it.pre_bullets?.length) {
        it.pre_bullets.forEach(b => ul.append(el("li", {}, [document.createTextNode(b)])));
      }
      it.bullets.forEach(b => ul.append(el("li", {}, [document.createTextNode(b)])));
      if (bullet_type == "more" && it.post_bullets?.length) {
        it.post_bullets.forEach(b => ul.append(el("li", {}, [document.createTextNode(b)])));
      }
      card.append(ul);
    }
    wrap.append(card);
  });
  return wrap;
}

function renderSection(title, section_keys) {
  const section = el("section", { class: "section", "data-section": title }, [
    el("h2", {}, [document.createTextNode(title)]),
  ]);

  section_keys.forEach(init_key => {
    var bullet_type = "normal";
    var key = init_key;
    const more_suffix = "_more";
    const less_suffix = "_less";
    if (!(init_key in CONTENT) && init_key.endsWith(more_suffix)) {
      key = init_key.substring(0, init_key.length - more_suffix.length);
      bullet_type = "more";
    } else if (!(init_key in CONTENT) && init_key.endsWith(less_suffix)) {
      key = init_key.substring(0, init_key.length - less_suffix.length);
      bullet_type = "less";
    }
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
      section.append(renderCardItems(data, bullet_type));
      return section;
    }

    section.append(el("p", {}, [document.createTextNode(String(data))]));
  });
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
  for (const [title, section_order] of Object.entries(SECTIONS[viewName])) {
    panelEl.append(renderSection(title, section_order));
  }
}

// ---- Tabs (manual activation: click/enter/space switches, arrows move focus) ----
const tablist = document.querySelector('[role="tablist"]');
const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));

function setTagline(view) {
  const t = document.getElementById("tagline");
  t.textContent = CONTENT.brief_intros[view] || "";
}

function activateTab(tab) {
  // Get selected tab
  const panelId = tab.getAttribute("aria-controls");
  const view = tab.id.replace("tab-", "");
  // Change CV link
  document.getElementById("cv-link").href = CV_URLS[view];
  // Change page content
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

