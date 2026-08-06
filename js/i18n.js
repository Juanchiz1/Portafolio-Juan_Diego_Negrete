/* =========================================================
   I18N.JS — Sitio bilingüe ES/EN.
   - Detecta el idioma del navegador la primera vez que alguien entra.
   - Guarda la preferencia si el visitante cambia el idioma manualmente.
   - Traduce todo el texto estático marcado con data-i18n en index.html.
   - El contenido dinámico (proyectos, experiencia, etc.) se traduce en
     main.js usando los objetos { es, en } de data.js.
   ========================================================= */

const UI_STRINGS = {
  "nav.inicio":      { es: "Inicio", en: "Home" },
  "nav.sobremi":     { es: "Sobre mí", en: "About" },
  "nav.experiencia": { es: "Experiencia", en: "Experience" },
  "nav.proyectos":   { es: "Proyectos", en: "Projects" },
  "nav.formacion":   { es: "Formación", en: "Education" },
  "nav.habilidades": { es: "Habilidades", en: "Skills" },
  "nav.servicios":   { es: "Cotiza tu proyecto", en: "Get a quote" },
  "nav.hobbies":     { es: "Fuera del código", en: "Off the clock" },
  "nav.contacto":    { es: "Contacto", en: "Contact" },

  "hero.desc": {
    es: "Estudiante de noveno semestre de Ingeniería de Sistemas y Telecomunicaciones en la Universidad de Córdoba, con formación práctica en desarrollo full-stack. Construyo software y también lo pongo a prueba: soy <strong>Beta Tester y traductor EN→ES acreditado de SuperWorldBox</strong> (Maxim Karpenko Studios), reconocido en los créditos oficiales del estudio, con inglés B2++ (nivel actual C1) para trabajar con equipos remotos e internacionales.",
    en: "Ninth-semester Systems and Telecommunications Engineering student at Universidad de Córdoba, with hands-on full-stack development experience. I build software and I also put it to the test: I'm an <strong>accredited Beta Tester and EN→ES translator for SuperWorldBox</strong> (Maxim Karpenko Studios), officially credited by the studio, with B2++ English (current level C1) to work with remote, international teams."
  },
  "hero.verProyectos": { es: "Ver proyectos", en: "View projects" },
  "hero.descargarCV":  { es: "Descargar CV", en: "Download CV" },

  "about.eyebrow": { es: "// 02 · sobre-mi", en: "// 02 · about" },
  "about.title":   { es: "Un poco de contexto", en: "A bit of context" },
  "about.p1": {
    es: "Soy Juan Diego, de Montería, Colombia. Curso noveno semestre de Ingeniería de Sistemas y Telecomunicaciones en la Universidad de Córdoba y estoy en la recta final antes de graduarme, buscando activamente mi primera oportunidad formal como desarrollador junior o QA tester — con preferencia por trabajo remoto, dado el mercado tech local limitado en Montería.",
    en: "I'm Juan Diego, from Montería, Colombia. I'm in my ninth semester of Systems and Telecommunications Engineering at Universidad de Córdoba, heading into my final stretch before graduating, actively looking for my first formal role as a junior developer or QA tester — preferably remote, given the limited local tech market in Montería."
  },
  "about.p2": {
    es: "Mi punto diferencial es que ya tengo experiencia real fuera del aula: desde enero de 2022 soy <strong>Beta Tester y traductor EN→ES</strong> del videojuego <strong>SuperWorldBox</strong> para Maxim Karpenko Studios, ejecutando pruebas funcionales y de regresión antes de cada lanzamiento en Steam, documentando bugs de forma estructurada junto al equipo de desarrollo y traduciendo contenido del juego. Estoy <strong>reconocido oficialmente en los créditos del videojuego</strong> como tester del equipo — experiencia real de QA en un entorno internacional y remoto.",
    en: "My differentiator is that I already have real experience outside the classroom: since January 2022 I've been a <strong>Beta Tester and EN→ES translator</strong> for the video game <strong>SuperWorldBox</strong>, made by Maxim Karpenko Studios, running functional and regression testing ahead of every Steam release, documenting bugs in a structured way alongside the dev team, and translating in-game content. I'm <strong>officially credited in the game's credits</strong> as a team tester — real QA experience in an international, remote environment."
  },
  "about.p3": {
    es: "Manejo <strong>Java, Python, JavaScript, SQL y PHP</strong>, con desarrollo full-stack en <strong>React, Node.js, HTML5/CSS3</strong> y bases de conocimiento en Angular y Laravel. Trabajo con MySQL y PostgreSQL, Git/GitHub, y metodologías ágiles (Scrum, Kanban) en equipos remotos. Mi inglés es nivel <strong>B2++</strong> (nivel actual C1), lo que me permite trabajar sin fricción con equipos y clientes internacionales.",
    en: "I work with <strong>Java, Python, JavaScript, SQL and PHP</strong>, doing full-stack development in <strong>React, Node.js, HTML5/CSS3</strong>, with working knowledge of Angular and Laravel. I use MySQL and PostgreSQL, Git/GitHub, and agile methodologies (Scrum, Kanban) in remote teams. My English is <strong>B2++</strong> (current level C1), which lets me work without friction with international teams and clients."
  },
  "about.fact.formacion.title": { es: "Ing. de Sistemas y Telecom.", en: "Systems & Telecom Eng." },
  "about.fact.formacion.sub":   { es: "Universidad de Córdoba — 9° semestre", en: "Universidad de Córdoba — 9th semester" },
  "about.fact.ingles.title":    { es: "Inglés B2++", en: "English B2++" },
  "about.fact.ingles.sub":      { es: "Nivel actual C1 — equipos internacionales", en: "Current level C1 — international teams" },
  "about.fact.ubicacion.title": { es: "Montería, Colombia", en: "Montería, Colombia" },
  "about.fact.ubicacion.sub":   { es: "Disponible para trabajo remoto", en: "Available for remote work" },
  "about.fact.disponibilidad.title": { es: "Disponibilidad inmediata", en: "Immediate availability" },
  "about.fact.disponibilidad.sub":   { es: "Junior Dev · QA · Prácticas", en: "Junior Dev · QA · Internships" },

  "experiencia.eyebrow": { es: "// 03 · experiencia", en: "// 03 · experience" },
  "experiencia.title":   { es: "Experiencia profesional", en: "Professional experience" },
  "experiencia.subtitle":{ es: "Lo que he aportado en cada rol, como un registro de cambios.", en: "What I've contributed in each role, as a changelog." },

  "proyectos.eyebrow": { es: "// 04 · proyectos", en: "// 04 · projects" },
  "proyectos.title":   { es: "Proyectos", en: "Projects" },
  "proyectos.subtitle":{ es: "Filtra por tecnología para ver justo lo que te interesa revisar.", en: "Filter by technology to see exactly what you want to review." },
  "proyectos.empty":   { es: "No hay proyectos con esa combinación de filtros todavía — pronto habrá más 🙂", en: "No projects match that filter combination yet — more coming soon 🙂" },
  "proyectos.filtroTodos": { es: "Todos", en: "All" },
  "proyectos.codigo":  { es: "Código", en: "Code" },
  "proyectos.demo":    { es: "Demo", en: "Demo" },

  "trayectoria.eyebrow": { es: "// 05 · trayectoria", en: "// 05 · education" },
  "trayectoria.title":   { es: "Formación y certificaciones", en: "Education & certifications" },
  "trayectoria.subtitle":{ es: "Mi trayectoria, en formato de historial de commits.", en: "My background, as a commit history." },
  "trayectoria.listo":   { es: "listo", en: "done" },
  "trayectoria.enCurso": { es: "en curso", en: "in progress" },
  "trayectoria.proximo": { es: "próximo", en: "upcoming" },

  "habilidades.eyebrow": { es: "// 06 · habilidades", en: "// 06 · skills" },
  "habilidades.title":   { es: "Stack técnico", en: "Technical stack" },
  "habilidades.subtitle":{ es: "Cobertura de mi stack principal, medida como en un reporte de pruebas.", en: "Coverage of my core stack, measured like a test report." },
  "habilidades.techTitle": { es: "Lenguajes, frameworks y herramientas", en: "Languages, frameworks & tools" },

  "servicios.eyebrow": { es: "// 07 · cotiza-tu-proyecto", en: "// 07 · get-a-quote" },
  "servicios.title":   { es: "Cotiza tu proyecto", en: "Get a quote" },
  "servicios.subtitle": {
    es: "¿Tienes un negocio, un establecimiento o una idea que necesita software? Cuéntame qué necesitas y te envío una propuesta sin compromiso.",
    en: "Do you have a business or an idea that needs software? Tell me what you need and I'll send you a no-obligation proposal."
  },
  "servicios.procesoTitle": { es: "Cómo trabajamos", en: "How we'll work together" },
  "servicios.formTitle": { es: "Cuéntame sobre tu proyecto", en: "Tell me about your project" },
  "servicios.nombre": { es: "// nombre", en: "// name" },
  "servicios.negocio": { es: "// negocio o empresa (opcional)", en: "// business or company (optional)" },
  "servicios.email": { es: "// email", en: "// email" },
  "servicios.tipoProyecto": { es: "// tipo de proyecto", en: "// project type" },
  "servicios.tipoProyecto.placeholder": { es: "Selecciona una opción", en: "Select an option" },
  "servicios.tipoProyecto.web": { es: "Sitio web / landing page", en: "Website / landing page" },
  "servicios.tipoProyecto.app": { es: "Aplicación web a medida", en: "Custom web application" },
  "servicios.tipoProyecto.qa": { es: "QA / testing de software", en: "QA / software testing" },
  "servicios.tipoProyecto.traduccion": { es: "Traducción técnica", en: "Technical translation" },
  "servicios.tipoProyecto.otro": { es: "Otro", en: "Other" },
  "servicios.presupuesto": { es: "// presupuesto estimado (opcional)", en: "// estimated budget (optional)" },
  "servicios.descripcion": { es: "// descripción del proyecto", en: "// project description" },
  "servicios.descripcion.placeholder": { es: "Cuéntame qué necesitas, para cuándo, y cualquier detalle relevante...", en: "Tell me what you need, your timeline, and any relevant details..." },
  "servicios.enviar": { es: "solicitar_cotizacion()", en: "request_quote()" },

  "hobbies.eyebrow": { es: "// 08 · fuera-del-código", en: "// 08 · off-the-clock" },
  "hobbies.title":   { es: "Fuera del código", en: "Off the clock" },
  "hobbies.subtitle": {
    es: "Soy de Córdoba, Colombia. Cuando no estoy programando o probando software, esto es lo que me mueve.",
    en: "I'm from Córdoba, Colombia. When I'm not coding or testing software, this is what keeps me going."
  },
  "hobbies.p1": {
    es: "Tengo un canal de YouTube, <strong>Tiempo Con Juan Diego</strong>, donde comparto contenido a mi manera. Fuera de la pantalla, voy seguido al gimnasio — me gusta la disciplina que exige — y trato de pasar tiempo en la naturaleza siempre que puedo, algo fácil de hacer creciendo en Córdoba.",
    en: "I have a YouTube channel, <strong>Tiempo Con Juan Diego</strong>, where I share content my own way. Away from the screen, I go to the gym regularly — I like the discipline it takes — and I try to spend time in nature whenever I can, which is easy growing up in Córdoba."
  },
  "hobbies.p2": {
    es: "Soy curioso por naturaleza: me gusta aprender cosas nuevas todo el tiempo, innovar y explorar ideas, y la ciencia en general me atrae casi tanto como la programación. Esa misma curiosidad es la que aplico cuando pruebo software: siempre preguntándome qué más podría fallar.",
    en: "I'm naturally curious: I like learning new things all the time, innovating and exploring ideas, and science in general appeals to me almost as much as programming does. That same curiosity is what I bring to testing software: always asking what else could break."
  },
  "hobbies.imgAlt": { es: "Juan Diego al aire libre, en un campo de Córdoba", en: "Juan Diego outdoors, in a field in Córdoba" },

  "contacto.eyebrow": { es: "// 09 · contacto", en: "// 09 · contact" },
  "contacto.title":   { es: "Hablemos", en: "Let's talk" },
  "contacto.subtitle":{
    es: "¿Buscas sumar a alguien junior con ganas y experiencia real en QA, o necesitas un desarrollador para tu proyecto? Escríbeme.",
    en: "Looking to add a junior with drive and real QA experience, or need a developer for your project? Reach out."
  },
  "contacto.nombre": { es: "// nombre", en: "// name" },
  "contacto.email":  { es: "// email", en: "// email" },
  "contacto.mensaje":{ es: "// mensaje", en: "// message" },
  "contacto.mensaje.placeholder": { es: "Cuéntame sobre la vacante o el proyecto...", en: "Tell me about the role or the project..." },
  "contacto.enviar": { es: "enviar_mensaje()", en: "send_message()" },
  "contacto.correo": { es: "Correo", en: "Email" },
  "contacto.telefono": { es: "Teléfono", en: "Phone" },
  "contacto.estado": { es: "Disponible para roles remotos y freelance", en: "Available for remote roles and freelance work" },
  "contacto.noteSent": { es: "Se abrió tu cliente de correo con el mensaje listo para enviar ✓", en: "Your email client opened with the message ready to send ✓" },

  "footer.built": { es: "Construido con HTML, CSS y JavaScript · alojado en GitHub Pages", en: "Built with HTML, CSS and JavaScript · hosted on GitHub Pages" }
};

