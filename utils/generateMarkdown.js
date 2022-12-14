// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license != 'None') {
    licenseBadge = `![License](https://img.shields.io/badge/license-${license}-green)`;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let licenseLink = "";
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'IBM':
      licenseLink = 'https://opensource.org/licenses/IPL-1.0';
      break;
    case 'Mozilla':
      licenseLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Perl':
      licenseLink = 'https://opensource.org/licenses/Artistic-2.0';
      break;
    case 'Eclipse':
      licenseLink = 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'Zlib':
      licenseLink = 'https://opensource.org/licenses/Artistic-2.0';
      break;
    case 'Open Data Commons':
      licenseLink = 'https://opendatacommons.org/licenses/by/';
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  let licenseSection = "";
  if (license != 'None') {
    // licenseSection += '## License\n';
    licenseSection += `Read more about ${license}: ${renderLicenseLink(license)} \n`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  let tableOfContents = ['Description', 'Installation', 'Usage', 'License', 'Contribution', 'Tests', 'Questions'];
  let tableOfContentsMarkdown = "";
  for (let i = 0; i < tableOfContents.length; i++) {
    tableOfContentsMarkdown += (i + 1) + '. [' + tableOfContents[i] + '](#' + tableOfContents[i][0].toLowerCase() + tableOfContents[i].substring(1) + ')\n';
  }
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Table of contents:
  ### 
  ${tableOfContentsMarkdown}
  ---

  ## Description 
  ### ${data.description}
  ---

  ## Installation
  ### ${data.installation}
  ---

  ## Usage
  ### ${data.usage}
  ---

  ## License
  ### ${data.license}
  ${renderLicenseSection(data.license)}
  ---

  ## Contribution
  ### ${data.contribute}
  ---

  ## Tests
  ### ${data.test}
  ---
  
  ## Questions
  ### Reach me with additional questions:
  ### Github Link: https://github.com/${data.username}
  ### Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;
