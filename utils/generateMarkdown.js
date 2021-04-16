//Function that creates README markdown using user input
function generateMarkdown(res) {
  return `# ${res.title} ![badge](https://img.shields.io/badge/License-${res.lic}-green.svg)
  ${res.desc}
  <br>

 ## Table of Contents:
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contribution Guidelines](#contributing)
 * [Tests](#test)
 * [License](#license)
 * [Questions](#questions)
<br>

## Installation
Open terminal and run:<br>
${res.inst}
## Usage
${res.use}
<br>

## Contributing
${res.cont}

## Test
 ${res.test}
 
## License
[${res.lic} License](https://opensource.org/licenses/${res.lic})

## Questions
[GitHub](https://github.com/${res.gituser})<br>
Email: ${res.email}`}

module.exports = {generateMarkdown};