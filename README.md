# Tello

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

6. Access the Tello application in your browser at `http://localhost:5172`

### Usage

- Sign up for a new account or log in with your existing account.
- search and follow your friends.
- Explore posts from other users, like and comment on them.
- Use the direct messaging feature to communicate privately with other users.

### License

This project is licensed under the [MIT License](/LICENSE)
