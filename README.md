# Portafolio — Juan Diego Negrete Portillo

Sitio estático (HTML + CSS + JS puro, sin frameworks ni build) listo para
alojar gratis. **Bilingüe (Español/Inglés)** — detecta el idioma del
navegador del visitante y también se puede cambiar a mano con el botón
"ES/EN" en la barra de navegación.

## Estructura

```
portfolio/
├── index.html              ← estructura de la página (rara vez la tocarás)
├── css/styles.css           ← diseño visual
├── js/data.js                ← 👉 EDITA ESTE ARCHIVO para actualizar contenido
├── js/i18n.js                 ← textos fijos de la interfaz (ES/EN) + lógica de idioma
├── js/main.js                 ← lógica (filtros, animaciones, formularios)
└── assets/
    ├── CV-Juan-Diego-Negrete-Portillo.pdf      ← CV en español
    ├── CV-Juan-Diego-Negrete-Portillo-EN.pdf   ← CV en inglés
    ├── juan-diego-foto.jpg                      ← foto de perfil (Sobre mí)
    ├── juan-diego-naturaleza.jpg                ← foto de la sección Hobbies
    └── projects/                                 ← capturas de pantalla de proyectos
```

## Cómo funciona el sitio bilingüe

- La primera vez que alguien entra, el sitio revisa el idioma de su
  navegador: si empieza en inglés, muestra el sitio en inglés; si no,
  en español.
- El botón **ES/EN** en la esquina superior derecha permite cambiar a mano
  en cualquier momento — la elección se recuerda para su próxima visita.
- El botón **"Descargar CV"** siempre apunta al PDF del idioma activo
  (español o inglés) automáticamente.
- Todo el contenido dinámico (proyectos, experiencia, certificaciones,
  servicios, hobbies) cambia de idioma sin recargar la página.

## Cómo actualizar el sitio (lo harás seguido)

Todo el contenido que cambia — proyectos, certificaciones, habilidades,
experiencia, servicios, hobbies — vive en **`js/data.js`**. Los textos ahora
llevan dos versiones, `es` y `en`:

```js
title: { es: "Gestor de Tareas Full-Stack", en: "Full-Stack Task Manager" }
```

Si todavía no tienes la traducción al inglés, puedes dejar el mismo texto
en español en ambos campos — el sitio no se rompe, solo no estará traducido
hasta que lo actualices.

### Agregar un proyecto nuevo
Copia un bloque dentro del arreglo `PROJECTS` en `js/data.js`:

```js
{
  id: "mi-proyecto-nuevo",
  title: { es: "Nombre del proyecto", en: "Project name" },
  description: { es: "Qué hace, en 1-2 frases.", en: "What it does, in 1-2 sentences." },
  tags: ["React", "Node.js"],      // se usan también como filtros
  status: { es: "MVP", en: "MVP" },
  icon: "fa-solid fa-code",         // ícono mientras no subas captura
  thumbGradient: "linear-gradient(135deg, #16283B, #2FA88A)",
  github: "https://github.com/Juanchiz1/mi-proyecto",
  demo: "",                         // opcional
  image: "assets/projects/mi-proyecto.png"   // opcional
}
```

### Agregar una certificación o curso terminado
Copia un bloque dentro de `TIMELINE` en `js/data.js` (mismo patrón bilingüe).

### Agregar o editar un trabajo/experiencia
Edita el arreglo `EXPERIENCE` — cada logro en `changes.es` / `changes.en`
aparece como una línea "+" en formato diff.

### Agregar un servicio que ofreces
Edita el arreglo `SERVICES` (sección "Cotiza tu proyecto") y `PROCESS_STEPS`
si cambias tu forma de trabajar.

### Cambiar tus hobbies
Edita el arreglo `HOBBIES`.

### Actualizar tu nivel en una tecnología
Edita el arreglo `SKILLS` (nivel de 0 a 100).

### Agregar textos fijos nuevos (botones, títulos de sección, etc.)
Esos viven en `js/i18n.js`, dentro de `UI_STRINGS`, como pares `{ es, en }`.

