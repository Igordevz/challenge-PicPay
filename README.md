Sure, here is the README.md with added emojis to enhance creativity:

```markdown
# 🚀 Challenge-PicPay

This repository contains my implementation of the technical challenge provided by PicPay. The goal of this challenge is to develop a backend application for handling user transfers, including user registration, balance management, and transaction history.

## Project Overview 📝

This project is built using Fastify, Prisma, and SQLite. It implements a basic API for user transfers, ensuring that each transfer is recorded in the transaction history of both the sender and the recipient.

## Project Structure 📂

- `src/`: Contains the main application code.
  - `http/`: Defines the routes for the API.
  - `lib/`: Contains the Prisma client configuration.
  - `use-cases/`: Contains the core business logic.
- `prisma/`: Contains the Prisma schema and migration files.
- `.env`: Environment variables configuration.
- `package.json`: Project metadata and dependencies.

## API Endpoints 🔌

The main endpoints for this project include:

- **User Registration**: Endpoint for creating new users.
- **Transfer**: Endpoint for handling user transfers and updating transaction histories.

## How to Run 🏃‍♂️

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Igordevz/challenge-PicPay.git
   cd challenge-PicPay
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   Create a `.env` file in the root of the project and add the following line:

   ```
   DATABASE_URL="file:./dev.db"
   ```

   Then run:

   ```bash
   npx prisma migrate dev --name init
   ```

4. **Start the server:**

   ```bash
   npm run dev
   ```


## Challenge Link 🔗

This project was created as part of the [PicPay Backend Challenge](https://github.com/PicPay/picpay-desafio-backend).

## License 📜

This project is licensed under the MIT License.
```

This version uses emojis to make the document more engaging and visually appealing.