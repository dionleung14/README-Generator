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
© 2020 ${username}. All Rights Reserved.

`
}



module.exports = {
    readMeTemplate
}

/*
function htmlTemplate(userName, userLocation, userBio, userLinkedin, userGithub){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>All about ${userName}</title>
        <style>
            body {
                background-color: aquamarine;
                font-family: Georgia, 'Times New Roman', Times, serif;
            }
            section {
                background-color: gray;
                padding: 5%;
                margin: 5%;
                border: 1px black solid;
            }
        </style>
    </head>
    <body>
        <section>
            <h1>Hi! My name is ${userName}</h1>
            <h3>I am currently located in ${userLocation}</h3>
            <h3>${userBio}</h3>
            <h3>My LinkedIn is <a href="https://www.linkedin.com/in/${userLinkedin}" target="_blank">here</a></h3>
            <h3>Find my GitHub profile <a href="https://github.com/${userGithub}" target="_blank">here</a></h3>
        </section>
    </body>
    </html>`
}

module.exports = {
    htmlTemplate
}

*/