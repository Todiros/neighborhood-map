# [Charged Map](https://todiros.github.io/charge-map/)
##### *A Udacity FEND Project*

## About

An app showing charging station's location and relevant information in Bulgaria using [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) and [Openchargemap API](https://map.openchargemap.io/). Build with [React](https://reactjs.org/) and [Webpack 4](https://webpack.js.org/). Part of Udacity's [Front End Nanodegree](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001) program (Project 8 - Neighborhood Map). 

## Use

- **DESKTOP**
    
    On the left side you will see a sidebar menu with a list of all charging stations. On the right of the screen you will see a map with blue markers. Each marker represents a charging station on the respected map position. 
    
    If you click on the charging station name in the sidebar or on one of the markers - you should see a pop up (a dialog window) opening up with addition charging station information.

    In the bottom of the sidebar menu you should see a input field with a FILTER button on the right. Entering a text in the field and clicking the FILTER button will filter both the list above and the markers on the map. It filter by charging station name / title.   

- **MOBILE**

    On a mobile device, you WILL NOT see a sidebar menu opened but you should see the map with a few of markers. You will also see a black arrow pointing right on the top left side of the app. Clicking the arrow will slide-open the menu. 
    
    The funtionality of the menu is exactly the same as in the desktop version. 
    
    Clicking on a station title will hide the menu. You can also close the menu by clicking on the blue arrow pointing left in the top left corner of the app. 

## Setup & Installation

See [LIVE DEMO](https://todiros.github.io/charge-map/) of the project. 
    
Alternatively, you can clone this repository and `npm install` and then `npm start` to run it on a local server. And `npm run startOpen` will open automatically in the browser at http://localhost:3001/.

## Dependencies 

See [`package.json`](https://github.com/Todiros/my-reads/blob/master/package.json)

## Technology

* HTML, CSS, JavaScript (ES6)
* Webpack 4.20
* Webpack Dev Server + HMR
* React 16 w/ PropTypes
* Babel 7
* HTMLWebpackPlugin + HTML loader
* SASS + MiniCssExtractPlugin
    * PostCSS
    * cssnano
    * css-mqpacker
* MD5 Hashing
* Source Mapping
