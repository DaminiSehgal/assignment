# 🪙 Crypto Dashboard

A small frontend dashboard built with **React + Vite + Tailwind + React Query**, showing live cryptocurrency data from the **CoinGecko API**.

---

## 🚀 Features
- Fetches live crypto data (price, market cap, change %)
- Search by name/symbol
- Sort by price, market cap, or 24h change
- Dark/Light mode
- Graceful loading/error handling
- Unit test for SearchBar

---

## 🧰 Tech Stack
- React + TypeScript
- TailwindCSS
- React Query
- Jest + React Testing Library

---

## ⚙️ Setup
```bash
git clone https://github.com/<your-username>/crypto-dashboard.git
cd crypto-dashboard
npm install
npm run dev

## 🤖 AI Usage
This project was planned and scaffolded with the assistance of ChatGPT (GPT-5) to:

Choose the API

Generate boilerplate code for components

Draft the README


## 🧩 Scaling & Team Practices

If this project grew to 3–5 frontend engineers:

Architecture:

Use a feature-based folder structure (features/coins, features/theme)

Shared UI components in src/components/common/

Code Reviews:

PR checklist: readability, accessibility, performance, tests

Require one peer + one lead approval

CI/CD:

GitHub Actions: run lint, build, and tests


Code Quality:

ESLint + Prettier enforced on commit

Minimum test coverage: 70%

Storybook for documentation