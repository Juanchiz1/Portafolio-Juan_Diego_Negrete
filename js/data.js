/* =========================================================
   DATA.JS — ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA ACTUALIZAR
   EL SITIO (nuevos proyectos, certificaciones, habilidades, etc.)
   No necesitas tocar el HTML ni el CSS.

   IMPORTANTE — SITIO BILINGÜE:
   Los campos de texto que ve el visitante ahora son objetos con dos
   versiones: { es: "...", en: "..." }. Si solo escribes en español,
   copia el mismo texto en "en" o tradúcelo cuando puedas — el sitio
   nunca se rompe si dejas "en" igual a "es" temporalmente.
   ========================================================= */

/* ---------------------------------------------------------
   1) ROLES QUE SE ESCRIBEN EN EL HERO (efecto máquina de escribir)
--------------------------------------------------------- */
const ROLES = {
  es: [
    "Desarrollador Full-Stack Junior",
    "QA / Software Tester",
    "Beta Tester certificado — SuperWorldBox",
    "Buscando oportunidades remotas"
  ],
  en: [
    "Junior Full-Stack Developer",
    "QA / Software Tester",
    "Certified Beta Tester — SuperWorldBox",
    "Open to remote opportunities"
  ]
};

/* ---------------------------------------------------------
   2) LÍNEAS DEL "TEST SUITE" EN LA TERMINAL DEL HERO
--------------------------------------------------------- */
const TERMINAL_LINES = {
  es: [
    { type: "desc",    text: "describe('Juan Diego Negrete Portillo', () => {" },
    { type: "pass",    text: "Ingeniería de Sistemas y Telecom. — 9° sem." },
    { type: "pass",    text: "Inglés B2++" },
    { type: "pass",    text: "Beta Tester & Traductor — SuperWorldBox (2022–hoy)" },
    { type: "pass",    text: "Java · Python · JavaScript · SQL · PHP" },
    { type: "pass",    text: "React · Node.js · MySQL · PostgreSQL" },
    { type: "desc",    text: "});" },
    { type: "summary", text: "6 passing (0.42s)" }
  ],
  en: [
    { type: "desc",    text: "describe('Juan Diego Negrete Portillo', () => {" },
    { type: "pass",    text: "Systems & Telecom Engineering — 9th sem." },
    { type: "pass",    text: "English B2++" },
    { type: "pass",    text: "Beta Tester & Translator — SuperWorldBox (2022–now)" },
    { type: "pass",    text: "Java · Python · JavaScript · SQL · PHP" },
    { type: "pass",    text: "React · Node.js · MySQL · PostgreSQL" },
    { type: "desc",    text: "});" },
    { type: "summary", text: "6 passing (0.42s)" }
  ]
};

/* ---------------------------------------------------------
   2.5) EXPERIENCIA PROFESIONAL — formato "diff" de logros.
--------------------------------------------------------- */
const EXPERIENCE = [
  {
    role: {
      es: "Beta Tester & Traductor de Videojuegos (Inglés–Español)",
      en: "Beta Tester & Video Game Translator (English–Spanish)"
    },
    org: "Maxim Karpenko Studios — SuperWorldBox",
    period: { es: "Enero 2022 — Actualidad", en: "January 2022 — Present" },
    location: { es: "Remoto", en: "Remote" },
    tags: [
      { es: "QA", en: "QA" },
      { es: "Testing funcional", en: "Functional testing" },
      { es: "Traducción EN–ES", en: "EN–ES translation" },
      { es: "Reporte de bugs", en: "Bug reporting" }
    ],
    changes: {
      es: [
        "Ejecuté pruebas funcionales y de regresión sobre nuevas versiones del juego previo a su lanzamiento oficial en Steam.",
        "Detecté, documenté y prioricé bugs mediante reportes técnicos estructurados, colaborando directamente con el equipo de desarrollo.",
        "Validé mecánicas de juego y balance de sistemas, contribuyendo a la estabilidad y calidad general del producto.",
        "Traduje contenido del videojuego de inglés a español, garantizando precisión terminológica y coherencia.",
        "Reconocido oficialmente en los créditos del videojuego como tester del equipo."
      ],
      en: [
        "Ran functional and regression testing on new builds ahead of the official Steam release.",
        "Identified, documented and prioritized bugs through structured technical reports, working directly with the dev team.",
        "Validated game mechanics and systems balance, contributing to overall product stability and quality.",
        "Translated in-game content from English to Spanish, ensuring terminology accuracy and consistency.",
        "Officially credited in the game's credits as a team tester."
      ]
    }
  }
];

