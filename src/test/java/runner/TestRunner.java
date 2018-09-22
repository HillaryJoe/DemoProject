package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/EndToEndTest.feature",
		glue = {"stepDefinition"},
		plugin = {"pretty", "html:target/cucumber-reports","junit:target/cucumber-reports/Cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = false
		)
		
public class TestRunner {
		

}
