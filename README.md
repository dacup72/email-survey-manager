Live Project: https://emailsurveymanager.herokuapp.com/


# Email Survey Manager

Email Survey Manager is a full-stack React / Redux application allowing users to create and send mass email surveys to collect feedback results from recipients.  MongoDB / Mongoose are used to store data on the backend and authentication is done through Passport.js and Google OAuth.  In addition, I used Sendgrid API to send out emails to chosen recipients and webhooks to retrieve the reciepients responses through SendGrid.  In addition Stripe API is used for handling payments.  Modern ES6 syntax is used throughout the entire application and I have future plans to add more functionality including creating a better UI for creating custom survey emails and more useful statistics displays for survey recipient response data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

What things you need to install the software and how to install them

```
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* Terminal (Mac) / Git Bash (PC)
```

### Installing

A step by step series of examples that tell you how to get a development env running

* Install the prerequisites on your computer

```
* Javascript
* Node.js
* MongoDB
* Terminal (Mac) / Git Bash (PC)
```

* Obtain API key from the following

```
* Google OAuth: https://console.developers.google.com/
* Cookie Sessions: https://www.npmjs.com/package/cookie-session
* Stripe API: https://stripe.com/
* SendGrid API: https://sendgrid.com/

```

* Set up localhost MongoDB server with the following terminal command

```
* $ mongod
```

* Set up your Mongo database

```
* Add database "emailsurveymanager" with the MongoDB CLI
```

* Use terminal / git bash to run npm install for required npm packages on root folder and in client folder

```
* $ npm install
* $ cd client
* $ npm install
```

* Use terminal / git bash to start the application from the root folder with

```
* $ npm run dev
```

## Making A Fake Payment With Stripe

* Use the following credit card info to make a fake / test payment with Stripe

```
Card Number: 4242 4242 4242 4242
Expiration Date: Any date in the future
CSB: 123
```

## Built With

* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](http://mongoosejs.com/)
* [Axios](https://www.npmjs.com/package/axios)
* [React.js](https://reactjs.org/)
* [React Redux](https://redux.js.org/)
* [Passport.js](http://www.passportjs.org/)
* [Google OAuth](https://developers.google.com/identity/protocols/OAuth2)
* [Cookie Session](https://www.npmjs.com/package/cookie-session)
* [SendGrid API](https://sendgrid.com/)
* [Stripe API](https://stripe.com/docs/api)

## Code Editor: 

* [Visual Studio Code](https://code.visualstudio.com/)

## Authors 

* **Dylan Acup** - [Portfolio](https://www.dylanacup.com)