/* ---------------------------------------------------------
   3) PROYECTOS — repos reales de github.com/Juanchiz1
   imageMode: "contain" para logos/marca (con aire alrededor) o
   "cover" para una captura de pantalla a sangre completa.
--------------------------------------------------------- */
const PROJECTS = [
  {
    id: "agrogranja-laravel",
    title: { es: "AgroGranja — Panel de Gestión", en: "AgroGranja — Management Dashboard" },
    description: {
      es: "Sistema web para la gestión integral de fincas agropecuarias de pequeños y medianos productores de San Pelayo, Córdoba. Siete módulos (cultivos, animales, gastos, ingresos, agenda de tareas y reportes) más un submódulo especializado en ganado bovino: ordeño, lactancia, eventos reproductivos y protocolos sanitarios. Proyecto en equipo, con diseño mobile-first para conectividad limitada y documentación SRS bajo IEEE 830.",
      en: "Web system for integral management of small and medium cattle/agricultural farms in San Pelayo, Córdoba. Seven modules (crops, animals, expenses, income, task agenda and reports) plus a specialized cattle submodule: milking, lactation, reproductive events and sanitary protocols. Built with a team, mobile-first for limited connectivity, with IEEE 830 SRS documentation.",
    },
    tags: ["PHP", "Laravel", "MySQL"],
    status: { es: "En desarrollo", en: "In development" },
    icon: "fa-solid fa-seedling",
    thumbGradient: "linear-gradient(145deg, #0F3D2E 0%, #1C3049 100%)",
    github: "https://github.com/Juanchiz1/agrogranja-laravel",
    demo: "",
    image: "assets/projects/agrogranja-logo.png",
    imageMode: "contain"
  },
  {
    id: "agrogranja-mobile",
    title: { es: "AgroGranja — App Móvil", en: "AgroGranja — Mobile App" },
    description: {
      es: "Aplicación móvil complementaria del panel AgroGranja: funciona 100% offline con SQLite local y sincroniza automáticamente con el backend de Laravel en cuanto hay conexión — pensada para fincas con señal intermitente.",
      en: "Mobile companion app for the AgroGranja dashboard: works 100% offline with local SQLite and syncs automatically with the Laravel backend once there's a connection — built for farms with intermittent signal."
    },
    tags: ["JavaScript", "React Native", "SQLite"],
    status: { es: "En desarrollo", en: "In development" },
    icon: "fa-solid fa-mobile-screen-button",
    thumbGradient: "linear-gradient(145deg, #1C3049 0%, #23856D 100%)",
    github: "https://github.com/Juanchiz1/agrogranja-mobile",
    demo: "",
    image: "",
    imageMode: "cover"
  },
  {
    id: "mas-proyectos",
    title: { es: "Más proyectos en camino", en: "More projects on the way" },
    description: {
      es: "Sigo subiendo código a medida que avanzo en mis cursos y en la universidad. Entra a mi GitHub para ver el resto, incluidos ejercicios y proyectos de práctica.",
      en: "I keep pushing code as I move through my courses and coursework. Check my GitHub for the rest, including exercises and practice projects."
    },
    tags: [],
    status: { es: "GitHub", en: "GitHub" },
    icon: "fa-brands fa-github",
    thumbGradient: "linear-gradient(145deg, #16283B 0%, #10202F 100%)",
    github: "https://github.com/Juanchiz1",
    demo: "",
    image: "",
    imageMode: "cover",
    isPlaceholderCard: true
  }
];

/* Íconos (Devicon, con respaldo en Font Awesome) para cada etiqueta usada
   arriba en PROJECTS — se usan tanto en los chips de filtro como en las
   etiquetas de cada tarjeta, igual que en el stack técnico. */
const TAG_ICON_MAP = {
  "PHP":          "devicon-php-plain",
  "Laravel":      "devicon-laravel-plain",
  "MySQL":        "devicon-mysql-plain",
  "JavaScript":   "devicon-javascript-plain",
  "React Native": "devicon-react-original",
  "SQLite":       "devicon-sqlite-plain",
  "React":        "devicon-react-original",
  "Node.js":      "devicon-nodejs-plain",
  "Java":         "devicon-java-plain",
  "Python":       "devicon-python-plain",
  "HTML":         "devicon-html5-plain",
  "CSS":          "devicon-css3-plain",
  "SQL":          "fa-solid fa-database"
};