let currentLang = "es";

function detectInitialLang(){
  try{
    const saved = localStorage.getItem("portfolio_lang");
    if(saved === "es" || saved === "en") return saved;
  } catch(e){ /* localStorage puede estar bloqueado; seguimos sin persistencia */ }

  const nav = (navigator.language || navigator.userLanguage || "es").toLowerCase();
  return nav.startsWith("en") ? "en" : "es";
}

function t(key){
  const entry = UI_STRINGS[key];
  if(!entry) return "";
  return entry[currentLang] || entry.es || "";
}

/* Devuelve el texto en el idioma actual desde un objeto { es, en } o
   un string plano (para datos de data.js que aún no estén traducidos). */
function pick(field){
  if(field == null) return "";
  if(typeof field === "string") return field;
  return field[currentLang] || field.es || field.en || "";
}

function applyStaticTranslations(){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if(!value) return;
    if(el.hasAttribute("data-i18n-html")){
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = t(key);
    if(value) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    const value = t(key);
    if(value) el.setAttribute("alt", value);
  });

  document.documentElement.lang = currentLang;

  // Botón de descarga de CV: apunta al PDF del idioma activo
  const cvBtn = document.getElementById("cvDownload");
  if(cvBtn){
    cvBtn.href = currentLang === "en"
      ? "assets/CV-Juan-Diego-Negrete-Portillo-EN.pdf"
      : "assets/CV-Juan-Diego-Negrete-Portillo.pdf";
  }

  // Botón de cambio de idioma
  const langBtn = document.getElementById("langToggle");
  if(langBtn){
    langBtn.textContent = currentLang === "en" ? "ES" : "EN";
    langBtn.setAttribute("aria-label", currentLang === "en" ? "Cambiar a español" : "Switch to English");
  }
}

function setLanguage(lang){
  currentLang = (lang === "en") ? "en" : "es";
  try{ localStorage.setItem("portfolio_lang", currentLang); } catch(e){}
  applyStaticTranslations();
  // Vuelve a pintar todo el contenido dinámico en el nuevo idioma
  if(typeof rerenderDynamicContent === "function") rerenderDynamicContent();
}

function initI18n(){
  currentLang = detectInitialLang();
  applyStaticTranslations();

  const langBtn = document.getElementById("langToggle");
  if(langBtn){
    langBtn.addEventListener("click", () => {
      setLanguage(currentLang === "en" ? "es" : "en");
    });
  }
}
