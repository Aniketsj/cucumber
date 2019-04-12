Feature: Loginstage
Scenario Outline: Login with username and password

Given user is on login page
When title of the page Medrio Login
Then enter "<username>" and "<password>"
And click on login button
Then observe page title of home page


Examples:

|username|password|
|aj39r|Medrio3333|
|useraniket1|Medrio2222|