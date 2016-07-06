
FLGHTMKR</br >
Reduce the stress of traveling by using FLGHTMKR to calculate your door-to-airline-gate travel time. </br >

Overview

FLGHTMKR is a single-page web application that aggregates both the travel time from your location to LAX and the TSA wait time upon arriving at LAX. Simply enter your current address and your terminal number and FLGHTMKR will calculate your door-to-airline-gate travel time. FLGHTMKR eliminates the risk of missing your flight due to unforeseen traffic and also takes away the inconvenience of overestimating TSA wait times, arriving too early for your flight, and wasting hours at the airport.

Run locally

1. Fork and clone this repo.
2. In your terminal within the root directory, type: npm install
3. In two more tabs, type mongod in one, and webpack --watch in the other
4. In the first tab, type npm start
5. Visit http://localhost:300/

Developer Documentation

Tools Used:</br >

React</br >
Material UI</br >
Node.js</br >
Express.js</br >

Front-End

The Front-End of this application is built in React and designed using Material UI. It leverages Javascript promises to handle asynchronous API calls to the local server to aggregate the total travel time.

Server

The server is built using Node.js and Express.js. The server handles RESTful API calls to both the Google Maps and TSA APIs.

Developed by

Chris Loncarich