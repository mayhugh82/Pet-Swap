# 🐕 Pet-Swap 🐕
An app used to connect with a pet sitter in your area!

# Description 📝
Pet-Pawtners is an application that helps dog owners meet a sitter that can handle your dog's character trait! As for sitters, this app too allows them to search for a dog or dogs that they can manage to care for. The whole point of this application is to get your dog away from being boarded and they go to a home with a sitter who cares! 
![Home Page] (/images/home.png)

The web application is deployed on heroku: https://pet-pawtners.herokuapp.com/. The way this website works is by taking the user information, preferences, storing them in the database, then finding matches to your preferences in the sitter database and returning those matches. This is done by taking the information entered by the user from the html page and receiving it on the API side. The API then will parse the information into a sequelize object and using sequelize mechanisms to store the object in the database, also using sequelize query  functionality we retrieve matches from that same database where all the criteria are the same where the city, state, and animal characteristics and return that list of matches as json to the front end. The front end in turn will parse the json list and will dynamically generate a HTML list of matches and display that list to the user through a Toastr pop-up. If no matches were found (an empty list is returned from the API), a Toastr pop-up will inform the user that no suitable matches are available at this time. 

The matching algorithm requires that city, state, duration of stay, size, number of dogs, and temperament are equal between search and possible matches. 

# 💾 Installation 💾	
```
1.	Fork the repository --> Go ahead and click on the far top right corner and fork it to your GitHub Portfolio 
2.   Clone the repository to your local PC. This way you can make your own edits. 
3.	Update your configuration with your local user name, password, and server ip for mysql, in the development section. This can be found in config.js file.  You can create a .env to hide your information. 
4.	Run `npm i` to install the dependencies. 
5. Create a database in you local MySQL server named PetSwap. 
6. Enter `node server.js` in your terminal to start the program. That will start inserting some seeding records and starts the web application making it available on your localhost port 8080. 

```
# 🖥️ Deployment on Heroku 🖥️	
```
* Prerequisite: If you haven't done so yet, create an account on [Heroku] (https://signup.heroku.com/login). 
1. Create a web app on Heroku named petswap-(your initials) 
2. Once the app is created, it will go to the Deploy tab where you can connect to your GitHub and use the forked app. 
3. I recommend a manual deploy from your master branch. You will then click deploy. You should receive a message stating "build succeeded"
4. Go to your overview and click on "config add ons". 
5. Type in Jaws DB and add that as your config. 
6. Go back into the code and go to your config.js and make sure the production shows the following:
`"production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"` 
7. You can now open the app through Heroku and test it out!! 
```

# ⛓️	Technologies / Dependencies ⛓️	
```
👾	NPM packages:
     - Node
     - Nodemon 
     - Require 
     - Toastr 
     - Sequelize 
     - MySQL2
👾  jQuery
👾  HTML / CSS / Bootstrap
```

# 🖊️ Authors 🖊️ 
```
👩‍💻  [Dana Nobile] (https://github.com/DanaNobile) 
👩‍💻  [Diana Mayhugh] (https://github.com/mayhugh82)
👨‍💻  [Anthony Carmack] (https://github.com/InvNO1247)
👨‍💻  [Andy Edstrom] (https://github.com/andree15)
👩‍💻  [Jacqueline Geiger] (https://github.com/jcqlng)
``` 

# 🔗 Links and Resources 🔗
```
💻	 For assistance with getting the module in node to show an unordered list --> https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement 

💻	 For assistance with [Sequelize] (https://sequelize.org/)

💻	 For assistance with [Sequelize & Sequelize-cli migrations] (https://sequelize.org/master/manual/migrations.html) 

💻	 For deploying with [Heroku & Sequelize] (https://sequelize.readthedocs.io/en/1.7.0/articles/heroku/)

💻   For help using the [Sequelize Sync Function] (https://medium.com/@smallbee/how-to-use-sequelize-sync-without-difficulties-4645a8d96841) 

💻   For help with [API setups] (https://medium.com/@avanthikameenakshi/building-restful-api-with-nodejs-and-mysql-in-10-min-ff740043d4be)

```