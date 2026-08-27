import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function setupDatabase() {
  const db = await open({
    filename: ':memory:',
    driver: sqlite3.Database
  });

  // 1. Create tables
  await db.exec(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      signup_date TEXT NOT NULL
    );

    CREATE TABLE subscriptions (
      id INTEGER PRIMARY KEY,
      user_id INTEGER,
      plan_type TEXT NOT NULL,
      monthly_rate INTEGER NOT NULL,
      status TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE payment_events (
      id INTEGER PRIMARY KEY,
      subscription_id INTEGER,
      payment_date TEXT NOT NULL,
      amount INTEGER NOT NULL,
      payment_status TEXT NOT NULL,
      FOREIGN KEY (subscription_id) REFERENCES subscriptions(id)
    );
  `);

  // 2. Insert mock data
  await db.run(`
    INSERT INTO users (id, name, signup_date) VALUES 
    (1, 'Amy Vance', '2026-01-15'),
    (2, 'Brad Pitt', '2026-01-20'),
    (3, 'Cat Deeley', '2026-02-01'),
    (4, 'Dan Howell', '2026-02-10'),
    (5, 'Elena Gilbert', '2026-03-01');
  `);
  
  await db.run(`
    INSERT INTO subscriptions (id, user_id, plan_type, monthly_rate, status) VALUES 
    (10, 1, 'Premium', 150, 'active'),
    (20, 2, 'Basic', 50, 'cancelled'),
    (30, 3, 'Premium', 150, 'active'),
    (40, 4, 'Basic', 50, 'active'),
    (50, 5, 'Premium', 150, 'paused');
  `);

  await db.run(`
    INSERT INTO payment_events (subscription_id, payment_date, amount, payment_status) VALUES 
    (10, '2026-02-15', 150, 'success'),
    (10, '2026-03-15', 150, 'success'),
    (20, '2026-02-20', 50, 'success'),
    (20, '2026-03-20', 0, 'failed'),
    (30, '2026-03-01', 150, 'success'),
    (40, '2026-03-10', 50, 'success'),
    (50, '2026-03-01', 0, 'failed');
  `);

  return db;
}
