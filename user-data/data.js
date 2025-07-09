export const bio = [
  "Welcome to my world!",
  "Instead of opening my portfolio with a standard description of static roles & titles, I'd like to begin by sharing who I am and what drives me.",
  "Rather than focusing on the past, I am looking toward the future by continuously thinking about how technology can be leveraged to have a <strong>positive impact on people's lives and well-being</strong>.",
  "What defines me is my passion and dedication to projects that are close to my heart. I am a strong believer in the <strong>power of extended reality in combination with artificial intelligence</strong> to transform and enhance patient health & well-being.",
  "I invite you to explore my portfolio page to gain a deeper understanding of the context for my vision.",
  "~ Tim",
];

export const projects = [
  {
    title:
      "Real QArt: The new way of social networking with AI Art & Augmented Reality glasses",
    subtitle: "Private project, 2025",
    details:
      "The soon-to-be-launched platform will provide options to create your own LLM-generated art code as a temporary tattoo, keychain, or other accessory. In the next step, this code opens the door to a novel social network allowing people to connect in real-life​ based on shared interests or professional matters. Augmented reality will play a key role in facilitating real-time networking. The project is currently in the early stages of development and will be launched later in 2025.",
    link: "https://real-qart-portal.onrender.com/inspire",
    language: "ReactJS, NodeJS",
    stars: "Codebase unpublished, coming soon",
    forks: null,
    tags: [
      "Augmented Reality",
      "Social Networking",
      "Large Language Models",
      "ReactJS",
      "NodeJS/ExpressJS",
      "PostgreSQL",
    ],
  },
  {
    title: "Smart Medical Mobile Assistant (SMEMAS)",
    subtitle: "Research project, 2024-2025",
    details:
      "A LLM-powered support tool for patients to provide guidance for personal health questions & actions on their smartphone, prepare them for appointments, and identify loose ends & anomalies based on their electronic medical records and fitness activities.​",
    link: "https://github.com/tschwirt/SMEMAS-2.0",
    language: "Swift",
    stars: "tschwirt/SMEMAS-2.0",
    forks: "StanfordBDHG/HealthGPT",
    tags: [
      "Large Language Models",
      "Electronic Health Records",
      "Patient Empowerment",
      "Swift",
      "iOS App",
      "Apple Health Kit",
    ],
  },
  {
    title: "Deep learning seizure prediction from brain CT scans",
    subtitle: "Research project, 2024-2025",
    details:
      "Stroke, especially intracerebral hemorrhage (ICH), frequently leads to seizures. Anti-seizure medications help manage these seizures but may carry risks if prescribed unnecessarily. Identifying high-risk patients currently relies on manual analysis of CT scans and EEGs, which is subjective and resource-intensive. This study uses convolutional neural networks and traditional machine learning methods on segmented brain lesions to reliably predict likelihood of seizures, solely based on initial brain CT scans.​",
    link: "https://reporter.nih.gov/project-details/10658031",
    language: "Python",
    stars: "Codebase unpublished, coming soon",
    forks: "biomedia-mira/blast-ct",
    tags: [
      "Deep Learning",
      "Convolutional Neural Networks",
      "Transfer Learning",
      "DICOM CT Scans",
      "Brain Lesion Segmentation",
    ],
  },
  {
    title:
      "Speech emotion recognition from audio samples to facilitate movie subtitles",
    subtitle: "Master Thesis, 2023 - Startup Phont (Tech Lead)",
    details:
      "In my role as tech lead of the initial founding team of Phont, I have developed a speech emotion recognition model as part of my master thesis. The model was used in combination with prototype web applications and browser plugins to facilitate immersive subtitles for movies and videos, especially for hearing-impaired people. Phont has won several awards and is gaining significant traction in the startup scene. With the start of my PhD program, I handed over my responsibilities.",
    link: "https://phont.ai/",
    language: "Python, JavaScript",
    stars: "Phont",
    forks: null,
    tags: [
      "Emotion Recognition",
      "Speech Processing",
      "Machine / Deep Learning",
      "Web Development",
      "Entrepreneurship",
    ],
  },
];

