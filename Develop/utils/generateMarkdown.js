// Function that returns a license badge based on which license is passed in
// If license is not listed, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else {
    return ""
  }
}

// Function that returns the license link
// If license is not listed, return an empty string
function renderLicenseLink(license) {
  if (license !== "Other") {
    return "* [License](#license)"
  } else {
    return ""
  }
}

// Function that returns the license section/heading of README
// If license is not listed, return an empty string
function renderLicenseSection(license) {
  if (license !== "Other") {
    return "## License"
  } else {
    return ""
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table Of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions/Contact](#questions/contact)
  ${renderLicenseLink(data.license)}
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contributing}

  ## Questions/Contact
  Feel free to contact with any additional questions!
  - GitHub: [${data.githubName}](https://github.com/${data.githubName})
  - Email: ${data.email}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
