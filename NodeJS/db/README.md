📘 Databases in Node.js – Complete Guide (Interview Focused)

This guide explains how Node.js interacts with databases (MongoDB + SQL) with examples.
# 1. Connecting Node.js with MongoDB
```Javascript

✅ Using Mongoose (ODM)
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);

// Insert
User.create({ name: "Sumit", age: 25 }).then(console.log);

// Find
User.find().then(users => console.log(users));

✅ Using Native MongoDB Driver
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const db = client.db("mydb");
  const users = db.collection("users");

  await users.insertOne({ name: "Sumit", age: 25 });

  const allUsers = await users.find().toArray();
  console.log(allUsers);
}

run();
```

# 2. SQL Databases (MySQL / PostgreSQL)
```Javascript

✅ Using Sequelize (ORM)
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("testdb", "user", "password", {
  host: "localhost",
  dialect: "mysql", // or "postgres"
});

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
});

// Sync & Insert
(async () => {
  await sequelize.sync();
  await User.create({ name: "Sumit", age: 25 });

  const users = await User.findAll();
  console.log(users);
})();
```

✅ Using TypeORM (Decorators)
```Javascript

import { DataSource } from "typeorm";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column()
  age;
}

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "password",
  database: "testdb",
  entities: [User],
  synchronize: true,
});

AppDataSource.initialize().then(async () => {
  const userRepo = AppDataSource.getRepository(User);
  await userRepo.save({ name: "Sumit", age: 25 });

  console.log(await userRepo.find());
});
```
✅ Using Prisma

```Javascript
// schema.prisma

model User {
  id    Int    @id @default(autoincrement())
  name  String
  age   Int
}

// index.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({ data: { name: "Sumit", age: 25 } });
  const users = await prisma.user.findMany();
  console.log(users);
}

main();
```
# 3. Query Execution & Pooling

👉 Connection pooling allows reusing DB connections instead of creating new ones each time.
```Javascript

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "testdb",
  waitForConnections: true,
  connectionLimit: 10,
});

// Execute query
(async () => {
  const [rows] = await pool.query("SELECT * FROM users");
  console.log(rows);
})();
```
🔹 4. Transactions

👉 Transactions ensure atomic operations (all or nothing).

# MongoDB Transaction
```Javascript
async function mongoTransaction() {
  const session = client.startSession();
  try {
    session.startTransaction();

    await users.insertOne({ name: "A" }, { session });
    await users.insertOne({ name: "B" }, { session });

    await session.commitTransaction();
    console.log("Transaction committed");
  } catch (err) {
    await session.abortTransaction();
    console.error("Transaction aborted", err);
  } finally {
    await session.endSession();
  }
}
```
# SQL Transaction
```Javascript

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("testdb", "user", "password", { dialect: "mysql" });

async function transactionExample() {
  const t = await sequelize.transaction();
  try {
    await User.create({ name: "A" }, { transaction: t });
    await User.create({ name: "B" }, { transaction: t });

    await t.commit();
    console.log("Transaction committed");
  } catch (err) {
    await t.rollback();
    console.error("Transaction rolled back", err);
  }
}
```
🔹 5. Indexing & Optimization Basics

👉 Indexing improves query performance by avoiding full scans.

MongoDB → db.collection.createIndex({ field: 1 })

SQL → CREATE INDEX idx_name ON users(name);

# MongoDB Example
```Javascript

await users.createIndex({ name: 1 }); // ascending index
const result = await users.find({ name: "Sumit" }).explain("executionStats");
console.log(result.executionStats);
```
# SQL Example
CREATE INDEX idx_user_name ON Users(name);

-- Query performance improves
SELECT * FROM Users WHERE name = 'Sumit';

# Quick Recap for Interviews

MongoDB → Mongoose (ODM), Native driver

SQL → Sequelize, TypeORM, Prisma

Pooling → Reuse DB connections for performance

Transactions → Commit / Rollback for atomic operations

Indexing → Speed up queries, optimize performance