package com.cts.test;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	WebDriver driver;
	
	@FindBy(name="userName")
	WebElement user;
	
	@FindBy(name="password")
	WebElement pass;
	
	@FindBy(name="login")
	WebElement btnLogin;
	
	public LoginPage() {
		
	System.setProperty("webdriver.chrome.driver","E:/Chrome driver/chromedriver.exe");
	driver=new ChromeDriver();
	LoginPageClassMethod(driver);
	}

	private void LoginPageClassMethod(WebDriver d) {
		
	driver=d;
	PageFactory.initElements(driver, this);
	
	}
	@Test
	public void login() {
		
	driver.get("http://newtours.demoaut.com");
	user.sendKeys("test");              pass.sendKeys("test");
	btnLogin.click();
	
	
	}
}
