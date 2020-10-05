// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-green)
## Description:
${data.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
## Installation:
${data.installation}
## Usage:
${data.usage}
## License:
Licensed by ${data.license}
## Contributing:
${data.guidelines}
## Tests:
${data.test}
## Questions:
If you have any questions, feel free to look up ${data.github} at https://github.com/${data.github}
or email at ${data.email}`;
}

module.exports = generateMarkdown;
