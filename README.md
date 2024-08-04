# Email Sanitizer

A utility package that detects and filters out temporary or disposable email addresses to prevent spam and ensure valid user registrations.

## Features

- Detects temporary or disposable email addresses.
- Simple and easy-to-use.
- No external dependencies, built with core JavaScript.

## Installation

You can install this package via npm:

```bash
npm install email-sanitizer
```

## Usage
To use the Email Sanitizer, you need to import the package and call the check function with the email address you want to validate. The function returns true if the email is temporary and false if it is not.

Example
```bash
import { check } from 'email-sanitizer';

const email = 'example@tempmail.com';
const isTemp = check(email);

if (isTemp) {
  console.log('This is a temporary email address.');
} else {
  console.log('This is a valid email address.');
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub for any improvements or bug fixes.

## Author

[Rahul Rathore](https://github.com/raahulrathore)



## Bugs and Issues
If you encounter any issues, please report them at the [GitHub issues page](https://github.com/raahulrathore/email-sanitizer/issues).
