@tag
Feature: Title of your feature
  I want to use this template for my feature file

 @tc01_RegisterandLogin
Scenario Outline: To check with valid credentails
Given the user launch the chrome application      
When the user creates a new account
Then the user enters "<username>" and "<password>" and clicks 

Examples:  

|            username               |    password        |
|  priyankamule0@gmail.com          |    priya123@       |

@tc02_search
Scenario: search the product
Given the user launch chrome application
When click on the search button select the product
And close the website


@tc03_sitemap
Scenario: search for the special offers
Given user launches the chrome application
When the user click on the sitemap
And select special offers

@tc04_AddtoCart
Scenario: go to wishlist and add to cart
Given user launch the chrome application
Then user login using username and password
Then go to wishlist
And add the product to cart 


@tc05_EditAcnt
Scenario: edit account details
Given user launch the chrome app
When user login using un and pw
And click on edit your accont details






