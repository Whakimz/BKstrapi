// scripts/migrate.js
const sqlite3 = require('sqlite3');
const { Client } = require('pg');
require('dotenv').config();

async function migrate() {
  // Connect to SQLite
  const sqlite = new sqlite3.Database('.tmp/data.db');
  
  // Connect to Supabase
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  
  await client.connect();
  
  // Add your migration logic here
  // For each table in SQLite:
  // 1. Get data from SQLite
  // 2. Insert into Supabase
  
  await client.end();
  sqlite.close();
}

migrate().catch(console.error);