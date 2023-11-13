// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "Other") {
    return "* [License](#license)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "Other") {
    return "## License"
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
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
  Feel free to contact with any additional questions!/n
  GitHub: [${data.githubName}](https://github.com/${data.githubName})/n
  Email: ${data.email}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
