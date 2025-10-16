/**
 * A simple hello world function
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function hello(name = 'World') {
  return `Hello, ${name}!`;
}

/**
 * A simple addition function
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

// Export the functions
module.exports = {
  hello,
  add
};
