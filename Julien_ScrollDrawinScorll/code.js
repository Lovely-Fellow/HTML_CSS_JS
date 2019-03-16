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
		$end_viewport_top = $start_viewport_top + $viewport_height;
	console.log("windowheight", $win.height());
	$svg.css("top", $start_viewport_top);
	function change_to_fixedpos()
	{
		/*$topdiv.removeClass("topdiv_move");
		$topdiv.addClass("topdiv_fixed");*/
		$viewport.removeClass("viewport_move");
		$viewport.addClass("viewport_fixed");
		/*$bottomdiv.removeClass("bottomdiv_move");
		$bottomdiv.addClass("bottomdiv_fixed");*/
	}

	function change_to_move()
	{
		/*$topdiv.addClass("topdiv_move");
		$topdiv.removeClass("topdiv_fixed");*/
		$viewport.addClass("viewport_move");
		$viewport.removeClass("viewport_fixed");
		/*$bottomdiv.addClass("bottomdiv_move");
		$bottomdiv.removeClass("bottomdiv_fixed");*/
	}
	
	console.log("wrapperheight=", $wrapper.height, "viewportheight=", $viewport_height);
	$viewport_scrollTop_max = $wrapper_height - $viewport_height;
	$viewport.on('scroll', function() {
	  console.log("max=", $viewport_scrollTop_max, "viewport scrollTop", $viewport.scrollTop());
	  var p = $viewport.scrollTop() / $viewport_scrollTop_max;
	   $svg.drawsvg('progress', p);
	 
	   $svg.css("top", $viewport.scrollTop() + ($viewport_height/2) - $svg.height()/2);
	});

	$lastScrollTop = 0;
	$win.scroll(function(event) {
		$win_scrollTop = $win.scrollTop();
		$viewport_scrollTop = $viewport.scrollTop();
		if ($win_scrollTop > $lastScrollTop){ /* Down Scroll */
			console.log("win_scrollTop=", $win_scrollTop, "start_viewort_top", $start_viewport_top);
			/*if ($win_scrollTop > $start_viewport_top && $win_scrollTop < $start_viewport_top + $viewport_height)
			{
			  console.log("showing");
			  change_to_fixedpos();
			  $viewport.css("top", $start_viewport_top + "px");
			  $bottomdiv.css("top", ($topdiv.height() + $viewport_height )+ "px");
			}*/
			
			console.log("win_scrolltop", $win_scrollTop, "$viewport_scrollTop", $viewport_scrollTop, "$viewport_scrollTop_max", $viewport_scrollTop_max);
			if ($win_scrollTop > $start_viewport_top && $viewport_scrollTop < $viewport_scrollTop_max)
			{
				//change_to_fixedpos();
				$win.scrollTop($start_viewport_top);
				$viewport.scrollTop($viewport_scrollTop + 10);
				
			}
		}
		else if ($win_scrollTop < $lastScrollTop)
		// Up Scroll 
		{
			if ($win_scrollTop < $start_viewport_top && $viewport_scrollTop > 0)
			{
				//change_to_fixedpos();
				$win.scrollTop($start_viewport_top);
				$viewport.scrollTop($viewport_scrollTop - 10);
				
			}
		}
		$lastScrollTop = $win_scrollTop;
	});
});