export const achievements = [
  {
    title:
      "Schwirtlich, et al. - Synergy of Artificial Intelligence and Extended Reality in Patient-focused Health and Well-Being Applications – A Systematic Review",
    subtitle: "Submitted March 2025 [under revision]",
    details:
      "This systematic review explores the synergy of artificial intelligence (AI) and extended reality (XR) in patient-oriented health and well-being. The applications demonstrated patient benefits, such as improved clinical outcomes, engagement, and accessibility. Machine, deep learning, and conversational AI were combined with XR’s interactive environments to enable personalized rehabilitation and physical therapy, mental health, and developmental care interventions. While the protocol is published, the manuscript is currently under review.",
    link: "https://www.crd.york.ac.uk/PROSPERO/view/CRD42024573822",
    tags: [
      "Extended Reality",
      "Artificial Intelligence",
      "Patient Health & Well-being",
      "Systematic Review",
    ],
  },
  {
    title:
      "Schwirtlich, Wang, et al. - Automated Detection of Black Hole Sign for Intracerebral Hemorrhage Patients Using Self-Supervised Learning",
    subtitle:
      "American Journal of Neuroradiology (AJNR), April 2025 [published]",
    details:
      "In the publication, we present a self-supervised learning approach to detect the black hole sign (BHS) on CT images of patients with intracerebral hemorrhage (ICH). Our method utilizes a large dataset of CT images to train a model that can reliably identify the BHS, potentially aiding in clinical decision-making and improving patient outcomes. The manuscript is currently in-press.",
    link: "https://doi.org/10.3174/ajnr.A8826",
    tags: [
      "Self-Supervised Learning",
      "Intracerebral Hemorrhage",
      "Black Hole Sign",
    ],
  },
  {
    title:
      "Podium: Extracting Social Determinants of Health Information from Clinical Notes Using Large Language Models",
    subtitle:
      "American Medical Informatics Association (AMIA) 2024 Annual Symposium, 09-13 November 2024, San Francisco, CA",
    details:
      "Our work investigates the potential of large language models (LLMs) in extracting and categorizing social determinants of health (SDOH) from clinical notes. MIMIC dataset analysis revealed low SDOH ICD code utilization, yet significant SDOH details in clinical notes through NLP application. Given the potential for extracting SDOH from free-text, challenges unraveled using Llama-2 compared to previous benchmarks. This research emphasizes needed methodological refinement and annotated datasets to advance SDOH integration in healthcare practice and research.",
    link: "https://amia.secure-platform.com/symposium/gallery/rounds/82001/details/11427",
    tags: [
      "Large Language Models",
      "Natural Language Processing",
      "Social Determinants of Health",
      "Clinical Notes",
    ],
  },
  {
    title:
      "Patent Inventor: Computer-implemented method for providing a personalized healthcare parameter, and healthcare management system",
    subtitle: "Roche Diabetes Care, 2023",
    details:
      "The first published patent in a series of inventions in my R&D role around patient digital twins, medical interoperability, clinical decision support, and AI-powered insulin titration algorithms.",
    link: "https://patents.google.com/patent/WO2023232694A1",
    tags: [
      "Digital Twin",
      "Clinical Decision Support",
      "Algorithm Interface",
      "Personalized Healthcare",
      "Patent",
    ],
  },
];

