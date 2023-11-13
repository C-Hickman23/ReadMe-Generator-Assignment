// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'Boost 1.0' : 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'BSD 3-Clause' : 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'GNU GPL v3' : 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'The Unlicense' : 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    'IBM' : 'https://img.shields.io/badge/License-IPL_1.0-blue.svg'
    };

  if(license in licenseBadge) {
    let badge = licenseBadge[license]
    return `![license](${badge})`
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'Boost 1.0' : 'https://www.boost.org/LICENSE_1_0.txt',
    'BSD 3-Clause' : 'https://opensource.org/licenses/BSD-3-Clause',
    'GNU GPL v3' : 'https://www.gnu.org/licenses/gpl-3.0',
    'The Unlicense' : 'http://unlicense.org/',
    'IBM' : 'https://opensource.org/licenses/IPL-1.0'
    };

    if (license in licenseLink) {
      let link = licenseLink[license];
      return `[License Details](${link})`;
    } 
    else {
      return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    let link = renderLicenseLink(license)
    return `This project is licensed under the [${license} License](${link}).`;
  } 
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributors}

  ## Questions
  https://github.com/${data.gitHubUsername}
  ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
