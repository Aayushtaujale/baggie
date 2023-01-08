Feature: Is contact us successful?
  Is Contact Us process successfully completed
  Scenario: Contact us on Baggie
    Given I visit Contact Us Page
    When I enter my full name
    When I enter my phone number
    When I enter my email
    When I enter my message
    When I click on the submit button
    Then mail should be send
  