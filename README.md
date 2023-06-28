# Google Form Extension: Git File Upload

This is a Google Forms extension that uploads documents to a repository on submission of a form. The user should fill out the form and include their documents and upon submission the information and the document will be version controlled on an external Github repository

## Google Form Extension Developer Setup Guide

This guide will walk you through the setup process for creating a Google Form extension using Google Apps Script and CLASP. The extension allows you to add custom functionality and automation to your Google Forms.

### Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- **Node.js**: You can download and install Node.js from the official website: [Node.js](https://nodejs.org)
- **CLASP**: CLASP (Command Line Apps Script Projects) is a command-line tool used for managing Google Apps Script projects. Install CLASP globally by running the following command:
  ```bash
  npm install -g @google/clasp
  ```
 - Google Clasp allows you to deploy the project as a google form extension

### Setup

1. Clone the project from github
   `git@github.com:SociallyResponsibleComputing/Form-Extension.git`  

2.  Login to https://console.cloud.google.com/apis/credentials?authuser=0&project=socially-responsible-computing and create new oAuth2.0 credentials:
   
![image](https://raw.githubusercontent.com/SociallyResponsibleComputing/Form-Extension/main/public/setup01.png?token=GHSAT0AAAAAACEPPLOHKKO2HP5MFCBQ4DTIZE4UBGA)

*Choose desktop Application when it asks you for the type of credentials*

3. Download the credentials as JSON and save it to the root directory of the project. Rename the credentials file to creds.json

4. Inside the root directory there is a .clap.json file, make sure the root directory points to the path of your cloned directory

5. Next login using the freshly downloaded creds.json `clasp login --creds creds.json`

You should now be ready for development. Let's do a test to make sure everything is wokring

### Test Run
- Open a terminal inside the project and run 'clasp run HelloWorld' and you should see the following output: "Hello World!"
- If that succeeds, you have successfully setup your development environment
- Check the logs to verify that the code ran: https://script.google.com/u/0/home/projects/1EPqaSsc9UfkhVfQ_C6K4TjRY7PQYY0bvJq-37hcRZB2zg11DcwUzn4cP/executions

## Important Commands
- **clasp push** -This pushes the code to the google apps script project which effectively deploys the code
- **clasp run \<function>** - This runs the code on the google apps script project. It is used for testing functions in the app prior to deplyment. You must specify a function to run as defined in the code


## Important Links:
### This is the link to the form where the code is deployed to
https://forms.gle/v9kitcKe45XMQ4SA6
### This is where the logs are viewable
https://script.google.com/u/0/home/projects/1EPqaSsc9UfkhVfQ_C6K4TjRY7PQYY0bvJq-37hcRZB2zg11DcwUzn4cP/executions
### This is where the deployed code resides
https://script.google.com/u/0/home/projects/1EPqaSsc9UfkhVfQ_C6K4TjRY7PQYY0bvJq-37hcRZB2zg11DcwUzn4cP/edit?pli=1
### This is where you create OAuth 2.0 credentials
https://console.cloud.google.com/apis/credentials?authuser=0&project=socially-responsible-computing
