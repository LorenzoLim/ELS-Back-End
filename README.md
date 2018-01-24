# Overview
The ELS-Back-End is the API back end for the Easy Log System(ELS) application. This api is deployed on [Heroku](https://els-api.herokuapp.com/) and uses mLab for the database.
____
### Purpose ###  
ELS is an easy to use app that allows DownerEDI employees to log hours spent on
projects across their sites. ELS looks to shorten the time spent on logging the hours and sending a report to the admin.
___
### Usage ###

Type into console:
```
git clone https://github.com/LorenzoLim/ELS-Back-End.git
npm install
```
Create an mLab or use an existing mLab account and create a new database.
[mLab](https://mlab.com)

Create a new file called ".env" on the root directory and add these variables.

DB_USER= Your mLab user on the new database
DB_PASSWORD= Your mLab password for the database
JWT_SECRET= Anything as long as it's the same value as the JWT_SECRET on the front end.

After the .env file has been made type into console:
```
npm start
```
Open a browser and use localhost:7000 as the URL and it should by default just say express. The app is only meant to be used for it's endpoints and don't display anything on the web. To view the front end have a look at the ELS front end.

Clone down the front end from this repository:
```
git clone https://github.com/Travis-Anderson83/ELS-Front-End.git
```
Have a look at the README.md of the front end to also set it up to use the full app.
____
#### End Points ###
