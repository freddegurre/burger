# Burger application

This Application is a logger built with MySQL, Node, Express, Handlebars and a homemade ORM. Its following the MVC design pattern, using Node and MySQL to query and route data in your app, and Handlebars to generate the HTML.

### How does it work
* Burger, is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a Devour button. When the user clicks it, the burger will move to the right side of the page.

* The app store every burger in a database, whether devoured or not.

### Link to app

[Burgers!](https://burger-order.herokuapp.com/); 


### DB
The database is a simple MySql with one table. **Burgers** 

### dependencies
                "dependencies": {
                    "body-parser": "^1.18.2",
                    "express": "^4.16.3",
                    "express-handlebars": "^3.0.0",
                    "handlebars": "^4.0.11",
                    "mysql": "^2.15.0"
                }

###### Fredrik Gustafson

:poop: