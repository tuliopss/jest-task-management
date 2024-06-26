# Task Management App

![Structure of the Project](Project-Overview.jpg)

---

## API Endpoints - Tasks

| Endpoint         | Method | Description                |
| ---------------- | ------ | -------------------------- |
| tasks/           | GET    | Get tasks (inclu. filters) |
| tasks/:id/       | GET    | Get a task                 |
| tasks/           | POST   | Create a task              |
| tasks/:id/       | DELETE | Delete a task              |
| tasks/:id/status | PATCH  | Update task status         |

---

## API Endpoints - Auth

| Endpoint     | Method | Description |
| ------------ | ------ | ----------- |
| auth/signup/ | POST   | Sign up     |
| auth/signin/ | POST   | Sign in     |

---

### NestJS

- Modules
- Controllers
- Services and Providers
- COntroller-to-Service Communication
- Validation Using NestJS Pipes

### Back-End & Architecture

- Develop production-ready REST APIs
- CRUD operations
- Error handling
- Data transfer objects (DTO)
- System modularity
- Back-End development best practices
- Configuration management
- Logging
- Security best practices

### Persistence

- Connecting the application to a database
- Working with relational databases
- Using TypeORM
- Writting simple and complex queries using QueryBuilder
- Performance when working with a database

### Authorization & Authentication

- Signing in / signing up
- Authentication and Authorization
- Protected resources
- Owership of tasks by users
- Using JWT tokens (JSON Web Tokens)
- Password hashing, salts ad properly storing passwords

### Deployment

- Polishing the application for Production use
- Deploying NestJS apps to AWS
- Deploying FrontEnd aplpications to AWS S3
- Woring up the Front-End and Back-End
