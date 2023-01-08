Feature: Is add category successful?
  Is Add Category process successfully completed
  Scenario: Add a category on Baggie
    Given I visit Add Category Page
    When I enter the title
    When I enter description
    When I click on post
    Then I am unable to click
  