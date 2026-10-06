/* =========================================================
   MAIN.JS — Renderiza la información de data.js y maneja
   interacciones (menú, idioma, filtros, animaciones, formularios).
   No necesitas editar este archivo para actualizar contenido:
   edita js/data.js. Para textos fijos de la interfaz, edita js/i18n.js.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Cada paso corre de forma aislada: si uno falla, no bloquea el resto del sitio.
  const steps = [
    initI18n,          // detecta idioma y traduce el texto estático (js/i18n.js)
    initNav,
    initScrollProgress,
    initTypingRole,
    initTerminal,
    renderExperience,
    renderProjects,
    renderTimeline,
    renderSkills,
    renderTechStack,
    renderServices,
    renderHobbies,
    initReveal,
    initContactForm,
    initQuoteForm
  ];
  steps.forEach(fn => {
    try { fn(); } catch(err){ console.error(`Error en ${fn.name}:`, err); }
  });
});

/* Se llama desde i18n.js cada vez que el visitante cambia de idioma,
   para volver a pintar todo el contenido que viene de data.js. */
function rerenderDynamicContent(){
  const steps = [initTypingRole, initTerminal, renderExperience, renderProjects, renderTimeline, renderServices, renderHobbies];
  steps.forEach(fn => {
    try { fn(); } catch(err){ console.error(`Error en ${fn.name}:`, err); }
  });
}

/* ---------------- NAV ---------------- */
function initNav(){
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  });

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Resaltar el link activo según la sección visible
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav__link");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        navLinks.forEach(l => l.classList.remove("is-active"));
        const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if(active) active.classList.add("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => observer.observe(s));
}

/* ---------------- SCROLL PROGRESS BAR ---------------- */
function initScrollProgress(){
  const bar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + "%";
  });
}

