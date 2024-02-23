// types.js

const z = require('zod');

// Define schema for username
const usernameSchema = z.string().min(3).max(20);

// Define schema for password
const passwordSchema = z.string().min(6);

// Function to validate username and password
function validateCredentials(username, password) {
  const usernameResult = usernameSchema.safeParse(username);
  const passwordResult = passwordSchema.safeParse(password);

  if (usernameResult.success && passwordResult.success) {
    return { valid: true };
  } else {
    return { 
      valid: false,
      errors: {
        username: usernameResult.error ? usernameResult.error.message : null,
        password: passwordResult.error ? passwordResult.error.message : null
      }
    };
  }
}

module.exports = {
  validateCredentials
};
