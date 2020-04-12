$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Project/project.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To check with valid credentails",
  "description": "",
  "id": "title-of-your-feature;to-check-with-valid-credentails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tc01_RegisterandLogin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user creates a new account",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;to-check-with-valid-credentails;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "title-of-your-feature;to-check-with-valid-credentails;;1"
    },
    {
      "cells": [
        "priyankamule0@gmail.com",
        "priya123@"
      ],
      "line": 14,
      "id": "title-of-your-feature;to-check-with-valid-credentails;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "To check with valid credentails",
  "description": "",
  "id": "title-of-your-feature;to-check-with-valid-credentails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tc01_RegisterandLogin"
    },
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user creates a new account",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user enters \"priyankamule0@gmail.com\" and \"priya123@\" and clicks",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterAndLogin.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 16175775800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLogin.the_user_creates_a_new_account()"
});
formatter.result({
  "duration": 7082513300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyankamule0@gmail.com",
      "offset": 17
    },
    {
      "val": "priya123@",
      "offset": 47
    }
  ],
  "location": "RegisterAndLogin.the_user_enters_and_and_clicks(String,String)"
});
formatter.result({
  "duration": 6143295500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "search the product",
  "description": "",
  "id": "title-of-your-feature;search-the-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@tc02_search"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the user launch chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "click on the search button select the product",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "close the website",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.the_user_launch_chrome_application()"
});
formatter.result({
  "duration": 12672249600,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct.click_on_the_search_button_select_the_product()"
});
formatter.result({
  "duration": 7065228600,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct.close_the_website()"
});
formatter.result({
  "duration": 688225500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "search for the special offers",
  "description": "",
  "id": "title-of-your-feature;search-for-the-special-offers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tc03_sitemap"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user launches the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user click on the sitemap",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "select special offers",
  "keyword": "And "
});
formatter.match({
  "location": "SiteMap.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 14005035200,
  "status": "passed"
});
formatter.match({
  "location": "SiteMap.the_user_click_on_the_sitemap()"
});
formatter.result({
  "duration": 2604393500,
  "status": "passed"
});
formatter.match({
  "location": "SiteMap.select_special_offers()"
});
formatter.result({
  "duration": 3517267200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "go to wishlist and add to cart",
  "description": "",
  "id": "title-of-your-feature;go-to-wishlist-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@tc04_AddtoCart"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user login using username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "go to wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "add the product to cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 13072217700,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.the_user_login_using_username_and_password()"
});
formatter.result({
  "duration": 6521006200,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.go_to_wishlist()"
});
formatter.result({
  "duration": 3000270800,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.add_the_product_to_cart()"
});
formatter.result({
  "duration": 2965669300,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "edit account details",
  "description": "",
  "id": "title-of-your-feature;edit-account-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@tc05_EditAcnt"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user launch the chrome app",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user login using un and pw",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "click on edit your accont details",
  "keyword": "And "
});
formatter.match({
  "location": "EditAcnt.user_launch_the_chrome_app()"
});
formatter.result({
  "duration": 12712423700,
  "status": "passed"
});
formatter.match({
  "location": "EditAcnt.user_login_using_un_and_pw()"
});
formatter.result({
  "duration": 6549544100,
  "status": "passed"
});
formatter.match({
  "location": "EditAcnt.click_on_edit_your_accont_details()"
});
formatter.result({
  "duration": 6192516700,
  "status": "passed"
});
});