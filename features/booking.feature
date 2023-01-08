Feature: Is booking successful?
  Is booking process successfully completed
  Scenario: Buy a Bag on Baggie
    Given I visit Booking Bag Page
    When I enter user name
    When I enter user address
    When I enter user number
    When I click on the Buy button
    Then purchase should be succesful