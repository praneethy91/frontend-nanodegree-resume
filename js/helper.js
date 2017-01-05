/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<div class="row"><div class="col-xs-12"><h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr></div></div>';

var HTMLcontactGeneric = '<li class="flex-item"><a class="social" href="%link%" target="_blank"><span class="orange-text">%contact%</span><span class="white-text icon-social %data%"></span></a></li>';

var HTMLbioPic = '<div class="col-xs-3"><img src="%data%" class="biopic img-responsive"></div>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-row"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectImage =
        '<article class="col-md-4 col-sm-6">' +
          '<a data-toggle="modal" data-target="#project%num%">' +
            '<img class="img-responsive center-block image-project" src="%data%" alt="">' +
          '</a>';
var HTMLprojectTitle = '<h3 class="title-project">%data%</h3></article>';
var HTMLmodalProject =
    '<div class="modal fade" id="project%num%" tabindex="-1" role="dialog" aria-hidden="true">' +
      '<div class="modal-dialog">' +
        '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<h3 class="modal-title">%title%</h3>' +
          '</div>' +
          '<div class="modal-body">' +
            '<img class="img-responsive center-block image-project" src="%imageLink%" alt="">' +
            '<h3 class="github-header">' +
              '<a href="%projectLink%" target="_blank">GitHub Link To The Project</a>' +
            '</h3>' +
            '<ul class="modal-list">' +
            '</ul>' +
          '</div>' +
          '<div class="modal-footer">' +
            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
var HTMLprojectPoint = '<li>%data%</li>'

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('.page-scroll a').bind('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: ($($anchor.attr('href')).offset().top - 50)
  }, 1250, 'easeInOutExpo');
  event.preventDefault();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 51
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// Offset for Main Navigation
$('#mainNav').affix({
  offset: {
    top: 100
  }
});

/**
 * Logic to prevent Robota font from loading by Google maps
 */
var head = document.getElementsByTagName('head')[0];
var insertBefore = head.insertBefore;
head.insertBefore = function (newElement, referenceElement) {
    // intercept font download
    if (newElement.href
        && newElement.href.includes('fonts.googleapis.com/css?family=Roboto')) {
        return;
    }
    // intercept style elements for IEs
    if (newElement.tagName.toLowerCase() === 'style'
        && newElement.styleSheet
        && newElement.styleSheet.cssText
        && newElement.styleSheet.cssText.includes('.gm-style')) {
        return;
    }
    // intercept style elements for other browsers
    if (newElement.tagName.toLowerCase() === 'style'
        && newElement.innerHTML
        && newElement.innerHTML.includes('.gm-style')) {
        return;
    }
    insertBefore.call(head, newElement, referenceElement);
};


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}


window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});