/* ---------------------------------------------------------
   4a) FORMACIÓN ACADÉMICA — institucional, en curso
--------------------------------------------------------- */
const FORMACION = [
  {
    hash: "c5e3b21",
    date: { es: "Mar 2023 — Dic 2027", en: "Mar 2023 — Dec 2027" },
    title: {
      es: "Ingeniería de Sistemas y Telecomunicaciones (9° semestre)",
      en: "Systems and Telecommunications Engineering (9th semester)"
    },
    org: { es: "Universidad de Córdoba, Montería", en: "Universidad de Córdoba, Montería" },
    status: "progress"
  },
  {
    hash: "d4e5f60",
    date: { es: "2017 — 2025", en: "2017 — 2025" },
    title: { es: "Curso de Inglés — Certificado B2++ (nivel actual C1)", en: "English Course — B2++ Certified (current level C1)" },
    org: "Universidad de Córdoba",
    status: "done"
  }
];

/* ---------------------------------------------------------
   4b) CERTIFICACIONES — cursos y certificados independientes
--------------------------------------------------------- */
const CERTIFICACIONES = [
  {
    hash: "7e2c9d4",
    date: { es: "2023 — 2025", en: "2023 — 2025" },
    title: { es: "Certificación Full-Stack Developer", en: "Full-Stack Developer Certification" },
    org: "Mimo",
    status: "done"
  },
  {
    hash: "4f8a01c",
    date: { es: "2025 — Presente", en: "2025 — Present" },
    title: { es: "100 Days of Code: The Complete Python Pro Bootcamp (57h)", en: "100 Days of Code: The Complete Python Pro Bootcamp (57h)" },
    org: "Udemy",
    status: "progress"
  },
  {
    hash: "9b0d2e5",
    date: { es: "2025 — Presente", en: "2025 — Present" },
    title: { es: "Certificación Avanzada en Java — JDK 21 (150h)", en: "Advanced Java Certification — JDK 21 (150h)" },
    org: "Udemy",
    status: "progress"
  },
  {
    hash: "1d6f7a3",
    date: { es: "2025 — Presente", en: "2025 — Present" },
    title: {
      es: "Desarrollo Web Completo: HTML5, CSS3, JS, AJAX, PHP y MySQL (83h)",
      en: "Complete Web Development: HTML5, CSS3, JS, AJAX, PHP and MySQL (83h)"
    },
    org: "Udemy",
    status: "progress"
  },
  {
    hash: "0a1b2c3",
    date: { es: "Próximamente", en: "Coming up" },
    title: { es: "AWS Cloud Practitioner", en: "AWS Cloud Practitioner" },
    org: "Amazon Web Services",
    status: "planned"
  }
];

/* ---------------------------------------------------------
   5) HABILIDADES PRINCIPALES (con nivel, 0-100, como "cobertura")
--------------------------------------------------------- */
const SKILLS = [
  { name: "QA / Testing", level: 90 },
  { name: "Java",         level: 78 },
  { name: "JavaScript",   level: 80 },
  { name: "SQL",          level: 78 },
  { name: "Python",       level: 72 },
  { name: "React",        level: 68 },
  { name: "Node.js",      level: 65 },
  { name: "PHP",          level: 62 }
];

