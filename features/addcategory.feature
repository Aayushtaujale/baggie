Feature: Is add category successful?
  Is Add Category process successfully completed
  Scenario: Add a category on Baggie
    Given I visit Add Category Page
    When I enter image
    When I enter title
    When I enter description
    
    Then I should see the category