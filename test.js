"use strict";
async function callPostgRESTFunction() {
    try {
      const response = await fetch(`49.13.148.231:3000/rpc/hello_world`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        // Add any function parameters as needed
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Function result:', result);
    } catch (error) {
      console.error('Error calling PostgREST function:', error.message);
    }
  }
  
  // Call the function
  callPostgRESTFunction();