<h1 align="center">
  Url Shortener
</h1>

This repository contains the Url Shortener project built using NodeJS and MongoDB as NoSQL database.
<br><br>
This repository aims to learn how to build APIs using NodeJs and MongoDB.

## Technologies
- [NodeJS](https://nodejs.dev/en/learn/)
- [Fastify](https://fastify.dev/docs/latest/)
- [MongoDB](https://www.mongodb.com/docs/manual/introduction/)
- [Mongoose](https://mongoosejs.com/docs/index.html)

## Table of Contents

- [Installation](#installation)
- [Execution](#execution)
- [API Endpoints](#api-endpoints)
- [Example](#example)

## Installation
1. Clone the repository:

```bash
git clone https://github.com/patrickmarinho/Url-Shortener.git
```
   
## Execution

1. Start the application:

```markdown
node server.js
```

2. The API will be accessible at http://localhost:3000

## API Endpoints

The API provides the following endpoints:

```markdown
GET /:shortUrl - Access the shortened URL.

POST /url - Register a new URL to be shortened.
```
## Example
```markdown
POST http://localhost:3000/url

JSON - Request
{
  "OriginalUrl": "https://github.com/patrickmarinho/Url-Shortener/tree/main"
}
 ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
JSON - Response
{
  localhost:3000/p-B_RJGcR - The shortened URL will remain accessible as long as the server is running
}
```
