package step.definitions;

import config.SikuliConfiguration; 
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import org.sikuli.script.FindFailed;
import org.sikuli.script.Region;
import org.sikuli.script.Screen;


import java.util.logging.Logger;

public class DesktopSteps {

    private Screen screen;
    Logger logger = Logger.getLogger(Hooks.class.getName());


    @Before
    public void setConfig() throws Exception {
        screen = new Screen();
        SikuliConfiguration.setSikuliSettings();
    }

    @Given("^I click on the google chrome icon$")
    public void Open_googleChrome() throws Throwable {
        screen.click("chromeicon.png", 10);
        screen.wait("identifier.png", 10);
    }

    @Given("^Enter skywritersaas.com into url search bar$")
    public void Navigate_to_skywriter() throws Throwable {
    	screen.type(null, "prod.skywritersaas.com\n", 0);
        screen.wait("skywriter.png", 10);


    }
    
    @Given("^Use pre-existing credentials to login to account$")
    public void Login_account() throws Throwable {
    	screen.click("username.png", 0);
    	screen.type(null, "ilabtest.ilabtest", 0);
    	screen.click("password.png", 0);
    	screen.type(null, "34Simple12", 0);
    	screen.click("login.png", 0);



    }
    
    @Given("^New contact navigation$")
    public void Navigate_newContact() throws Throwable {
    	Region r1 = new Region(767,290,309,202);
    	
    	screen.click("audienceicon.png", 0);
        screen.click("contacts.png", 0);
		r1 .click("add.png");



    }
    
    
    @Given("^New contact, input information$")
    public void newContact_info() throws Throwable {
    	
    	screen.click("firstname.png", 0);	//Firstname
        screen.type(null, "ilabtest", 0);
        screen.click("lastname.png", 0);	//Lastname
        screen.type(null, "ilabtest", 0);
        
    	screen.click("title.png", 0);		//Title
        screen.type(null, "This is an ilabtest", 0);
        screen.click("website.png", 0);		//Website
        screen.type(null, "test_input", 0);

        //screen.keyDown(Key.PAGE_DOWN);
        Thread.sleep(500);
        screen.keyUp();
        
    	screen.click("company.png", 0);		//Company
        screen.type(null, "test_input", 0);
        screen.click("nextbutton.png", 0);




    }

   
}
