package com.cts.TestRunner;

import org.junit.runner.RunWith;
import org.junit.runners.Suite.SuiteClasses;

import cucumber.api.junit.Cucumber;

import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Project/project.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report",
				"json:reports/cucumber-html-report/jsonreport",
		"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"}, 
		tags = {"@tc04_AddtoCart"},
		glue = {"com.cts.Stepdefinition"}
		)
@SuiteClasses({})
public class AddToCartRunner {

}
