$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test.feature");
formatter.feature({
  "name": "Test feature",
  "description": "    This test will run by navigating to \n    Log in the test account\n    Create a new contact",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Click google chrome icon",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on the google chrome icon",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.Open_googleChrome()"
});
formatter.result({
  "error_message": "FindFailed: chromeicon.png: (56x34) in S(0)[0,0 2560x1080] E:Y, T:3.0\n  Line 2782, in file Region.java\n\n\tat org.sikuli.script.Region.wait(Region.java:2782)\n\tat org.sikuli.script.Region.find(Region.java:2329)\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\n\tat org.sikuli.script.Region.click(Region.java:3736)\n\tat step.definitions.DesktopSteps.Open_googleChrome(DesktopSteps.java:27)\n\tat ✽.I click on the google chrome icon(src/test/resources/features/test.feature:7)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigate to skywritersaas.com",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter skywritersaas.com into url search bar",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.Navigate_to_skywriter()"
});
formatter.result({
  "error_message": "FindFailed: skywriter.png: (312x130) in S(0)[0,0 2560x1080] E:Y, T:5.0\n  Line 2782, in file Region.java\n\n\tat org.sikuli.script.Region.wait(Region.java:2782)\n\tat step.definitions.DesktopSteps.Navigate_to_skywriter(DesktopSteps.java:34)\n\tat ✽.Enter skywritersaas.com into url search bar(src/test/resources/features/test.feature:10)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to account",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Use pre-existing credentials to login to account",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.Login_account()"
});
formatter.result({
  "error_message": "FindFailed: username.png: (147x37) in S(0)[0,0 2560x1080] E:Y, T:5.0\n  Line 2782, in file Region.java\n\n\tat org.sikuli.script.Region.wait(Region.java:2782)\n\tat org.sikuli.script.Region.find(Region.java:2329)\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\n\tat org.sikuli.script.Region.click(Region.java:3736)\n\tat step.definitions.DesktopSteps.Login_account(DesktopSteps.java:41)\n\tat ✽.Use pre-existing credentials to login to account(src/test/resources/features/test.feature:13)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create new Contact",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "New contact navigation",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.Navigate_newContact()"
});
formatter.result({
  "error_message": "FindFailed: audienceicon.png: (46x36) in S(0)[0,0 2560x1080] E:Y, T:5.0\n  Line 2782, in file Region.java\n\n\tat org.sikuli.script.Region.wait(Region.java:2782)\n\tat org.sikuli.script.Region.find(Region.java:2329)\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\n\tat org.sikuli.script.Region.click(Region.java:3736)\n\tat step.definitions.DesktopSteps.Navigate_newContact(DesktopSteps.java:55)\n\tat ✽.New contact navigation(src/test/resources/features/test.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Input new contact data",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "New contact, input information",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.newContact_info()"
});
formatter.result({
  "error_message": "FindFailed: firstname.png: (130x27) in S(0)[0,0 2560x1080] E:Y, T:5.0\n  Line 2782, in file Region.java\n\n\tat org.sikuli.script.Region.wait(Region.java:2782)\n\tat org.sikuli.script.Region.find(Region.java:2329)\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\n\tat org.sikuli.script.Region.click(Region.java:3736)\n\tat step.definitions.DesktopSteps.newContact_info(DesktopSteps.java:67)\n\tat ✽.New contact, input information(src/test/resources/features/test.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});