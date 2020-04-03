function readMeTemplate(username, email, projectTitle, description, installation, usage, license, contributors, tests, questions, misc, photoURL) {
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

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

If you have any questions, please feel free to contact me at ${email}.

Here is a photo of my lovely face! ![headshot](${photoURL})

---
© 2020 (https://github.com/${username}). All Rights Reserved.

`
}

module.exports = {
    readMeTemplate
}
