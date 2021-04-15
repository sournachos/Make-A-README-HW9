//Function that creates README markdown using user input
function generateMarkdown(response) {
  return `# ${response.title} ![Badge]('https://img.shields.io/badge/License-${response.lic}-green.svg')
  ${response.desc}
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
Open terminal and run:<br>``${response.inst}``
## Usage
${response.use}
<br>
### Contributing
${response.cont}

## Test
Open terminal and run: ${response.test}

## License
[Link](https://opensource.org/licenses/${response.lic})

## Questions
[GitHub](https://github.com/${response.gituser})<br>
Email: ${response.email}`;}

module.exports = generateMarkdown;