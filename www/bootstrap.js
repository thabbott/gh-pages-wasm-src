// Single asynchronous import of all dependencies
import("./index.js")
  .catch(e => console.error("Error importing `index.js`:", e));