/* ---------------- TYPING EFFECT (roles) ---------------- */
let typingTimeoutId = null;
function initTypingRole(){
  const el = document.getElementById("roleTyped");
  if(!el || typeof ROLES === "undefined") return;
  if(typingTimeoutId) clearTimeout(typingTimeoutId);

  const roles = ROLES[currentLang] || ROLES.es;
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(prefersReduced){
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick(){
    const current = roles[roleIndex];
    if(!deleting){
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if(charIndex === current.length){
        deleting = true;
        typingTimeoutId = setTimeout(tick, 1500);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if(charIndex === 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    typingTimeoutId = setTimeout(tick, deleting ? 35 : 55);
  }
  tick();
}

/* ---------------- TERMINAL TEST SUITE ---------------- */
function initTerminal(){
  const body = document.getElementById("terminalBody");
  if(!body || typeof TERMINAL_LINES === "undefined") return;

  const lines = TERMINAL_LINES[currentLang] || TERMINAL_LINES.es;
  body.innerHTML = "";

  lines.forEach((line, i) => {
    const div = document.createElement("div");
    div.className = "terminal__line";
    div.style.animationDelay = `${0.25 + i * 0.18}s`;

    if(line.type === "pass"){
      div.classList.add("terminal__line--pass");
      div.innerHTML = `<span class="terminal__check">✓</span>${escapeHtml(line.text)}`;
    } else if(line.type === "summary"){
      div.classList.add("terminal__line--summary");
      div.textContent = line.text;
    } else {
      div.classList.add("terminal__line--dim");
      div.textContent = line.text;
    }
    body.appendChild(div);
  });
}

/* ---------------- EXPERIENCE ---------------- */
function renderExperience(){
  const wrap = document.getElementById("experienceList");
  if(!wrap || typeof EXPERIENCE === "undefined") return;

  wrap.innerHTML = EXPERIENCE.map(job => `
    <article class="job">
      <div class="job__head">
        <div>
          <h3 class="job__role">${escapeHtml(pick(job.role))}</h3>
          <p class="job__org">${escapeHtml(pick(job.org))}</p>
        </div>
        <div class="job__meta">
          <span class="job__period"><i class="fa-regular fa-calendar"></i> ${escapeHtml(pick(job.period))}</span>
          <span class="job__location"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(pick(job.location))}</span>
        </div>
      </div>
      <div class="job__tags">
        ${job.tags.map(t => `<span class="tag">${escapeHtml(pick(t))}</span>`).join("")}
      </div>
      <ul class="diff">
        ${(job.changes[currentLang] || job.changes.es).map(c => `<li class="diff__line"><span class="diff__plus">+</span>${escapeHtml(c)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

/* ---------------- PROJECTS + FILTERS ---------------- */
function renderProjects(){
  const grid = document.getElementById("projectsGrid");
  const filtersWrap = document.getElementById("filters");
  const emptyMsg = document.getElementById("projectsEmpty");
  if(!grid || typeof PROJECTS === "undefined") return;

  const allLabel = t("proyectos.filtroTodos") || "Todos";
  const allTags = [allLabel, ...new Set(PROJECTS.flatMap(p => p.tags))];
  const iconMap = typeof TAG_ICON_MAP !== "undefined" ? TAG_ICON_MAP : {};

  filtersWrap.innerHTML = allTags.map((tag, i) => {
    const icon = iconMap[tag];
    const iconHtml = icon
      ? (icon.startsWith("devicon-") ? `<i class="${escapeHtml(icon)} colored"></i>` : `<i class="${escapeHtml(icon)}"></i>`)
      : "";
    return `<button class="filter-chip ${i === 0 ? "is-active" : ""}" data-tag="${escapeHtml(tag)}">${iconHtml}${escapeHtml(tag)}</button>`;
  }).join("");

  function draw(activeTag){
    const filtered = activeTag === allLabel
      ? PROJECTS
      : PROJECTS.filter(p => p.tags.includes(activeTag));

    grid.innerHTML = filtered.map(p => projectCardHTML(p)).join("");
    emptyMsg.hidden = filtered.length !== 0;
  }

  filtersWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if(!btn) return;
    filtersWrap.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("is-active"));
    btn.classList.add("is-active");
    draw(btn.dataset.tag);
  });

  draw(allLabel);
}

function projectCardHTML(p){
  const title = pick(p.title);
  const fit = p.imageMode === "contain" ? "contain" : "cover";
  const padding = p.imageMode === "contain" ? "padding:1.6rem;" : "";
  const thumbInner = p.image
    ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(title)}" style="width:100%;height:100%;object-fit:${fit};position:absolute;inset:0;${padding}box-sizing:border-box;">`
    : `<i class="${escapeHtml(p.icon || "fa-solid fa-code")}"></i>`;

  const demoLink = p.demo
    ? `<a href="${escapeHtml(p.demo)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${escapeHtml(t("proyectos.demo") || "Demo")}</a>`
    : "";

  const iconMap = typeof TAG_ICON_MAP !== "undefined" ? TAG_ICON_MAP : {};
  const tagsHtml = p.tags.map(tg => {
    const icon = iconMap[tg];
    const iconHtml = icon
      ? (icon.startsWith("devicon-") ? `<i class="${escapeHtml(icon)} colored"></i> ` : `<i class="${escapeHtml(icon)}"></i> `)
      : "";
    return `<span class="tag">${iconHtml}${escapeHtml(tg)}</span>`;
  }).join("");

  const cardClass = p.isPlaceholderCard ? "project-card project-card--placeholder" : "project-card";
  const codeLabel = p.isPlaceholderCard ? (t("proyectos.verGithub") || "Ver GitHub") : (t("proyectos.codigo") || "Código");

  return `
  <article class="${cardClass}">
    <div class="project-card__thumb" data-status="${escapeHtml(pick(p.status))}" style="background:${p.thumbGradient || "var(--ink)"};">
      ${thumbInner}
    </div>
    <div class="project-card__body">
      <h3 class="project-card__title">${escapeHtml(title)}</h3>
      <p class="project-card__desc">${escapeHtml(pick(p.description))}</p>
      ${tagsHtml ? `<div class="project-card__tags">${tagsHtml}</div>` : ""}
      <div class="project-card__links">
        <a href="${escapeHtml(p.github)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> ${escapeHtml(codeLabel)}</a>
        ${demoLink}
      </div>
    </div>
  </article>`;
}

/* ---------------- FORMACIÓN Y CERTIFICACIONES / COMMIT LOG ---------------- */
function renderCommitLog(containerId, items){
  const wrap = document.getElementById(containerId);
  if(!wrap || !items) return;

  const statusLabel = {
    done: t("trayectoria.listo") || "listo",
    progress: t("trayectoria.enCurso") || "en curso",
    planned: t("trayectoria.proximo") || "próximo"
  };
  const statusClass = { done: "", progress: "is-progress", planned: "is-planned" };

  wrap.innerHTML = items.map(item => `
    <div class="commit ${statusClass[item.status] || ""}">
      <div class="commit__meta">
        <span class="commit__hash">#${escapeHtml(item.hash)}</span>
        <span>${escapeHtml(pick(item.date))}</span>
        <span class="commit__badge">${escapeHtml(statusLabel[item.status] || "")}</span>
      </div>
      <div class="commit__title">${escapeHtml(pick(item.title))}</div>
      <div class="commit__org">${escapeHtml(pick(item.org))}</div>
    </div>
  `).join("");
}

function renderTimeline(){
  if(typeof FORMACION !== "undefined") renderCommitLog("formacionLog", FORMACION);
  if(typeof CERTIFICACIONES !== "undefined") renderCommitLog("certificacionesLog", CERTIFICACIONES);
}

/* ---------------- SKILLS ---------------- */
function renderSkills(){
  const grid = document.getElementById("skillsGrid");
  if(!grid || typeof SKILLS === "undefined") return;

  grid.innerHTML = SKILLS.map(s => `
    <div class="skill">
      <div class="skill__top"><span>${escapeHtml(s.name)}</span><span>${s.level}%</span></div>
      <div class="skill__bar"><div class="skill__fill" data-level="${s.level}"></div></div>
    </div>
  `).join("");

  // Animar barras cuando entran en pantalla
  const bars = grid.querySelectorAll(".skill__fill");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.width = entry.target.dataset.level + "%";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => observer.observe(b));
}

/* ---------------- TECH STACK (icon grid) ---------------- */
function renderTechStack(){
  const wrap = document.getElementById("techStackGroups");
  if(!wrap || typeof TECH_STACK === "undefined") return;

  wrap.innerHTML = TECH_STACK.map(group => `
    <div class="techgroup">
      <p class="techgroup__label">${escapeHtml(pick(group.category))}</p>
      <div class="techgroup__grid">
        ${group.items.map(item => `
          <div class="techitem" title="${escapeHtml(item.name)}">
            <span class="techitem__icon">
              ${item.devicon
                ? `<i class="${escapeHtml(item.devicon)} colored"></i>`
                : `<i class="${escapeHtml(item.fallbackIcon || "fa-solid fa-code")}"></i>`}
            </span>
            <span class="techitem__name">${escapeHtml(item.name)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ---------------- SERVICES / COTIZA TU PROYECTO ---------------- */
function renderServices(){
  const grid = document.getElementById("servicesGrid");
  const steps = document.getElementById("processSteps");

  if(grid && typeof SERVICES !== "undefined"){
    grid.innerHTML = SERVICES.map(s => `
      <div class="service-card">
        <i class="${escapeHtml(s.icon)}"></i>
        <h3>${escapeHtml(pick(s.title))}</h3>
        <p>${escapeHtml(pick(s.desc))}</p>
      </div>
    `).join("");
  }

  if(steps && typeof PROCESS_STEPS !== "undefined"){
    steps.innerHTML = PROCESS_STEPS.map((s, i) => `
      <li class="process__step">
        <span class="process__num">${String(i + 1).padStart(2, "0")}</span>
        <span>${escapeHtml(pick(s))}</span>
      </li>
    `).join("");
  }
}

/* ---------------- HOBBIES ---------------- */
function renderHobbies(){
  const wrap = document.getElementById("hobbiesList");
  if(!wrap || typeof HOBBIES === "undefined") return;

  wrap.innerHTML = HOBBIES.map(h => `
    <div class="hobby-chip">
      <i class="${escapeHtml(h.icon)}"></i>
      <span>${escapeHtml(pick(h.label))}</span>
    </div>
  `).join("");
}

/* ---------------- SCROLL REVEAL ---------------- */
function initReveal(){
  const targets = document.querySelectorAll(
    ".about, .experience, .projects-grid, .commitlog, .skills, .techstack, .services-grid, .process, .quote-form-wrap, .hobbies, .contact, .filters, .section__title, .section__subtitle"
  );
  targets.forEach(t => t.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => observer.observe(t));
}

/* ---------------- CONTACT FORM ----------------
   Envío simple vía mailto (sin backend, funciona en hosting gratuito).
   Si más adelante quieres un formulario "de verdad" sin recargar la página,
   puedes conectar este mismo <form> a un servicio gratuito como Formspree
   (https://formspree.io) cambiando el action del <form> en index.html.
------------------------------------------------- */
function initContactForm(){
  const form = document.getElementById("contactForm");
  const note = document.getElementById("contactNote");
  if(!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Contacto desde el portafolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:juandinegrete2006@outlook.com?subject=${subject}&body=${body}`;

    note.textContent = t("contacto.noteSent") || "Se abrió tu cliente de correo con el mensaje listo para enviar ✓";
  });
}

/* ---------------- QUOTE FORM (cotiza tu proyecto) ---------------- */
function initQuoteForm(){
  const form = document.getElementById("quoteForm");
  const note = document.getElementById("quoteNote");
  if(!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.qName.value.trim();
    const business = form.qBusiness.value.trim();
    const email = form.qEmail.value.trim();
    const type = form.qType.value;
    const budget = form.qBudget.value.trim();
    const desc = form.qDesc.value.trim();

    const subject = encodeURIComponent(`Cotización de proyecto — ${name}${business ? " / " + business : ""}`);
    const lines = [
      `Nombre: ${name}`,
      business ? `Negocio/empresa: ${business}` : null,
      `Email: ${email}`,
      type ? `Tipo de proyecto: ${type}` : null,
      budget ? `Presupuesto estimado: ${budget}` : null,
      "",
      "Descripción del proyecto:",
      desc
    ].filter(Boolean).join("\n");

    window.location.href = `mailto:juandinegrete2006@outlook.com?subject=${subject}&body=${encodeURIComponent(lines)}`;

    note.textContent = t("contacto.noteSent") || "Se abrió tu cliente de correo con el mensaje listo para enviar ✓";
  });
}

/* ---------------- helper ---------------- */
function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}
