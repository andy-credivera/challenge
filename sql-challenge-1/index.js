import { setupDatabase } from './seed.js';
import { candidateQuery } from './challenge.js';

async function runTest() {
  console.log("🔄 Initializing database and evaluating your complex query...\n");
  
  const db = await setupDatabase();
  
  if (!candidateQuery.trim() || candidateQuery.includes("-- Write your SQL query")) {
    console.log("⚠️  Workspace empty. Please write your query inside challenge.js and save.");
    return;
  }

  try {
    const results = await db.all(candidateQuery);
    
    console.log("📊 YOUR QUERY OUTPUT:");
    console.table(results);

    // Expected window evaluation dataset
    const expected = [
      { user_name: 'Amy Vance', plan_type: 'Premium', march_revenue: 150, revenue_rank: 1 },
      { user_name: 'Cat Deeley', plan_type: 'Premium', march_revenue: 150, revenue_rank: 1 },
      { user_name: 'Dan Howell', plan_type: 'Basic', march_revenue: 50, revenue_rank: 3 },
      { user_name: 'Brad Pitt', plan_type: 'Basic', march_revenue: 0, revenue_rank: 4 },
      { user_name: 'Elena Gilbert', plan_type: 'Premium', march_revenue: 0, revenue_rank: 4 }
    ];

    if (JSON.stringify(results) === JSON.stringify(expected)) {
      console.log("✅ SUCCESS: Perfect! You correctly handled conditional aggregations, NULL filtering, and Window ranking.");
    } else {
      console.log("❌ KEEP TRYING: The matrix output or ordering does not perfectly match the target report criteria.");
    }

  } catch (error) {
    console.error("🚨 SQL SYNTAX ERROR:\n", error.message);
  }
}

runTest();
