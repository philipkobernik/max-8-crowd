const maxApi = require('max-api');
maxApi.post('lets get ready to RUUMMMMBBBBLLLLEEEEEEEE!');

var firebase = require('firebase');

var app = firebase.initializeApp({
    apiKey: 'AIzaSyAPghyRHP98ZOsubANdbXE_uNFWLGqiiWM',
    projectId: 'max-8-crowd',
	databaseURL: 'https://max-8-crowd.firebaseio.com/'
  });


firebase.database().ref('/filter').on('value', function(val) {
	maxApi.outlet('filter', val);
});
	
firebase.database().ref('/mod').on('value', function(val) {
	maxApi.outlet('mod', val);
});

maxApi.post('end!');