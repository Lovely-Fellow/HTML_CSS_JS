$( document ).ready(function() {
var $doc = $(document),
    $win = $(window),
    $svg = $('svg').drawsvg(),
    max = $doc.height() - $win.height();

$win.on('scroll', function() {
  var p = $win.scrollTop() / max;
  $svg.drawsvg('progress', p);
});
});