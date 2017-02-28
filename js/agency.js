/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

/*
* Youtube Background
* */
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
  playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = [
    {'videoId': 'ifhpY1QcFNY', 'startSeconds': 17, 'endSeconds': 303, 'suggestedQuality': 'hd720'},
    {'videoId': 'KI51NnLBS_Q', 'startSeconds': 0, 'endSeconds': 5, 'suggestedQuality': 'hd720'}
  ],
  currVid = 0;

$('.hi em:last-of-type').html(vid.length);

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv.loadVideoById(vid[currVid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1){
    $('#tv').addClass('active');
    $('.hi em:nth-of-type(2)').html(currVid + 1);
  } else if (e.data === 2){
    $('#tv').removeClass('active');
    if(currVid === vid.length - 1){
      currVid = 0;
    } else {
      currVid++;
    }
    tv.loadVideoById(vid[currVid]);
    tv.seekTo(vid[currVid].startSeconds);
  }
}

function vidRescale(){

  var w = $(window).width()+200,
    h = $(window).height()+200;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
  }
}

$(window).on('load resize', function(){
  vidRescale();
});

$('.hi span:first-of-type').on('click', function(){
  $('#tv').toggleClass('mute');
  $('.hi em:first-of-type').toggleClass('hidden');
  if($('#tv').hasClass('mute')){
    tv.mute();
  } else {
    tv.unMute();
  }
});

$('.hi span:last-of-type').on('click', function(){
  $('.hi em:nth-of-type(2)').html('~');
  tv.pauseVideo();
});



/*
* BLINKING CURSOR
* */
var captionLength = 0;
var caption = '';


$(document).ready(function() {
  setInterval ('cursorAnimation()', 2000);
});

function cursorAnimation() {
  $('#cursor').animate({
    opacity: 0
  }, 'slow', 'swing').animate({
    opacity: 1
  }, 'fast', 'swing');
}