Guarda el archivo, sube el cambio a GitHub y el sitio se actualiza solo
(ver despliegue abajo).

## Cómo desplegarlo gratis — GitHub Pages (recomendado)

Como ya tienes GitHub (`github.com/Juanchiz1`), esta es la opción más simple
y además refuerza tu perfil ahí.

1. Crea un repositorio nuevo en GitHub, por ejemplo `portafolio` (puede ser
   público).
2. Sube estos archivos al repositorio (arrastra la carpeta en la interfaz web
   de GitHub, o por línea de comandos):
   ```
   git init
   git add .
   git commit -m "Primera versión del portafolio"
   git branch -M main
   git remote add origin https://github.com/Juanchiz1/portafolio.git
   git push -u origin main
   ```
3. En el repositorio: **Settings → Pages → Source → selecciona la rama
   `main` y la carpeta `/ (root)`** → Save.
4. En un par de minutos tu sitio queda publicado en:
   `https://juanchiz1.github.io/portafolio/`
5. Cada vez que quieras actualizar algo (nuevo proyecto, nueva certificación),
   edita `js/data.js`, guarda, y vuelve a hacer:
   ```
   git add .
   git commit -m "Actualizo proyectos"
   git push
   ```
   El sitio se actualiza solo en 1-2 minutos. No necesitas reinstalar nada.

### Alternativas igual de gratuitas
- **Netlify** (netlify.com): arrastras la carpeta del proyecto a su panel y
  te da una URL al instante; también se puede conectar al repo de GitHub
  para que se actualice automáticamente con cada `push`.
- **Vercel** (vercel.com): mismo flujo que Netlify, conectado a GitHub.

Con cualquiera de las tres puedes luego conectar un dominio propio
(ej. `juandiegonegrete.dev`) si en algún momento quieres comprarlo — no es
obligatorio, el subdominio gratuito ya se ve profesional.

## Antes de publicarlo — checklist

- [x] Foto real cargada en `assets/juan-diego-foto.jpg` (sección Sobre mí).
- [x] Foto de naturaleza cargada en `assets/juan-diego-naturaleza.jpg`
      (sección Hobbies / Fuera del código).
- [x] CV en español y en inglés cargados en `assets/` — el botón
      "Descargar CV" cambia solo según el idioma activo del sitio.
- [x] Correo (`juandinegrete2006@outlook.com`) y teléfono
      (+57 320 959 4155) actualizados en `index.html` y `js/main.js`.
- [x] Nivel de inglés actualizado a B2++ en todo el sitio.
- [x] Sitio bilingüe con detección automática + botón manual ES/EN.
- [x] Sección "Cotiza tu proyecto" con servicios, proceso de trabajo y
      formulario para que negocios/clientes pidan una cotización.
- [x] Sección "Fuera del código" con tu foto, tu canal de YouTube
      (Tiempo Con Juan Diego), gimnasio, naturaleza, aprendizaje, ciencia.
- [ ] Reemplazar los 5 proyectos de ejemplo en `js/data.js` por tus
      proyectos reales de `github.com/Juanchiz1`, con enlaces correctos
      (esto sigue pendiente — el CV no lista repositorios específicos).
- [ ] Agregar capturas de pantalla reales en `assets/projects/` (opcional
      pero recomendado — sube mucho la percepción de calidad).
- [ ] Revisar la traducción al inglés de los textos que agregaste tú
      mismo si haces cambios — el patrón `{ es, en }` está en todo `data.js`.
- [ ] Actualizar el enlace del canal de YouTube en `index.html` (busca
      "Tiempo Con Juan Diego") por la URL real de tu canal cuando la tengas.

## Formulario de contacto

El formulario funciona por `mailto:` (abre el correo del visitante con el
mensaje ya redactado) — no requiere backend ni costo. Si más adelante
quieres que los mensajes lleguen directo a tu bandeja sin que el visitante
tenga que confirmar el envío desde su cliente de correo, puedes conectar el
mismo formulario a **Formspree** (formspree.io, plan gratuito) en unos 5
minutos, cambiando solo el `action` del `<form>` en `index.html`.
