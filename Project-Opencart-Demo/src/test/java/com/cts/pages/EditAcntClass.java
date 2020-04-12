package com.cts.pages;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EditAcntClass {

	WebDriver driver;   
	@FindBy(xpath="//a[@class='dropdown-toggle'][@title='My Account']")
	WebElement myaccount;
	@FindBy(xpath="//*[@id=\"top-links\"]/ul/li[2]/ul/li[2]/a")
	WebElement login;
	@FindBy(name="email")
	WebElement Email;
	@FindBy(name="password")
	WebElement Password;
	@FindBy(xpath="//*[@id=\"content\"]/div/div[2]/div/form/input")
	WebElement login_btn;
	@FindBy(xpath="//*[@id=\"content\"]/ul[1]/li[1]/a")
	WebElement Editaccount;
	@FindBy(name="firstname")
	WebElement firstname;
	@FindBy(name="firstname")
	WebElement erase;
	@FindBy(xpath="//*[@id=\"content\"]/form/div/div[2]/input")
	WebElement continue_btn;
	
	
	public EditAcntClass(WebDriver driver) {
		// TODO Auto-generated constructor stub
		this.driver=driver;
		  PageFactory.initElements(driver,this);
	}
	//This is used to login to the account
	public void LoginDetails() throws IOException, InterruptedException {
		
	myaccount.click();
	login.click();
	Email.sendKeys("priyankamule0@gmail.com");
    Password.sendKeys("priya123@");
    login_btn.click();
   }
	//This is used to edit or update the user details
    public void Editaccount() {
	 Editaccount .click();
     firstname.clear();
     erase.sendKeys("PriyaPravali");
	 continue_btn.click();
    // driver.close();
	  
}
}
