Feature: Serial Number Management

  As a user, I want to manage serial numbers in the application 
  so that I can add and delete serial numbers as needed.

  Background:
    Given I am on the Serial Number page

  Scenario: Add a new serial number and verify it is added
    When I add a valid serial number
    Then the serial number should be visible in the list

  Scenario: Delete an existing serial number and verify it is deleted
    Given a serial number is already added
    When I delete the serial number
    Then the serial number should no longer be visible in the list

  Scenario: Cleanup after tests
    Given a serial number is present in the list
    When I attempt to delete the serial number
    Then the serial number should no longer be visible in the list
