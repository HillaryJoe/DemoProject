$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/EndToEndTest.feature");
formatter.feature({
  "line": 1,
  "name": "AutomationPractise End to End Test",
  "description": "Description: This feature verifies the Purchasing order history detials and update User FirsName from Account details",
  "id": "automationpractise-end-to-end-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5797861758,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to connect to renderer\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-DR1I83H\u0027, ip: \u0027192.168.43.202\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_40\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.30.477700 (0057494ad87321..., userDataDir: C:\\Users\\uesr\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 5b108aa7b80765f518ab4fd98abaf897\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\r\n\tat stepdefinition.StepDefinition.user_is_on_Home_Page(StepDefinition.java:32)\r\n\tat ✽.Given User is on Home Page(src/test/resources/features/EndToEndTest.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 7,
  "name": "Customer Place an Order and verify history",
  "description": "",
  "id": "automationpractise-end-to-end-test;customer-place-an-order-and-verify-history",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the user orders T-Shirt",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user should receive OrderId details",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.user_verify_their_orderhistory_from_MyAccount_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 196839988,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Update Personal Information (First Name) from My Account",
  "description": "",
  "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user updates personal information \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "updated personal information should be displayed \"\u003cfirstName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account;",
  "rows": [
    {
      "cells": [
        "firstName"
      ],
      "line": 15,
      "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account;;1"
    },
    {
      "cells": [
        "Testfirst"
      ],
      "line": 16,
      "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 7343447996,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to connect to renderer\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-DR1I83H\u0027, ip: \u0027192.168.43.202\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_40\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.30.477700 (0057494ad87321..., userDataDir: C:\\Users\\uesr\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: d92eb2526bc8cf34e1082222f32187bc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\r\n\tat stepdefinition.StepDefinition.user_is_on_Home_Page(StepDefinition.java:32)\r\n\tat ✽.Given User is on Home Page(src/test/resources/features/EndToEndTest.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Update Personal Information (First Name) from My Account",
  "description": "",
  "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user updates personal information \"Testfirst\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "updated personal information should be displayed \"Testfirst\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Testfirst",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_click_on_Logged_in_userName_from_Top_right_corner(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testfirst",
      "offset": 50
    }
  ],
  "location": "StepDefinition.firstname_changed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 367910895,
  "status": "passed"
});
});