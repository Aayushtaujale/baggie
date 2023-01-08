Feature: Is contact us successful?
  Is Contact Us process successfully completed
  Scenario: Contact us on Baggie
    Given I visit Contact Us Page
    When I enter the full name
    When I enter the phone number
    When I enter the email address
    When I enter the message
    When I clicked on the submit button
    Then mail should be send
  