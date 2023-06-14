  <h1 align="center"><i>Tello: A Social Media App</i></h1>

<p>
  <h4 align="center"><i>Build with ❤️ and</i></h4>
</p>
<p align="center"> 
    <img alt="HTML5" src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white"/>&nbsp;
    <img alt="HTML5" src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB"/>&nbsp;
    <img alt="HTML5" src="https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white"/>&nbsp;
    <img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white" alt="express" />
    &nbsp;
    <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" alt="typescript" />&nbsp;
    <img src="https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white" alt="postgresql"/>
    &nbsp;
    <img src="https://img.shields.io/badge/Prisma-3982CE?logo=Prisma&logoColor=white" alt="prisma"/>
    &nbsp;
    <img src="https://img.shields.io/badge/GraphQl-E10098?logo=graphql&logoColor=white" alt="graphql"/>
    <img src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&logo=Apollo%20GraphQL&logoColor=white" alt="appolo-graphql"/>
    <img src="https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white" alt="scss"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?logo=docker&logoColor=white" alt="docker"/>
    <img src="https://img.shields.io/badge/redis-CC0000.svg?&logo=redis&logoColor=white" alt="redis"/>
    <img src="https://img.shields.io/badge/rabbitmq-%23FF6600.svg?&logo=rabbitmq&logoColor=white" alt="rabitmq"/>
    <img src="https://img.shields.io/badge/Socket.io-010101?&logo=Socket.io&logoColor=white" alt="socket.io"/>
    <img src="https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=FFD62E"/>
</p>

Tello is a social media application inspired by Twitter, allowing users to sign up, share posts, interact with other users, and exchange messages.

**This is the repo of the backend code, for the frontend part refer [here](https://github.com/detronetdip/tello-client).**

## Technologies Used

- **Frontend**:
  - React
  - Vite
  - Apollo GraphQL
  - TypeScript
  - Recoil
  - IndexedDB
- **Backend**:
  - Node.js
  - Express.js
  - Redis
  - RabbitMQ
  - PostgreSQL
  - GraphQL
  - Socket.IO
- **Deployment**:
  - Docker

## Features

- User authentication and signup using access and refress token with token versioning
- Post creation,Generation, browsing, and engagement (likes, comments)
- Direct messaging between users.
- Unique Message Storage: Messages are never stored in a database; instead, they are directly stored on the client-side. This approach ensures privacy as only the two clients engaged in a conversation can access the messages and once they close the app it will be vanished. This feature is made possible by leveraging Redis, RabbitMQ, Socket.IO, and IndexedDB.

## Getting Started

To run the Tello application locally, please follow the steps below:

### Prerequisites

Ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your/repository.git
```

2. Start the required containers using Docker Compose:

```bash
cd tello-server
docker-compose up -d
```

This command launches the necessary containers for the database, caching, and RabbitMQ.

3. Configure the environment variables:

   - Duplicate the .env.example file and rename it to .env.
   - Fill in the accurate data for the environment variables specified in the file.

4. Install dependencies and start the backend server:

```bash
cd [server name]
npm install
npm start
```

5. Install dependencies and start the frontend development server

   - Clone the [frontend](https://github.com/detronetdip/tello-client)
   - Run below commands
     ```
     cd tello-client
     npm install
     npm run dev
     ```

6. Access the Tello application in your browser at `http://localhost:5172`

### Usage

- Sign up for a new account or log in with your existing account.
- search and follow your friends.
- Explore posts from other users, like and comment on them.
- Use the direct messaging feature to communicate privately with other users.

### License

This project is licensed under the [MIT License](/LICENSE)
