Feature: Is login successful?
  Is Login process successfully completed
  Scenario: Login a memeber on Baggie
    Given I visit Baggie Login Page
    When I enter my email
    When I enter my password
    When I press Login
    Then I should be loggedin