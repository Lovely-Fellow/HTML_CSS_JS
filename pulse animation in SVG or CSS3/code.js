document.addEventListener("DOMContentLoaded", function(event) { 
	var vimeoVideoID = '17631561';
var videoCallback = 'showThumb';

$.getJSON('http://www.vimeo.com/api/v2/video/' + vimeoVideoID + '.json?callback=' + videoCallback,

function(data){
$(".thumbs").attr('src',data[0].thumbnail_large);
});
});