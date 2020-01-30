# Ticket-Booking System

System that allows users to book a seat in a movie theatre - no authentication required
Display all the seats in the theater and allow users to book it by clicking it. Only one user should be allowed to reserved a specific seat.If another user clicks a seat that was booked.

## Installation
```bash
# Should have MongoDb,NODE 
# In folder "backend" you can find backend of the project as well.
# Install NPM packages using command line for both front-end and backend directory for node-module.

```

* Front-end is running with url localhost:3000
* Back-end is running with url localhost:5000 

## Usage
In this repo in root we are having front end of the application , which is built over react , and a Sub-folder named "backend" , "backend" is backend of the application which is built on the node. To execute front end of the system run command

```bash 
npm start
```
On browser open localhost:3000 you will see the output. As the very first page communicates with backend and get some records from the database , you also need to run backend on another terminal , change directory to "backend" and execute command :-

```bash 
npm start 
```
it will start backend on localhost:5000

## Test Case
To execute test cases , reach to folder "backend" in terminal , and write following command

```bash 
npm test
 ```
It will show test case status
