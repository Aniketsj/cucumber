package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="D:\\e\\cucumber_project\\src\\test\\java\\feature\\login.feature",
glue={"stepdefination"},
format={"pretty","html:test-output","json:json_output/cucumber.json","junit:test_xml/cucumber.xml"},
monochrome=true,
strict=true

		)

public class testrunnterclass {

}
