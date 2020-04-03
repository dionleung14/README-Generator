const inquirer = require(`inquirer`)
const axios = require(`axios`)
const fs = require(`fs`);
const {
    readMeTemplate
} = require(`./writeReadMe.js`)
require("dotenv").config();
const authToken = process.env.API_KEY;

inquirer
    .prompt([{
            // This should be enough to get the email and profile image from the github api?
            type: `input`,
            message: `What is your GitHub username?`,
            name: `githubUsername`
        },
        {
            type: `input`,
            message: `What is your email address?`,
            name: `email`
        },
        {
            type: `input`,
            message: `What is your app called?`,
            name: `title`
        },
        {
            type: `input`,
            message: `Please provide a short description of your app`,
            name: `description`
        },
        {
            type: `input`,
            message: `Are there any special installation instructions to use your app? If no, please leave this blank.`,
            name: `installation`
        },
        {
            type: `input`,
            message: `Please provide a short set of instructions on how to use your app.`,
            name: `usage`
        },
        {
            type: `checkbox`,
            message: `Please select all applicable open-source licenses.`,
            name: `license`,
            choices: [`MIT`, `BSD`, `Apache`]
        },
        {
            type: `input`,
            message: `Who else contributed towards the creation of this app?`,
            name: `contributors`
        },
        {
            type: `input`,
            message: `What sort of test driven development has been incorporated in your app?`,
            name: `tests`
        },
        {
            type: `input`,
            message: `What questions do you have?`,
            name: `questions`
        },
        {
            type: `input`,
            message: `Anything else you would like a user to know?`,
            name: `misc`
        },
    ]).then(function (data) {
        const githubUsername = data.githubUsername
        const userEmail = data.email;
        const userTitle = data.title;
        const userDescription = data.description;
        const userInstall = data.installation;
        const userUsage = data.usage;
        const userLicense = data.license;
        const userContrib = data.contributors;
        const userTests = data.tests;
        const userQuestions = data.questions;
        const userMisc = data.misc;

        if (githubUsername == "") {
            throw Error("Please enter a username.")
        } else if (userEmail == "") {
            throw Error("Please enter an email address.")
        } else if (userTitle == "") {
            throw Error("Please enter a title for your app.")
        } else if (userDescription == "") {
            throw Error("Please enter a description of your app.")
        } else if (userUsage == "") {
            throw Error("Please enter instructions on how to use your app.")
        } else if (userLicense == "") {
            throw Error("Please select at least one license.")
        }

        if (userInstall == "") {
            userInstall = "No special installation preparations are necessary. Enjoy right out of the box!"
        }

        if (userContrib == "") {
            userContrib = "my trustworthy machine. Could not have done this without it."
        }

        if (userTests == "") {
            userTests = "No tests were done, it's all super high risk."
        }

        if (userQuestions == "") {
            userQuestions = "Please, hold all questions till the end."
        }

        if (userMisc == "") {
            userMisc = "No other information is necessary."
        }

        axios
            // .get(`-H "Authorization: token " https://api.github.com/users/${githubUsername}`).then(function(githubResponse){
            .get(`https://api.github.com/users/${githubUsername}`).then(function (githubResponse) {
                const githubData = githubResponse.data
                // console.log(githubData)
                const profilePicURL = githubData.avatar_url
                // console.log(profilePicURL)
                return profilePicURL;
            }).then(function (profilePicURL) {
                const filledReadMe = readMeTemplate(githubUsername, userEmail, userTitle, userDescription, userInstall, userUsage, userLicense, userContrib, userTests, userQuestions, userMisc, profilePicURL)
                fs.writeFile(`README_${userTitle}.md`, filledReadMe, function (error) {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log("Successfully wrote a custom README.md. Rename the file if necessary.")
                    }
                })
            })

    })
//     .get(GET /users/:username)
//     .then(function(githubResponse){
//         console.log(githubResponse)
//         console.log(githubResponse.data)
//     })

// Ask for GitHub username
// Use the username to look at their repos
// Ask which repo the user wants to generate a readme for
// Ask readme questions
// Short description of the project
// A table of contents (for the readme)
// Anything a user of the repo needs to install?
// How to use the app
// Any licenses?
// Who contributed to the app?
// Tests?
// Direct questions to the github user