$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:NewToursAppFeatures/Login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "name": "user on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User lands on Welcome page4",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "test",
        "test"
      ]
    },
    {
      "cells": [
        "test2",
        "test2"
      ]
    },
    {
      "cells": [
        "test3",
        "test3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "name": "user on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"test\" and \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on Welcome page4",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_lands_on_Welcome_page4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "name": "user on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"test2\" and \"test2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on Welcome page4",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_lands_on_Welcome_page4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "name": "user on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"test3\" and \"test3\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on Welcome page4",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_lands_on_Welcome_page4()"
});
formatter.result({
  "status": "passed"
});
});