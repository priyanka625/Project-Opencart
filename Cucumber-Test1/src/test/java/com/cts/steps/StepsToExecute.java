package com.cts.steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepsToExecute {
	WebDriver driver;
	@Given("user on login page")
	public void user_on_login_page() {
		
		
		System.setProperty("webdriver.chrome.driver","C:/selenium/eclipse/chromedriver.exe" );
		driver = new ChromeDriver();
		driver.get("http://newtours.demoaut.com");
	System.out.println("User is on login page");
	
	    
	}
	@When("user enters valid {string} and {string}")
	public void user_enters_valid_and(String username, String password) {
		driver.findElement(By.name("userName")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		
	}
	
	

	@When("User clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.name("login")).click();
	    System.out.println("user clicks login button");
	}

	@Then("User lands on Welcome page4")
	public void user_lands_on_Welcome_page4() {
		
		System.out.println(driver.getTitle()); 
	    System.out.println("user lands on welcome page");
	    driver.quit();
	}


}
