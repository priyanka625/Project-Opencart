package com.cts.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SiteMapClass {
	
	WebDriver driver; 
	@FindBy(xpath="/html/body/footer/div/div/div[2]/ul/li[3]/a")
	WebElement sitemap;
	@FindBy(xpath="//*[@id=\"content\"]/div/div[2]/ul/li[1]/a")
	WebElement spclofrs;
	//@FindBy(xpath="//*[@id=\"content\"]/div[2]/div[1]/div/div[2]/div[1]/h4/a")
	//WebElement product;

	                                         
	public SiteMapClass(WebDriver driver) {
			this.driver=driver;
		  PageFactory.initElements(driver,this);
	}
	//This is used to go to sitemap
	public void SiteMap() {
		sitemap.click();
		
			}
	//This is used to view special offers
	public void SpecialOffers() {
		spclofrs.click();
		//product.click();
		
	}


}
