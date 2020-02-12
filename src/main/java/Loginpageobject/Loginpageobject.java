package Loginpageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Loginpageobject {
	
	
	WebDriver dr;
	public Loginpageobject(WebDriver dr)
	{
		this.dr=dr;
		
	}
	
	public String url(){
		 String url="https://stagesite5-identity.medrio.com/identity/login?signin=e515505840cbf62c00e7ec86c4a47c37";
		 System.out.println(url);
		 System.out.println(url);
		 System.out.println(url);
		 System.out.println(url);
		 return url;
	}
	
	By username=By.id("username_");
	By password=By.id("password");
	By loginclick=By.id("btnLogin");
	
	public WebElement usernamecall()
	{
		return dr.findElement(username);
	}
	
	public WebElement passwordcall()
	{
		return dr.findElement(password);
	}
	public WebElement loginclick()
	{
		return dr.findElement(loginclick);
	}
	

}
