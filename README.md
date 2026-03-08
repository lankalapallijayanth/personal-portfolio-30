# Jayanth Lankalapalli — Portfolio Website

A personal portfolio/resume website built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/lankalapalljn/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Build for production

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview production build locally

```bash
npm run preview
```

---

## 🌐 Publishing to GitHub Pages

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main`.

### First-time setup

1. **Push your code to GitHub** (to a repo like `lankalapalljn/portfolio` or `lankalapalljn.github.io` for a user site).

2. **Enable GitHub Pages** in your repository:
   - Go to **Settings → Pages**
   - Under **Source**, select **GitHub Actions**

3. **Set the base path** (only if your repo is NOT `<username>.github.io`):
   - Open `vite.config.ts` and set the `base` option to your repo name:
     ```ts
     base: "/portfolio/",
     ```
   - If your repo is `<username>.github.io`, leave `base` as `"/"` (default).

4. **Push to `main`** — the GitHub Action will build and deploy automatically.

5. Your site will be live at:
   - `https://<username>.github.io/<repo-name>/` (project site)
   - `https://<username>.github.io/` (user site)

### Manual deploy

You can also trigger a deploy manually from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

---

## 🛠 Tech Stack

- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — Build tool
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) — Component library
