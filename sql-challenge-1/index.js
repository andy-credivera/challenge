import { setupDatabase } from './seed.js';
import { candidateQuery } from './challenge.js';

async function runTest() {
  console.log("🔄 Initializing database and running your query...\n");
  
  const db = await setupDatabase();
  
  // Clean up whitespace to check if they wrote anything
  if (!candidateQuery.trim() || candidateQuery.includes("-- Write your SQL query")) {
    console.log("⚠️  Workspace empty. Please write your query inside challenge.js and save.");
    return;
  }

  try {
    // Execute candidate's query
    const results = await db.all(candidateQuery);
    
    console.log("📊 YOUR QUERY OUTPUT:");
    console.table(results);

    // Automated verification logic
    const expectedJson = '[{"name":"Charlie Brown","salary":110000},{"name":"Alice Smith","salary":95000}]';
    const actualJson = JSON.stringify(results);

    if (actualJson === expectedJson) {
      console.log("✅ SUCCESS: Excellent! Your query returned the exact expected dataset.");
    } else {
      console.log("❌ KEEP TRYING: The output does not match the target criteria.");
      console.log("Expected: Charlie Brown (110000) then Alice Smith (95000).");
    }

  } catch (error) {
    console.error("🚨 SQL SYNTAX ERROR:");
    console.error(error.message);
  }
}

runTest();
