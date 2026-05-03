# Personal Portfolio Website

A modern, responsive personal portfolio built with pure HTML, CSS, and JavaScript. Features dark/light mode, scroll animations, form validation, and a sleek glassmorphism design.

---

## 📁 Folder Structure

```
Personal Portfolio/
├── index.html              # Main HTML (all sections)
├── css/
│   └── styles.css          # Design system + responsive styles
├── js/
│   └── main.js             # Interactivity & animations
├── assets/
│   ├── images/             # Project screenshots (optional)
│   └── resume/
│       └── resume.pdf      # Your resume PDF
└── README.md
```

## 🛠️ Tech Stack

- **HTML5** — Semantic markup, SEO meta tags
- **CSS3** — Custom properties, Grid, Flexbox, `@keyframes`, media queries
- **JavaScript (ES6+)** — Intersection Observer, localStorage, DOM manipulation
- **Google Fonts** — Inter (body) + Space Grotesk (headings)
- **No frameworks, no dependencies, zero build step**

---

## 🚀 Setup Instructions

### Local Development

1. Clone or download this folder
2. Open `index.html` in your browser — that's it!
3. Or use **VS Code Live Server** extension for hot reload:
   - Install the "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

### Add Your Resume

Place your resume PDF at: `assets/resume/resume.pdf`

### Customize Content

- Edit `index.html` to update your name, bio, projects, and links
- Modify `css/styles.css` to change colors (edit the `:root` custom properties)
- Update social links (GitHub, LinkedIn, email) in the Contact and Footer sections

---

## 🌐 Deployment

### Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the entire `Personal Portfolio` folder
4. Your site is live! Netlify gives you a URL like `https://your-site.netlify.app`
5. (Optional) Go to **Domain settings** to add a custom domain

### Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up
2. Install Vercel CLI: `npm i -g vercel`
3. Open terminal in this folder and run: `vercel`
4. Follow the prompts — Vercel auto-detects it as a static site
5. Your site is live at `https://your-site.vercel.app`

### Deploy on GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings** → **Pages**
3. Set source to **main branch** / root
4. Your site is live at `https://username.github.io/repo-name`

---

## ✨ Features

| Feature | Implementation |
|---|---|
| Dark/Light Mode | CSS custom properties + JS toggle + localStorage |
| Scroll Animations | Intersection Observer API (fade-in, slide-up) |
| Sticky Navbar | Scroll event + CSS class toggle |
| Smooth Scrolling | `scroll-behavior: smooth` + JS offset calc |
| Form Validation | Client-side JS with regex email validation |
| Responsive Design | Mobile-first CSS with breakpoints at 768px, 1024px |
| Skill Progress Bars | Animated on scroll with Intersection Observer |
| Hamburger Menu | CSS transform + JS toggle for mobile nav |

---

## 📝 License

MIT — feel free to use and customize for your own portfolio.
