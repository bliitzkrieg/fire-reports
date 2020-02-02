Getting Started
==========

## Server
 - Create `/server/.env` with following contents:
    ```
    APP_NAME=fire-reports
    SERVER_PORT=8080
    DARK_SKY_SECRET=YOUR_KEY_HERE
    ```
 - Open seperate terminal window
 - Change directory to `server`
 - Run `yarn install`
 - Run `yarn start`

## Client:
 - Create `/client/.env` with the following contents:
    ```
    REACT_APP_SERVER_URL=http://localhost:8080
    REACT_APP_MAPBOX_TOKEN=YOUR_KEY_HERE
    ```
 - Open seperate terminal window
 - Change directory to `client`
 - Run `yarn install`
 - Run `yarn start`

> What improvements would you make or best practices would you utilize if you had double the time?

If I had double the time I would have added Jest tests on both the client and server, improved the CSS styles and handled errors a bit more elegantly on the server with an error handling middleware.

> About how much time did you spend on the project?

This took me about 4.5 hours. I got rate limited on the weather API and couldn't decide on a mapping library which killed about an hour of my time.

