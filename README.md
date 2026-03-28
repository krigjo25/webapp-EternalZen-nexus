# EternalZen
A meditation and self-insight platform. Features journaling, affirmations, and progress tracking, deployed via Docker for high scalability.

---

## Overview
EternalZen is a comprehensive digital tool designed to support spiritual growth and mental well-being. It provides users with a structured environment for daily affirmations, meditation techniques, and reflective journaling. The application focuses on personal growth visualization, helping users track their journey towards self-insight through a data-driven dashboard.

## Core Features
* **Spiritual Journaling**: Document and reflect on daily experiences and personal growth milestones.
* **Meditation & Affirmations**: Access curated techniques and daily reminders for mindfulness and positive reinforcement.
* **Progress Dashboard**: Visualize personal development through intuitive UI components and historical data.
* **Secure Authentication**: Integrated user registration and login system to protect personal reflections.
* **Containerized Deployment**: Fully Dockerized setup with support for automated scaling and consistent environments.

## Installation
1. Clone the repository:
```sh
#   Using HTTPS
git clone https://github.com/krigjo25/webapp-GrowthJournal-nestJ.git

#   Using SSH
ssh git@github.com:krigjo25/webapp-GrowthJournal-nestJS.git

#   Using Github CLI
gh repo clone krigjo25/webapp-GrowthJournal-nestJ
```

2. Navigate to the project directory using terminal
```sh
cd webapp-GrowthJournal-nestJ
```
### Prerequisites
* Docker and Docker Compose.
* Node.js (for local development without containers).

### Deployment Steps
1.  **Extract Project**: Unzip the EternalZen archive.
2.  **Docker Build**: Run `docker-compose up --build` to launch the frontend and backend services.
3.  **Local Access**: Access the application at `http://localhost:3001` (frontend) and `http://localhost:3000` (API).
4.  **Manual Start**: Alternatively, run `npm install` and `npm start` within the respective directories.

## Architecture
The application is built with a focus on modularity and professional standards:
* **Model (model.js)**: Centralized state management for app configuration and user data.
* **View (view.js)**: Dynamic rendering engine for headers, footers, and navigation.
* **Controller (controller.js)**: Logic layer for handling user interactions and credential verification.
* **Infrastructure**: Includes Dockerfile and docker-compose.yml for production-grade orchestration.

## Contributors
Developed as a high-standard web application for the intersection of technology and spiritual wellness.

---
*Empowering personal transformation through structured digital guidance.*

This Journal was implemented as an assignment at GETacademy.<br>
In accordance with [the Academic Honesty Policy](https://cs50.harvard.edu/x/2023/honesty/), please maintain academic integrity.<br>

The assignment can be accessed at [spiritual-Growth.pdf](/lib/documents/spiritual-Growth.pdf)
A preview of the project can be accessed at [Screen Dump](/lib/documents/spiritual-Growth-screen-dump.pdf)
~~A demonstrationof the application can be accessed at [youtube]()~~.

## Overview
[Assignment](./prototype/documents/spiritual-Growth.pdf) The Assignment for the project
[Screen capture](./prototype/documents/Eternal%20Zen.pdf) The Screen capture of the project

### Prototype
[The Prototype](./prototype/index.html) Which illustrates the web application using MVC