/* ---------------------------------------------------------
   6) STACK TECNOLÓGICO COMPLETO — grilla de íconos por categoría.
--------------------------------------------------------- */
const TECH_STACK = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    items: [
      { name: "Java",       devicon: "devicon-java-plain" },
      { name: "Python",     devicon: "devicon-python-plain" },
      { name: "JavaScript", devicon: "devicon-javascript-plain" },
      { name: "PHP",        devicon: "devicon-php-plain" },
      { name: "HTML5",      devicon: "devicon-html5-plain" },
      { name: "CSS3",       devicon: "devicon-css3-plain" },
      { name: "SQL",        devicon: "", fallbackIcon: "fa-solid fa-database" }
    ]
  },
  {
    category: { es: "Frameworks y librerías", en: "Frameworks & libraries" },
    items: [
      { name: "React",    devicon: "devicon-react-original" },
      { name: "Node.js",  devicon: "devicon-nodejs-plain" },
      { name: "Express",  devicon: "devicon-express-original" },
      { name: "Angular",  devicon: "devicon-angularjs-plain" },
      { name: "Laravel",  devicon: "devicon-laravel-plain" }
    ]
  },
  {
    category: { es: "Bases de datos", en: "Databases" },
    items: [
      { name: "MySQL",      devicon: "devicon-mysql-plain" },
      { name: "PostgreSQL", devicon: "devicon-postgresql-plain" }
    ]
  },
  {
    category: { es: "Herramientas, IDEs y metodologías", en: "Tools, IDEs & methodologies" },
    items: [
      { name: "Git",             devicon: "devicon-git-plain" },
      { name: "GitHub",          devicon: "devicon-github-original" },
      { name: "VS Code",         devicon: "devicon-vscode-plain" },
      { name: "IntelliJ IDEA",   devicon: "devicon-intellij-plain" },
      { name: "PyCharm",         devicon: "devicon-pycharm-plain" },
      { name: "NetBeans",        devicon: "", fallbackIcon: "fa-solid fa-window-restore" },
      { name: "Chrome DevTools", devicon: "devicon-chrome-plain" },
      { name: "Scrum / Kanban",  devicon: "", fallbackIcon: "fa-solid fa-table-columns" }
    ]
  }
];

/* ---------------------------------------------------------
   7) SERVICIOS / COTIZA TU PROYECTO
   Se muestra en la sección donde negocios o clientes piden una
   cotización. Edita "SERVICES" para cambiar lo que ofreces, y
   "PROCESS_STEPS" para cambiar tu proceso de trabajo.
--------------------------------------------------------- */
const SERVICES = [
  {
    icon: "fa-solid fa-globe",
    title: { es: "Sitios y landing pages", en: "Websites & landing pages" },
    desc: {
      es: "Sitios a medida para negocios locales o personales: presentación de tu marca, catálogo de servicios o portafolio.",
      en: "Custom sites for local or personal businesses: brand presentation, service catalog or portfolio."
    }
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: { es: "Aplicaciones web a medida", en: "Custom web applications" },
    desc: {
      es: "Herramientas internas o de cara al cliente: gestión de tareas, catálogos, formularios, paneles de datos.",
      en: "Internal or client-facing tools: task management, catalogs, forms, data dashboards."
    }
  },
  {
    icon: "fa-solid fa-vial-circle-check",
    title: { es: "QA y testing de software", en: "QA & software testing" },
    desc: {
      es: "Pruebas funcionales y de regresión, reporte estructurado de bugs, verificación de builds antes de tu lanzamiento.",
      en: "Functional and regression testing, structured bug reporting, build verification before your launch."
    }
  },
  {
    icon: "fa-solid fa-language",
    title: { es: "Traducción técnica EN–ES", en: "EN–ES technical translation" },
    desc: {
      es: "Traducción de contenido, documentación o interfaces de software, con precisión terminológica.",
      en: "Translation of content, documentation or software interfaces, with terminology accuracy."
    }
  }
];

const PROCESS_STEPS = [
  { es: "Me cuentas tu idea o necesidad", en: "You tell me your idea or need" },
  { es: "Te envío una propuesta y cotización", en: "I send you a proposal and quote" },
  { es: "Desarrollo con avances y comunicación constante", en: "I build it with steady progress and communication" },
  { es: "Entrega, pruebas y soporte posterior", en: "Delivery, testing and follow-up support" }
];

/* ---------------------------------------------------------
   8) HOBBIES / FUERA DEL CÓDIGO
--------------------------------------------------------- */
const HOBBIES = [
  { icon: "fa-brands fa-youtube", label: { es: "Canal de YouTube — Tiempo Con Juan Diego", en: "YouTube channel — Tiempo Con Juan Diego" } },
  { icon: "fa-solid fa-dumbbell", label: { es: "Gimnasio y disciplina física", en: "Gym & physical discipline" } },
  { icon: "fa-solid fa-tree", label: { es: "Naturaleza y aire libre", en: "Nature & the outdoors" } },
  { icon: "fa-solid fa-book-open", label: { es: "Aprender cosas nuevas todo el tiempo", en: "Always learning something new" } },
  { icon: "fa-solid fa-lightbulb", label: { es: "Innovación y nuevas ideas", en: "Innovation & new ideas" } },
  { icon: "fa-solid fa-flask", label: { es: "Ciencia en general", en: "Science, in general" } }
];
