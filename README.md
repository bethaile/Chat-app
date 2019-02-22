# Chat-app
This is a chat application that is implemented in Angular 4 and nodeJS as backend using MongoDB as NoSQL databse to persist user registration.
sockeio is used to communicate the chat services to and prom a client.

The implementaiton for the backend and the front end uses an itnegrated bin/www file so that the program can be launched by 
the follwoing steps.

 Step 1. ng build
  
 Step 2. npm start
    
The the Angular application will start port 3000 and the socketio is running on port 4000 internally.
    
To use the chat service the suer should be registred first then log in to the system with the user crednetials username and password. The chat is at the moment used in rooms. Hence once logged in the user can acess the pages the are for chatting and adding contacts.

