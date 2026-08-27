# Senior Developer - Technical Assessment

Please read each question carefully and give the best answer.

---

### Question 1: React

You have a component with a `useEffect` that sets up a `setInterval`. Inside the interval, you attempt to increment a state variable `count` by calling `setCount(count + 1)`. However, you intentionally omit `count` from the `useEffect` dependency array. What is the behavior of the application?

- **A)** The count increments continuously as expected, because `setCount` always binds to the most recent state.
- **B)** The interval fails to execute, and React throws a runtime error because of the missing dependency.
- **C)** The count increments to 1 and stays there, because the interval closure captures the `count` variable from the initial render.
- **D)** The component triggers an infinite re-render loop because the state update forces the `useEffect` to re-trigger.

---

### Question 2: React

Which of the following best describes the primary purpose and behavior of the `useTransition` hook introduced in React 18?

- **A)** It provides built-in CSS transition support for animating components as they mount and unmount from the DOM.
- **B)** It marks specific state updates as non-urgent, allowing React to pause or interrupt them if a more urgent update (like a user typing) occurs.
- **C)** It automatically batches multiple synchronous state updates into a single render to prevent layout thrashing.
- **D)** It offloads heavy, synchronous state computations to a background Web Worker so the main thread remains unblocked.

---

### Question 3: React Native

In React Native's New Architecture (Fabric/TurboModules), how does the JavaScript Interface (JSI) improve performance over the legacy bridge architecture?

- **A)** It runs all JavaScript execution on a dedicated native background thread rather than the JS thread.
- **B)** It allows JavaScript to hold direct references to C++ Host Objects, enabling synchronous, direct function calls without JSON serialization.
- **C)** It automatically pre-renders UI components on the server before transferring the layout tree to the native side.
- **D)** It converts JavaScript code into native Swift/Kotlin bytecode during the build step.

---

### Question 4: SQL Server

In SQL Server, a table `Orders` has an index on `CustomerID` (`VARCHAR(20)`). A query is executed: `SELECT * FROM Orders WHERE CustomerID = N'C12345'`. What performance impact occurs and why?

- **A)** SQL Server performs an Index Seek because `NVARCHAR` and `VARCHAR` are fully interchangeable without type precedence penalties.
- **B)** SQL Server performs an Index Scan because implicit data type conversion converts the column data (`VARCHAR`) to `NVARCHAR`, preventing index seek usage (SARGability).
- **C)** The query fails with a type mismatch error because unicode literals cannot be compared directly against non-unicode columns.
- **D)** SQL Server automatically creates a temporary index in `tempdb` to handle the unicode parameter conversion on the fly.

---

### Question 5: SQL Server

How does enabling Read Committed Snapshot Isolation (RCSI) in SQL Server alter the behavior of default `READ COMMITTED` transactions?

- **A)** Readers block writers, but writers no longer block readers, using `tempdb` for row-level locking logs.
- **B)** Readers use row versioning in `tempdb` to retrieve dirty data (uncommitted changes) without taking shared locks.
- **C)** Readers use row versioning in `tempdb` to read the last committed state of data without acquiring shared (`S`) locks or blocking writers.
- **D)** Transactions run completely isolated in-memory, committing changes to disk asynchronously.

---

### Question 6: Architecture & Enterprise Integration

You are designing a modern enterprise React application that must securely communicate with multiple microservices and external third-party APIs using OAuth/OIDC. Which of the following architectural patterns provides the most secure and scalable approach for handling authentication and data fetching?

- **A)** Storing OAuth JWTs in `localStorage` and making direct asynchronous requests from the React client to each individual microservice.
- **B)** Implementing a Backend-For-Frontend (BFF) layer (e.g., in Node.js) that handles the OAuth flow, stores tokens in `HttpOnly` cookies, and aggregates microservice data before sending it to the client.
- **C)** Utilizing Redux for global state management to store tokens in memory and routing all API requests through a central Web Worker to prevent XSS attacks.
- **D)** Passing the authentication token as a URL query parameter to a single monolithic API gateway which then transparently redirects requests to the appropriate microservices.

---
*End of questions.*
"""