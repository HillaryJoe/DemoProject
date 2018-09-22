package stepdefinition;

import java.util.concurrent.TimeUnit;

import java.util.Set;

import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	WebDriver driver;

	@Before
	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() {
		System.setProperty("webdriver.chrome.driver",
				".\\src\\main\\resources\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://automationpractice.com/index.php");
		driver.findElement(By.xpath("//a[@class='login']")).click();
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys("someone@example.com");
		driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys("Password123");
		driver.findElement(By.xpath("//button[@id='SubmitLogin']")).click();

	}

	@When("^the user orders T-Shit$")
	public void user_click_T_Shirts_button() throws Exception {

		WebElement linkTShirt = driver.findElement(By.xpath("//div/ul/li/a[@title='T-shirts']"));
		linkTShirt.click();
		WebElement chkBoxTSize = driver.findElement(By.xpath("//input[@id='layered_id_attribute_group_2']"));
		chkBoxTSize.click();
		WebElement chkBoxColour = driver.findElement(By.xpath("//input[@id='layered_id_attribute_group_14']"));
		chkBoxColour.click();
		WebElement btnStock = driver.findElement(By.xpath("//span[@class='available-now']"));

		try {
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("scroll(250, 0)"); // if the element is on top.
			jse.executeScript("scroll(0, 250)"); // if the element is on bottom.
		} catch (JavascriptException e) {
			e.getStackTrace();
		} catch (Exception e) {
			e.getMessage();
		}

		// use ‘perform()’ action on the main menu to hold the menu list till
		// the time Selenium identify the sub menu item and click on it

		Actions action = new Actions(driver);
		action.moveToElement(btnStock).perform();

		WebElement btnAddToCart = driver.findElement(By.xpath("//a[@title='Add to cart']"));
		action.moveToElement(btnAddToCart).perform();

		action.click();
		action.perform();
		Set<String> windowHandle = driver.getWindowHandles();

		for (String s : windowHandle) {
			driver.switchTo().window(s);
			Thread.sleep(3000);
			WebElement linkCheckout = driver.findElement(By.xpath("//a[@title = 'Proceed to checkout']"));
			linkCheckout.click();
		}

		driver.switchTo().parentFrame();
		WebElement btnCheckout1 = driver.findElement(By.xpath("//div[@id='HOOK_SHOPPING_CART']//following::span[1]"));
		try {
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("scroll(250, 0)"); // if the element is on top.
			jse.executeScript("scroll(0, 250)"); // if the element is on bottom.
		} catch (JavascriptException e) {
			e.getStackTrace();
		}

		btnCheckout1.click();
		WebElement btnCheckout2 = driver
				.findElement(By.xpath("//button[@class='button btn btn-default button-medium']/child::span"));
		try {
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("scroll(250, 0)"); // if the element is on top.
			jse.executeScript("scroll(0, 250)"); // if the element is on bottom.
		} catch (JavascriptException e) {
			e.getStackTrace();
		}

		btnCheckout2.click();

		WebElement chkTerms = driver.findElement(By.xpath("//input[@type='checkbox']"));
		chkTerms.click();
		WebElement btnCheckout3 = driver.findElement(
				By.xpath("//button[@class='button btn btn-default standard-checkout button-medium']/child::span"));
		btnCheckout3.click();
		WebElement payByBank = driver.findElement(By.xpath("//a[contains(text(),'Pay by bank wire ')]"));
		payByBank.click();
		WebElement btnOrderConfirm = driver.findElement(By.xpath("//span[contains(text(),'I confirm my order')]"));
		btnOrderConfirm.click();
		String actual = driver.findElement(By.xpath("//strong[contains(text(),'Your order on My Store is complete.')]"))
				.getText();
		String expected = "Your order on My Store is complete.";
		Assert.assertEquals(expected, actual);

	}

	@Then("^the user should receive OrderId details$")
	public void user_verify_their_orderhistory_from_MyAccount_Page() {
		WebElement userName = driver.findElement(By.xpath("//a[@class='account']/child::span"));
		userName.click();
		/*
		 * WebElement myAccount =
		 * driver.findElement(By.xpath("//a[@title='Addresses']/child::span"));
		 * myAccount.click();
		 */ WebElement orderHistory = driver
				.findElement(By.xpath("//span[contains(text(),'Order history and details')]"));
		orderHistory.click();

	}

	// code for 2nd scenarios

	@When("^user updates personal information \"([^\"]*)\"$")
	public void user_click_on_Logged_in_userName_from_Top_right_corner(String firstName) {

		WebElement userName1 = driver.findElement(By.xpath("//a[@class='account']/child::span"));
		userName1.click();
		WebElement myAccount = driver.findElement(By.xpath("//a[@title='Addresses']/child::span"));
		myAccount.click();
		WebElement btnUpdate = driver.findElement(By.xpath("//a[@title='Update']/child::span"));
		btnUpdate.click();
		WebElement txtFirstName = driver.findElement(By.xpath("//input[@id='firstname']"));
		txtFirstName.clear();
		txtFirstName.sendKeys(firstName);
		// scroll down the page to click save button
		WebElement txtPhone = driver.findElement(By.xpath("//input[@id='phone']"));
		try {
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("scroll(250, 0)"); // if the element is on top.
			jse.executeScript("scroll(0, 250)"); // if the element is on bottom.
		} catch (JavascriptException e) {
			e.getStackTrace();
		}
		txtPhone.clear();
		txtPhone.sendKeys("9876543210");

		WebElement btnSave = driver.findElement(By.xpath("//button[@id='submitAddress']/child::span"));
		btnSave.click();
	}

	

	@Then("^updated personal information should be displayed \"([^\"]*)\"$")
	public void firstname_changed() {

		String txtFirstName1 = driver
				.findElement(By.xpath("//ul[@class='last_item alternate_item box']//span[1][@class='address_name']"))
				.getText();
		String expected = "TestFirst";
		Assert.assertEquals(expected, txtFirstName1);

	}

	@After
	public void teardown() {
		driver.close();
	}

}