export const education = [
  {
    title: "PhD Student: Health & Biomedical Informatics",
    duration: "2023 - present",
    subtitle: "Northwestern University, Chicago",
    details: [
      "Co-Lead AI@NU (Artificial Intelligence @ Northwestern) Graduate Student Group",
      "International Student Chair, Health Science Program Student Group",
    ],
    tags: [
      "Interdisciplinary Health Science Colloquium",
      "Health & Biomedical Informatics Methods",
      "American Healthcare System",
      "Electronic Health Records",
      "Biostatistics",
      "Health Research Ethics",
      "Scientific Writing & Peer Reviewing",
      "Grant Writing",
      "Technology Entrepreneurship",
    ],
    icon: "hourglass-half",
  },
  {
    title: "Master of Science: Data Science",
    duration: "2021 - 2023",
    subtitle: "Rochester Institute of Technology",
    details: [],
    tags: [
      "Data Science & Analytics",
      "Software Construction",
      "Healthcare Informatics",
      "Database Design & Implementation",
      "Time Series Analysis & Forecasting",
      "Data-Driven Knowledge Discovery",
      "Software Engineering for Data Science",
    ],
    icon: "graduation-cap",
  },
  {
    title: "©MicroMasters: Algorithms & Data Structures",
    duration: "2020 - 2021",
    subtitle: "University of California, San Diego",
    details: [],
    tags: [
      "Algorithmic Design & Techniques",
      "Data Structures",
      "Graph Algorithms",
      "NP-Complete Problems",
      "String Processing & Pattern Matching",
      "Dynamic Programming",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Bachelor of Science: Applied Computer Science",
    duration: "2017 - 2020",
    subtitle: "Cooperative State University BW, Mannheim (GER)",
    details: [],
    tags: [
      "Mathematics / Statistics",
      "Theoretical Computer Science",
      "Software Engineering",
      "Database Systems",
      "Computer Engineering",
      "Web Engineering",
      "C",
      "Java",
      "Python",
      "JavaScript",
      "SQL",
    ],
    icon: "graduation-cap",
  },
];

export const experience = [
  {
    title:
      "Software Engineer for Early Innovation & Cloud Technologies (full-time)",
    duration: "2020 - 2023",
    subtitle: "Roche Diabetes Care GmbH, Mannheim (GER / Global)",
    details: [
      "Research lead for a global Patient Digital Twin innovation project ($1 million)",
      "Subject matter expert: ML-enabled Clinical Decision Support",
      "Coordinator of external development team for enterprise medical device uploader",
      "Software engineer for complaint investigation & ML prediction application",
      "Student mentor & facilitator of research rotations in global-scale projects",
    ],
    tags: [
      "Predictive Analytics",
      "Project Management",
      "Software Architecture",
      "Large Language Models",
      "Augmented Reality",
      "Python",
      "C#",
      "ReactJS",
      "TensorFlow",
      "AWS",
      "SCRUM",
    ],
    icon: "briefcase",
  },
  {
    title: "Cooperative Bachelor Student",
    duration: "2017 - 2020",
    subtitle: "Roche Diagnostics GmbH, Mannheim (GER)",
    details: [
      "6 x 3-monthly full-time rotations",
      "Trend analysis algorithm development for production QC",
      "Web application development for student rotations",
      "Cybersecurity assessment on Android's Dalvik VM for medical devices",
      "Genentech (South San Francisco) rotation: clinical trial survival analysis",
      "Bachelor thesis: Recommender system for global idea management",
    ],
    tags: [
      "Machine/Deep Learning",
      "Data Mining",
      "Trend Analysis",
      "Survival Analysis",
      "Algorithm Development",
      "Cybersecurity",
      "Natural Language Processing",
      "Web Development",
      "Java",
      "SQL",
      "R",
      "AngularJS",
    ],
    icon: "users",
  },
];

export const footer = [
  {
    label: "Contact",
    data: [
      {
        text: "Tim Schwirtlich (<i class='fa fa-linkedin'></i>)",
        link: "https://www.linkedin.com/in/timschwirtlich/",
      },
      {
        text: "PhD Student, Health Sciences Integrated Program",
        link: "https://www.feinberg.northwestern.edu/sites/hsip/curriculum/health-biomedical-informatics.html",
      },
      {
        text: "Health & Biomedical Informatics",
        link: "https://www.feinberg.northwestern.edu/sites/hsip/curriculum/health-biomedical-informatics.html",
      },
      {
        text: "Northwestern University Feinberg School of Medicine",
        link: "https://www.feinberg.northwestern.edu/sites/hsip/curriculum/health-biomedical-informatics.html",
      },
      {
        text: "633 N St Clair St, 20th floor, Chicago, IL 60611",
        link: "https://www.feinberg.northwestern.edu/sites/hsip/curriculum/health-biomedical-informatics.html",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Template adapted from <a href='https://github.com/vinaysomawat/vinaysomawat.github.io' target='_blank'>@vinaysomawat</a>",
    ],
  },
];
