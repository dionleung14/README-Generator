function readMeTemplate(username, email, projectTitle, description, installation, usage, license, contributors, tests, questions, misc, photoURL, badgeTitle, badgeColor) {
    return `# ${projectTitle}

## Description 

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)
* [Miscellaneous](#miscellaneous)
* [Credits](#credits)
* [License](#license)


## Installation

${installation}

## Usage 

${usage}

## Tests

${tests}

## Questions

${questions}

## Miscellaneous

${misc}

## Credits

Special thanks to ${contributors}. 

## License

Licensed by ${license}.

---

## Badges

![${projectTitle}](https://img.shields.io/badge/${username}-${badgeTitle}-${badgeColor})

If you have any questions, please feel free to contact me at ${email}.

Here is a photo of my lovely face! ![headshot](${photoURL})

---
© 2020 (https://github.com/${username}). All Rights Reserved.

`
}

module.exports = {
    readMeTemplate
}
