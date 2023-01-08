Feature: Is login successful?
  Is Login process successfully completed
  Scenario: Login a memeber on Baggie
    Given I visit Baggie Login Page
    When I enter my email
    When I enter password
    When I click on login
    Then I should be Logged in
   