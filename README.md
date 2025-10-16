# npm-publish-test
test publishing to npm with OIDC auth

## Installation

```bash
npm install npm-publish-test
```

## Usage

```javascript
const { hello, add } = require('npm-publish-test');

// Use the hello function
console.log(hello()); // Output: Hello, World!
console.log(hello('Alice')); // Output: Hello, Alice!

// Use the add function
console.log(add(2, 3)); // Output: 5
```

## API

### `hello(name)`

Returns a greeting message.

- `name` (string, optional): The name to greet. Default: 'World'
- Returns: (string) A greeting message

### `add(a, b)`

Adds two numbers together.

- `a` (number): First number
- `b` (number): Second number
- Returns: (number) Sum of a and b
