$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
	pageLoadErrorMessage: "Party Foul! We can't find the page you\'re looking for :(",

	minScrollBack: '0',
	loadingMessage: 'Fetching...'
  });
});