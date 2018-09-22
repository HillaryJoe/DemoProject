package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/EndToEndTest.feature", glue = { "stepdefinition" }, plugin = {
		"pretty", "html:target/cucumber-reports" }, monochrome = true, strict = true, dryRun = false)

public class TestRunner {

}
