Feature: Is add bag successful?
  Is Add Bag process successfully completed
  Scenario: Add a bag on Baggie
    Given I visit Add Bag Page
    When I upload an image
    When I enter bag name
    When I enter bag price
    When I enter bag description
    When I click on the Add Bag button
    Then bag should be added
  