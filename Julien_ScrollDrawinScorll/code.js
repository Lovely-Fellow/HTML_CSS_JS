jQuery(document).ready(function($) {
	var $doc = $(document),
		$win = $(window),
		$viewport = $('#viewport'),
		$wrapper = $('#wrapper'),
		$svg = $('svg').drawsvg(),
		$topdiv = $('#topdiv');
		$bottomdiv = $('#bottomdiv');
		
	var $wrapper_height = $wrapper.height();
		$viewport_height = $viewport.height();
		$start_viewport_top =  $win.height() / 2;
	console.log("windowheight", $win.height());
	$svg.css("top", $start_viewport_top);
	function change_to_fixedpos()
	{
		$topdiv.removeClass("topdiv_move");
		$topdiv.addClass("topdiv_fixed");
		$viewport.removeClass("viewport_move");
		$viewport.addClass("viewport_fixed");
		$bottomdiv.removeClass("bottomdiv_move");
		$bottomdiv.addClass("bottomdiv_fixed");
	}

	function change_to_move()
	{
		$topdiv.addClass("topdiv_move");
		$topdiv.removeClass("topdiv_fixed");
		$viewport.addClass("viewport_move");
		$viewport.removeClass("viewport_fixed");
		$bottomdiv.addClass("bottomdiv_move");
		$bottomdiv.removeClass("bottomdiv_fixed");
	}

	$win.on('scroll', function() {
	  
	  $win_scrollTop = $win.scrollTop();
	  console.log("win_scrollTop=", $win_scrollTop, "start_viewort_top", $start_viewport_top);
	  if ($win_scrollTop > $start_viewport_top && $win_scrollTop < $start_viewport_top + $viewport_height)
	  {
		  console.log("showing");
		  change_to_fixedpos();
		  $viewport.css("top", $start_viewport_top + "px");
		  $bottomdiv.css("top", ($topdiv.height() + $viewport_height )+ "px");
	  }
	 
	});
	console.log("wrapperheight=", $wrapper.height, "viewportheight=", $viewport_height);
	max = $wrapper_height - $viewport_height;
	$viewport.on('scroll', function() {
	  console.log("max=", max, "viewport scrollTop", $viewport.scrollTop());
	  var p = $viewport.scrollTop() / max;
	   $svg.drawsvg('progress', p);
	 
	   $svg.css("top", $viewport.scrollTop() + ($viewport_height/2) - $svg.height()/2);
	});
});