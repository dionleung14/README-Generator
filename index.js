const inquirer = require(`inquirer`)
const axios = require(`axios`)
const fs = require(`fs`);
const {
    readMeTemplate
} = require(`./writeReadMe.js`)
require("dotenv").config();
const authToken = process.env.API_KEY;

function spaceDeleter(inputStr) {
    let inputArr = inputStr.split("");
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == " ") {
            inputArr[i] = `%20`
            i++
        }
    }
    return inputArr.join("")
}

inquirer
    .prompt([{
            // This should be enough to get the email and profile image from the github api?
            type: `input`,
            message: `What is your GitHub username? (required)`,
            name: `githubUsername`
        },
        {
            type: `input`,
            message: `What is your email address? (required)`,
            name: `email`
        },
        {
            type: `input`,
            message: `What is your app called? (required)`,
            name: `title`
        },
        {
            type: `input`,
            message: `Please provide a short description of your app (required)`,
            name: `description`
        },
        {
            type: `input`,
            message: `Are there any special installation instructions to use your app? If no, please leave this blank.`,
            name: `installation`
        },
        {
            type: `input`,
            message: `Please provide a short set of instructions on how to use your app (required).`,
            name: `usage`
        },
        {
            type: `checkbox`,
            message: `Please select all applicable open-source licenses (required).`,
            name: `license`,
            choices: [`MIT`, `BSD`, `Apache`]
        },
        {
            type: `input`,
            message: `Who else contributed towards the creation of this app? If nobody did, please leave this blank.`,
            name: `contributors`
        },
        {
            type: `input`,
            message: `What sort of test driven development has been incorporated in your app? If none, please leave this blank.`,
            name: `tests`
        },
        {
            type: `input`,
            message: `What questions do you have? If none, please leave this blank.`,
            name: `questions`
        },
        {
            type: `input`,
            message: `Anything else you would like a user to know? If none please leave this blank.`,
            name: `misc`
        },
        {
            type: `list`,
            message: `Pick your favorite color out of the following choices (required):`,
            name: `color`,
            choices: [`brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`]
        },
    ]).then(function (data) {
        // required inputs
        const githubUsername = data.githubUsername
        const userEmail = data.email;
        const userTitle = data.title;
        const userDescription = data.description;
        const userUsage = data.usage;
        const userLicense = data.license;
        const userColor = data.color;

        // optional inputs 
        let userInstall = data.installation;
        let userContrib = data.contributors;
        let userTests = data.tests;
        let userQuestions = data.questions;
        let userMisc = data.misc;

        const userTitleBadge = spaceDeleter(userTitle)

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
        } else if (userColor == "") {
            throw Error("Please select a color.")
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
                const filledReadMe = readMeTemplate(githubUsername, userEmail, userTitle, userDescription, userInstall, userUsage, userLicense, userContrib, userTests, userQuestions, userMisc, profilePicURL, userTitleBadge, userColor)
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