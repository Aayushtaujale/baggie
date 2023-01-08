Feature: Is login successful?
  Is Login process successfully completed
  Scenario: Login an admin on Baggie
    Given I visit Baggie Admin Login Page
    When I enter admin email
    When I enter admin password
    When I click login
    Then I should be Logged inn
   