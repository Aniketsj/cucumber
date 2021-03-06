$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/e/cucumber_project/src/test/java/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Loginstage",
  "description": "",
  "id": "loginstage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login with username and password",
  "description": "",
  "id": "loginstage;login-with-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page Medrio Login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "observe page title of home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "loginstage;login-with-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "loginstage;login-with-username-and-password;;1"
    },
    {
      "cells": [
        "aj39r",
        "Medrio3333"
      ],
      "line": 14,
      "id": "loginstage;login-with-username-and-password;;2"
    },
    {
      "cells": [
        "useraniket1",
        "Medrio2222"
      ],
      "line": 15,
      "id": "loginstage;login-with-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login with username and password",
  "description": "",
  "id": "loginstage;login-with-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page Medrio Login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter \"aj39r\" and \"Medrio3333\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "observe page title of home page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginpage.user_is_on_login_page1()"
});
formatter.result({
  "duration": 13596786569,
  "status": "passed"
});
formatter.match({
  "location": "loginpage.title_of_the_page_Medrio_Login1()"
});
formatter.result({
  "duration": 8787671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aj39r",
      "offset": 7
    },
    {
      "val": "Medrio3333",
      "offset": 19
    }
  ],
  "location": "loginpage.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 338357862,
  "status": "passed"
});
formatter.match({
  "location": "loginpage.click_on_login_button()"
});
formatter.result({
  "duration": 11655577125,
  "status": "passed"
});
formatter.match({
  "location": "loginpage.observe_page_title_of_home_page()"
});
formatter.result({
  "duration": 39124956,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with username and password",
  "description": "",
  "id": "loginstage;login-with-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page Medrio Login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter \"useraniket1\" and \"Medrio2222\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "observe page title of home page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginpage.user_is_on_login_page1()"
});
formatter.result({
  "duration": 16494030775,
  "status": "passed"
});
formatter.match({
  "location": "loginpage.title_of_the_page_Medrio_Login1()"
});
formatter.result({
  "duration": 20536986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "useraniket1",
      "offset": 7
    },
    {
      "val": "Medrio2222",
      "offset": 25
    }
  ],
  "location": "loginpage.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 1035100349,
  "status": "passed"
});
formatter.match({
  "location": "loginpage.click_on_login_button()"
});
formatter.result({
  "duration": 4445237474,
  "status": "passed"
});
formatter.match({
  "location": "loginpage.observe_page_title_of_home_page()"
});
formatter.result({
  "duration": 3080649528,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANIKETS-PC\u0027, ip: \u0027192.168.42.115\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\AniketS\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:1709}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 348281c2edb3baff069a37ddf67860a6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat stepdefination.loginpage.observe_page_title_of_home_page(loginpage.java:62)\r\n\tat ✽.Then observe page title of home page(D:/e/cucumber_project/src/test/java/feature/login.feature:8)\r\n",
  "status": "failed"
});
});