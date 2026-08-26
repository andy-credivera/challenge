import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function setupDatabase() {
  // Creates an in-memory database so it resets clean every time
  const db = await open({
    filename: ':memory:',
    driver: sqlite3.Database
  });

  // 1. Create tables
  await db.exec(`
    CREATE TABLE departments (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL
    );

    CREATE TABLE employees (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      salary INTEGER NOT NULL,
      department_id INTEGER,
      FOREIGN KEY (department_id) REFERENCES departments(id)
    );
  `);

  // 2. Insert mock interview data
  await db.run(`INSERT INTO departments (id, name) VALUES (1, 'Engineering'), (2, 'Marketing'), (3, 'Sales');`);
  
  await db.run(`
    INSERT INTO employees (name, salary, department_id) VALUES 
    ('Alice Smith', 95000, 1),
    ('Bob Jones', 62000, 2),
    ('Charlie Brown', 110000, 1),
    ('David Miller', 54000, 2),
    ('Eva Green', 82000, NULL);
  `);

  return db;
}
