Feature: Is register successful?
  Is Registration process successfully completed
  Scenario: Register a memeber on Baggie
    Given I visit Baggie Registration Page
    When I enter my firstname
    When I enter my lastname
    When I enter my contact
    When I enter my email
    When I enter my password
    When I press Register
    Then I should be loggedin