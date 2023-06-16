# Google Form Extension: Git File Upload

This is a Google Forms extension that uploads documents to a repository on submission of a form. The user should fill out the form and include their documents and upon submission the information and the document will be version controlled on an external Github repository

## Google Form Extension Setup Guide

This guide will walk you through the setup process for creating a Google Form extension using Google Apps Script and CLASP. The extension allows you to add custom functionality and automation to your Google Forms.

### Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- **Node.js**: You can download and install Node.js from the official website: [Node.js](https://nodejs.org)
- **CLASP**: CLASP (Command Line Apps Script Projects) is a command-line tool used for managing Google Apps Script projects. Install CLASP globally by running the following command:
  ```bash
  npm install -g @google/clasp
  ```
  
### Project Setup
Follow the steps below to set up your Google Form extension project:

1. **Open the google apps script project:**

- Go to `https://script.google.com/u/0/home/projects/1EPqaSsc9UfkhVfQ_C6K4TjRY7PQYY0bvJq-37hcRZB2zg11DcwUzn4cP/edit?pli=1`

2. **Clone the Apps Script project locally:**

- Open your terminal or command prompt.
- Navigate to the directory where you want to store your project files.
- Run the following command to clone the project:
```
clasp clone <scriptId>
```
- Replace <scriptId> with the ID of your Apps Script project, which you can find in the project settings.

3. **Set up local development:**

- Go to `https://github.com/google/clasp` to set up google clasp to create a development environment
- Google clasp allows you to push and pull from the google apps scr ipt project
