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

Background
==========
Enrich 911 emergency incident data to provide better analytics for a fire department.

Task
----
Given an incident data, enrich it and then display the location and data on a map for easy validation. Try to utilize best practices where possible given available time. 

Enrichments
-----------
* Weather at the time of the incident (use a weather service of your choice, but https://darksky.net/ does include free historical queries).

* Optional: If you complete the project and have more cycles, enrich with Parcel data at the location of the incident. Note that a Parcel is a polygon with attributes such as: ```OwnerName, MailAddress, LandValue, LandSqFt, ...```. Use this existing service which belongs to the city of Richmond, VA: http://gis.richmondgov.com/ArcGIS/rest/services/StatePlane4502/Ener/MapServer/0/
Note that the "Query" link at the bottom of the page allow you to search for parcels. The Query page has a link to an API Reference documentation link which you should use for help.  The incident has a point as "longitude" and "latitude" properties (which corresponds to `"spatialReference" : {"wkid" : 4326}`).  

Notes
-----
* Example incidents are provided in the data folder.
* We will test the project with an arbitrary incident file that is also from Richmond, VA and in the same format.
* It would be sufficient for the app to only handle one CAD file at a time.
* The incident location and attributes should be displayed on a map in the browser.
* You can enrich the incident and get it on a map however you wish.
* We would like for you to spend up to 4 hours. It is okay if you spend less time or more time so long as you return the project withing 24 hours of receiving it.
* Use technology stack and approach of your choice.

Deliverable
-----------
* Link to a Github repository with your commits as you originally made them. Do not squash them or just have a single commit. 
* There should be a README in the repo with the following section:
    * Steps to install and run your app. Assume the user will be on OSX but if you do not have access to OSX machine, provide needed steps to run your app on any other OS.
    * What improvements would you make or best practices would you utilize if you had double the time?
    * About how much time did you spend on the project?
* If you completed the project, add a few screenshots to the repo that show the working version as running on your machine.

