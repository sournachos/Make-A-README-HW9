// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(lic) {
  (lic == 'Apache') ? [![License]('https://img.shields.io/badge/License-Apache%202.0-blue.svg')]('https://opensource.org/licenses/Apache-2.0')
  : (lic == 'MIT') ? [![License]('https://img.shields.io/badge/License-MIT-yellow.svg')]('https://opensource.org/licenses/MIT')
  : (lic == 'GPLv2') ? [![License]('https://img.shields.io/badge/License-GPL%20v2-blue.svg')]('https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html')
  : (lic == 'GPLv3') ? [![License]('https://img.shields.io/badge/License-GPLv3-blue.svg')]('https://www.gnu.org/licenses/gpl-3.0')
  : (lic == 'BSD 2-clause') ? [![License]('https://img.shields.io/badge/License-BSD%202--Clause-orange.svg')]('https://opensource.org/licenses/BSD-2-Clause')
  : (lic == 'BSD 3-clause') ? [![License]('https://img.shields.io/badge/License-BSD%203--Clause-blue.svg')]('https://opensource.org/licenses/BSD-3-Clause')
  : [![License](' ')];
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(lic) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(lic) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

`;
}

module.exports = generateMarkdown;
