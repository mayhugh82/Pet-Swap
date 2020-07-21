# 🐕 Pet-Swap 🐕
An app used to connect with a pet sitter in your area!

# Description 
Pet-Pawtners is an application that helps dog owners meet a sitter that can handle your specific pet’s character trait! As for sitters, this app too allows them to search for a dog or dogs that they can manage to care for. The whole point of this is to get your dog away from being boarded and they go to a home with a sitter who cares! 

The web is deployed on heroku: https://pet-pawtners.herokuapp.com/. 

# Installation 
1.	Fork the repository --> Go ahead and click on the far top right corner and fork it to your GitHub Portfolio 
2.  Clone the repository to your local PC. This way you can make your own edits. 
3.	Update your config with your local user name, password, and server ip for mysql, in the development section. This can be found in config.js file.  You can create a .env to hide your that information. 
4.	Run npm install to install the sequelize library and the sequelize-cli library. This will also install mysql2, which you need.
5.	Run npx sequelize-cli db:create to create the petswap database in mysql.
6.	Run npx sequelize-cli db:migrate to create the tables for the models. 

# Technologies / Dependencies 
👾	NPM packages:
     - Node
     - Nodemon 
     - Require 
     - Toastr 
     - Sequelize 
     - MySQL2
👾	MySQL Work Bench 
👾  jQuery
👾  HTML / CSS / Bootstrap

# Authors 
👩‍💻  Dana Nobile
👩‍💻  Diana Mayhugh
👨‍💻  Anthony Carmack 
👨‍💻  Andy Edstrom 
👩‍💻  Jacqueline Geiger

# Links and Resources
💻	 For assistance with getting the module in node to show an unordered list --> https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement 

💻	 For assistance in Sequelize and how to use --> https://sequelize.org/

💻	 For assistance with sequelize migrations with sequelize-cli, creating models, and  --> https://sequelize.org/master/manual/migrations.html 

💻	 For deploying with Heroku --> https://sequelize.readthedocs.io/en/1.7.0/articles/heroku/