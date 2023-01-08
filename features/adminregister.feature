Feature: Is register successful?
  Is Registration process successfully completed
  Scenario: Register an admin on Baggie
    Given I visit Register Admin Page
    When I enter admin name
    When I enter admin address
    When I enter admin phone
    When I enter admins email
    When I enter my admins password
    When I click on admin register
    Then I should be registered