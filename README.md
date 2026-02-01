# College ERP (clg-erp)

College ERP is a lightweight, open-source college enterprise resource planning (ERP) project implemented as a JavaScript monorepo. It provides a modern React-based frontend and modular backend services (example: auth-service) to manage core college workflows such as user authentication, role-based access, student records, attendance, grades, and financials.

Homepage: https://clg-erp.vercel.app

Project overview

This repository contains the frontend and backend services for a college ERP system. The frontend is implemented with React + Vite and the backend services are Node/Express microservices using Sequelize (with sqlite3 by default). The project is designed to be run locally for development and deployed to platforms like Vercel (frontend) and any Node hosting provider for backend services.

Key features
- User authentication & authorization (JWT)
- Role-based access control (admin, staff, student)
- Student / faculty / course management
- Attendance tracking
- Gradebooks and transcripts
- Basic financials / fees management
- Dashboards and analytics (charts using Recharts)

Repository layout

- / (root)
  - package.json        # Frontend (Vite + React) scripts & dependencies
  - README.md           # (this file)
- /backend
  - /auth-service       # Authentication service (Express + Sequelize)

Tech stack
- Frontend: React 19, Vite, TailwindCSS, Framer Motion, Lucide, Recharts
- Backend: Node.js, Express, Sequelize (supports sqlite3 or Postgres), bcryptjs, jsonwebtoken
- DB: sqlite3 (default) — PostgreSQL optional via DATABASE_URL

Getting started (run locally)

Prerequisites
- Node.js 18+ (recommended)
- npm (or yarn/pnpm)

Frontend (development)
1. Clone the repo:
   git clone https://github.com/skvinderr/clg-erp.git
2. Install frontend dependencies (from repo root):
   npm install
3. Run the dev server:
   npm run dev
4. Open the app in your browser at the printed host (vite --host allows LAN access).

Backend - auth-service (development)
1. Change into the service folder:
   cd backend/auth-service
2. Install dependencies:
   npm install
3. Create a .env file (see example below) and set environment variables.
4. Start the dev server:
   npm run dev

Environment variables (example)
Create a file named .env in backend/auth-service with values similar to:

PORT=4000
JWT_SECRET=replace_this_with_a_strong_secret
DATABASE_URL=sqlite:./data/dev.sqlite   # or a Postgres URL like postgres://user:pass@host:5432/dbname
NODE_ENV=development

Note: For sqlite3 the service will use a local file. To use Postgres, set DATABASE_URL to your Postgres connection string and ensure the pg dependency is installed (already included).

Database
- By default the auth-service includes sqlite3 in dependencies for quick local development.
- Sequelize is used as the ORM. Look for /backend/auth-service/index.js and models to find the DB setup.
- If you want production Postgres, set DATABASE_URL and run migrations (if any are provided).

Build & deploy
- Frontend production build:
  npm run build
- Frontend can be deployed on Vercel. Your repo already lists https://clg-erp.vercel.app as the homepage.
- Backend services can be deployed to any Node hosting platform (Heroku, Render, Railway, DigitalOcean App Platform) and should read env vars for configuration.

Linting & formatting
- ESLint is configured. Run lint for a static check:
  npm run lint

Tests
- No test suite is included yet. Adding unit and integration tests is encouraged.

Contributing
- Contributions are welcome. Typical workflow:
  1. Fork the repository
  2. Create a feature branch: git checkout -b feat/your-change
  3. Commit your changes and push
  4. Open a pull request with a clear description

- Please open issues for bugs, feature requests, or questions.

Troubleshooting
- If the frontend fails to start, ensure Node version is compatible and dependencies are installed.
- For backend errors, check .env values and database connectivity. Switch to sqlite for a minimal setup.

License & contact
- No license file is included in this repository. If you want an open-source license, consider adding an MIT or Apache-2.0 license. Let me know which license you prefer and I can add it.

Author
- Repository owner: skvinderr (GitHub)

Acknowledgements
- Built with React, Vite, Tailwind CSS, Sequelize, and other amazing OSS libraries.
