/**
 * 🚨 SQL INSTRUCTIONS FOR CANDIDATE:
 * 
 * Our finance team needs a "Revenue & Risk Report" for March 2026.
 * Write a single SQL query that returns a row for EVERY user in the system with:
 * 
 * 1. 'user_name': The user's name.
 * 2. 'plan_type': Their subscription plan type. If they have no subscription, return 'No Plan'.
 * 3. 'march_revenue': The SUM of successful payments ('success') processed in March 2026 ('2026-03-01' to '2026-03-31').
 *    ⚠️ Note: If they had no successful payments in March, this MUST display 0 (not NULL).
 * 4. 'revenue_rank': Rank all users based on their 'march_revenue' from HIGHEST to LOWEST using a Window Function.
 *    ⚠️ Note: Users with the same revenue should share the same rank, and the next rank number should jump (Standard Dense Rank behavior is NOT wanted here; use regular RANK()).
 * 
 * Sort final results by 'revenue_rank' ASC, then by 'user_name' ASC.
 */

export const candidateQuery = `
  -- Replace this line with your SQL query here --
`;
