
# PROJECT NAME

Feedback App with Redux

## Description

_Duration: Weekend Challenge_

this is an app for collecting feedback from a user and saving it to a database. It includes an admin page to allow administrators to view all the feedback and delete unnecessary feedback. I was playing around with react components to understand them, so I only used two buttons in the app, and one table.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `prime_feedback`
2. The queries in the `data.sql` file are set up to create the necessary table and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in anpther instance of your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Arriving at the homepage, a user can start a new survey
2. After each section of the survey the user clicks 'next' to move on to the next section
3. After filling out all the feedback, the user has an opportunity to review their answers, and if they don't like them, they can go back and redo their answers.
4. Once satisfied, the user can submit the answers, which are stored on a database
5. An administrator can access the admin page, allowing them to review all the feedback in the database and delete that which is not needed


## Built With

List technologies and frameworks here
- React
- Redux
- PostgreSQL
- Node
- Material UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 
