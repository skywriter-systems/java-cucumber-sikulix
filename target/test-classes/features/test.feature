Feature: Test feature
    This test will run by navigating to 
    Log in the test account
    Create a new contact

    Scenario: Click google chrome icon
    Given I click on the google chrome icon
    
    Scenario: Navigate to skywritersaas.com
    Given Enter skywritersaas.com into url search bar

    Scenario: Login to account
    Given Use pre-existing credentials to login to account
    
    Scenario: Create new Contact
    Given New contact navigation
    
    Scenario: Input new contact data
    Given New contact, input information
    
    # Scenario: Go "crazy" with the mouse
    # Given I go crazy with the mouse