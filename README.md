<<<<<<< HEAD
# Charge Point Installation App

App to support electricians in setting up a new charge point infrastructure.

The app allows the electricians to inform us about all the installed charge points, using their serial numbers.

The following functionalities are available:
- Visualize list of installed charge points 
- Adding a new charge point using serial number
- Remove a charge point from the installation

The app is composed of 2 components:
- Web application
- REST API

In order to run the app, you need to have nodejs installed.

To run it, execute in the command line:

```bash
$ npm install
$ npm start
```

The purpose of this task is to create some simple tests for automation. 

We would like you to implement the test using foloowing tools. Please choose the one that you prefer.
1. Playwright
2. Cypress

Test cases should be covered.
1. Add new serial number and verify new serial number is added.
2. Delete a serial number and verify that serial number is deleted.

Please apply the best practice and design pattern when you setup the framework / implement the test. This part is more important than the test script to cover the test cases mentioned above.
=======


# QA Automation Task 1.0.1

## Author
**JD Montana**

## Project Documentation

1. Add new serial number and verify new serial number is added.
2. Delete a serial number and verify that serial number is deleted.

NOTE: Separating related tests above into different files can introduce challenges around data setup, test isolation, 
and order dependence. However, I've decided to effectively manage both test-cases by using Playwright's hooks, 
grouping tests logically, and using fixtures to share setup code. I validated to make sure each test is 
independent and manages its own state by using playwrights 'test step' components. By doing this I can
achieve both modularity and reliability in my test automation framework.


## Test Execution Guide

1. **Open Terminal**  
   Launch the terminal or command prompt on your computer.

2. **Run the fallowing command to start hhe application:**
   - `npm start`
   Runs the application
Open [http://localhost:3000] to view it in the browser.

3. **Run one of the fallowing commands listed below:**  
   - `npm run testExec`
   This command executes all the tests defined in your Playwright test suite using the default configuration. This will run Playwright's browser testing tool. You can see all tests executed and have the option to open a trace to dive into the details of the test execution.

   - `npm run testui`  
   Launch the Playwright Test Runner UI for an interactive test-running experience. This command opens the Playwright Test Runner with a user interface, allowing you to select and run tests interactively.
   
   - `npm run debug`
   This command starts Playwright with debugging capabilities, useful for inspecting and debugging your tests.

   - `npm run headed`
   This command runs Playwright tests in headed mode, where the browser window is visible, allowing you to observe the tests in real-time.


## Test Project Exploration (POM Design Pattern)
   The project contains the fallowing directories:
   - **tests**: This directory contains test scripts, feature and test data files.
    - **features**: Contains a feature file written in Gherkin syntax, for better readability by non-technical stakeholders, product owners, business analysts, and testers.
    - **serialNumber_TestSuite**: Contains the test script of the project.
    - **utils**: Contains reusable utility functions and testing data for additional testing tools.
   - **pages**: Contains the Page Object script that contains an abstraction layer for interacting with the user interface of an application. Used for encapsulating elements and behaviors (actions) of a web page in a structured and reusable manner.
   

>>>>>>> origin/main
