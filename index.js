const inquirer = require(`inquirer`)
const axios = require(`axios`)
const fs = require(`fs`);
const { readMeTemplate } = require(`./writeReadMe.js`)
require("dotenv").config();
const authToken = process.env.API_KEY;

inquirer
    .prompt([
        {
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
    ]).then(function(data){
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

        axios
            // .get(`-H "Authorization: token " https://api.github.com/users/${githubUsername}`).then(function(githubResponse){
            .get(`https://api.github.com/users/${githubUsername}`).then(function(githubResponse){
                const githubData = githubResponse.data
                // console.log(githubData)
                const profilePicURL = githubData.avatar_url
                // console.log(profilePicURL)
                return profilePicURL;
            }).then(function(profilePicURL){
                const filledReadMe = readMeTemplate(githubUsername, userEmail, userTitle, userDescription, userInstall, userUsage, userLicense, userContrib, userTests, userQuestions, userMisc, profilePicURL)
                fs.writeFile(`README_${userTitle}.md`, filledReadMe, function (error){
                    if (error) {
                        console.log(error)
                    } else {
                        console.log("Successfully wrote a custom README.md")
                    }
                })
            })




        //     .get(GET /users/:username)
        //     .then(function(githubResponse){
        //         console.log(githubResponse)
        //         console.log(githubResponse.data)
        //     })


        // const filledReadMe = readMeTemplate(parameters)

        // fs.writeFile(`README_${project}.md`, filledReadMe, function(error, data){
        //     if (error){
        //         console.log(`Encountered an error: ${error}`)
        //     } else {
        //         console.log(`Successfully wrote a custom README.md`)
        //     }
        // })
    })


/* copied from activity 40
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const promises = require(`promises`);

inquirer
    .prompt([{
            type: `input`,
            message: `What is your name?`,
            name: `name`,
        },
        {
            type: `input`,
            message: `What is your location?`,
            name: `location`,
        },
        {
            type: `input`,
            message: `Describe yourself in 20 words or less`,
            name: `bio`,
        },
        {
            type: `input`,
            message: `What is your LinkedIn username?`,
            name: `linkedin`,
        },
        {
            type: `input`,
            message: `What is your GitHub username?`,
            name: `github`,
        }
    ]).then(function (response) {
        const userName = response.name
        const userLocation = response.location
        const userBio = response.bio
        const userLinkedin = response.linkedin
        const userGithub = response.github
        const htmlString = `<!DOCTYPE html>
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

        fs.writeFile(userName + `_index.html`, htmlString, function (error) {
            if (error) {
                console.log(error)
            } else {
                console.log(`Success`)
            }
        })
    })

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

        */