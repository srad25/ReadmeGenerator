// function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.Title}
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)



## Table of contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions) 

## Description 

${response.description}

## Installation

${response.installation}

## Usage

${response.usage}

## License

[license](https://opensource.org/licenses/${response.license})

## Contributing

${response.contributing}

## Test

${response.test}

## Questions
  Please visit my Github page if you have any questions

* [Github Page](${response.profile})

* [Github Repo](${response.repo})

* <${response.email}> `;

}

module.exports = generateMarkdown