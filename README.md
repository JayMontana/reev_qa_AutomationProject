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
