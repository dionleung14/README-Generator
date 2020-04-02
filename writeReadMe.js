function readMeTemplate(projectTitle, description, installation, usage){
    return `# ${projectTitle}

    ## Description 

    ${description}
    
    Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.
    
    The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.
    
    There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.
    
    At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.
    
    If you're new to Markdown, read the GitHub guide on [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).
    
    If you need an example of a good README, check out [the VSCode repository](https://github.com/microsoft/vscode).
    
    
    ## Table of Contents (Optional)
    
    If your README is very long, add a table of contents to make it easy for users to find what they need.
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    
    
    ## Installation

    ${installation}
    
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
    
    ## Usage 

    ${usage}
    
    Provide instructions and examples for use. Include screenshots as needed. 
    
    
    ## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    
    
    ## License
    
    The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
    
    
    ---
    
    🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    
    Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    
    ## Contributing
    
    If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.
    
    ## Tests
    
    Go the extra mile and write tests for your application. Then provide examples on how to run them.
    
    
    ---
    © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
    
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