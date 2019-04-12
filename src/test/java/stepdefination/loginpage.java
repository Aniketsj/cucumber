package stepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Loginpageobject.Loginpageobject;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginpage {
	WebDriver dr;
	
	Loginpageobject lp=new Loginpageobject(dr);
	
	@Given("^user is on login page$")
	public void user_is_on_login_page1()  {
		System.setProperty("webdriver.chrome.driver","F:\\Selenium course\\Browser driver\\chromedriver.exe");
		
		dr=new ChromeDriver();
		String url=(String) lp.url();
		System.out.println(url);
		dr.get(url);
	}

	@When("^title of the page Medrio Login$")
	public void title_of_the_page_Medrio_Login1()  {
		String title=dr.getTitle();
		System.out.println(title);
		String exp="Medrio Login";
//		if(title.equals(exp))
//		{
//			System.out.println("true");
//		}
//		else
//		{
//			System.out.println("false");
//		}
		Assert.assertEquals(exp, title);

	}

	@Then("^enter \"(.*)\" and \"(.*)\"$")
	public void enter_username_and_password(String username, String password) throws Throwable {
		
	   dr.findElement(By.id("username_")).sendKeys(username);
	   dr.findElement(By.id("password")).sendKeys(password);
	    
	}

	@Then("^click on login button$")
	public void click_on_login_button() throws Throwable {
		
		dr.findElement(By.id("btnLogin")).click();
	    
	}

	@Then("^observe page title of home page$")
	public void observe_page_title_of_home_page() throws Throwable {
	    String tit=dr.getTitle();
	    System.out.println(tit);
	}

}
