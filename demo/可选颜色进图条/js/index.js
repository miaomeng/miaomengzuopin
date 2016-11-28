/* SET RANDOM LOADER COLORS FOR DEMO PURPOSES */	
	var demoColorArray = ['red','blue','green','yellow','purple','gray'];
	var colorIndex = Math.floor(Math.random()*demoColorArray.length);
	setSkin(demoColorArray[colorIndex]);
	

	/* RANDOM LARGE IMAGES FOR DEMO PURPOSES */	
//	var demoImgArray = ['http://www.hdwallpapers.in/walls/halloween_2013-wide.jpg', 'http://www.hdwallpapers.in/walls/2013_print_tech_lamborghini_aventador-wide.jpg', 'http://www.hdwallpapers.in/walls/ama_dablam_himalaya_mountains-wide.jpg', 'http://www.hdwallpapers.in/walls/arrow_tv_series-wide.jpg', 'http://www.hdwallpapers.in/walls/anna_in_frozen-wide.jpg', 'http://www.hdwallpapers.in/walls/frozen_elsa-wide.jpg', 'http://www.hdwallpapers.in/walls/shraddha_kapoor-wide.jpg', 'http://www.hdwallpapers.in/walls/sahara_force_india_f1_team-HD.jpg', 'http://www.hdwallpapers.in/walls/lake_sunset-wide.jpg', 'http://www.hdwallpapers.in/walls/2013_movie_cloudy_with_a_chance_of_meatballs_2-wide.jpg', 'http://www.hdwallpapers.in/walls/bates_motel_2013_tv_series-wide.jpg', 'http://www.hdwallpapers.in/walls/krrish_3_movie-wide.jpg', 'http://www.hdwallpapers.in/walls/universe_door-wide.jpg', 'http://www.hdwallpapers.in/walls/night_rider-HD.jpg', 'http://www.hdwallpapers.in/walls/tide_and_waves-wide.jpg', 'http://www.hdwallpapers.in/walls/2014_lamborghini_veneno_roadster-wide.jpg', 'http://www.hdwallpapers.in/walls/peeta_katniss_the_hunger_games_catching_fire-wide.jpg', 'http://www.hdwallpapers.in/walls/captain_america_the_winter_soldier-wide.jpg', 'http://www.hdwallpapers.in/walls/puppeteer_ps3_game-wide.jpg', 'http://www.hdwallpapers.in/walls/lunar_space_galaxy-HD.jpg', 'http://www.hdwallpapers.in/walls/2013_wheelsandmore_lamborghini_aventador-wide.jpg', 'http://www.hdwallpapers.in/walls/destiny_2014_game-wide.jpg', 'http://www.hdwallpapers.in/colors_of_nature-wallpapers.html', 'http://www.hdwallpapers.in/walls/sunset_at_laguna_beach-wide.jpg'];
	
	// Stripes interval
	var stripesAnim;
	var calcPercent;
	
	$progress = $('.progress-bar');
	$percent = $('.percentage');
	$stripes = $('.progress-stripes');
	$stripes.text('////////////////////////');
	
	/* CHANGE LOADER SKIN */
	$('.skin').click(function(){
		var whichColor = $(this).attr('id');
		setSkin(whichColor);
	});
	
	// Call function to load array of images
	preload(demoImgArray);
	
	// Call function to animate stripes
	stripesAnimate(); 
	
	/* WHEN LOADED */
	$(window).load(function() {
		loaded = true;
		$progress.animate({
			width: "100%"
		}, 100, function() {
			$('span').text('Loaded!').addClass('loaded');
			$percent.text('100%');
			clearInterval(calcPercent);
			clearInterval(stripesAnim);
		});
	});
	
	/*** FUNCTIONS ***/
	
	/* LOADING */
	function preload(imgArray) {
		var increment = Math.floor(100 / imgArray.length);
		$(imgArray).each(function() {
			$('<img>').attr("src", this).load(function() {
				$progress.animate({
					width: "+=" + increment + "%"
				}, 100);
			});
		});
		calcPercent = setInterval(function() {
			
			//loop through the items
			$percent.text(Math.floor(($progress.width() / $('.loader').width()) * 100) + '%');
			
		});
	}
	
	/* STRIPES ANIMATION */
	function stripesAnimate() {
		animating();
		stripesAnim = setInterval(animating, 2500);
	}

	function animating() {
		$stripes.animate({
			marginLeft: "-=30px"
		}, 2500, "linear").append('/');
	} 
	
	function setSkin(skin){
		$('.loader').attr('class', 'loader '+skin);
		$('span').hasClass('loaded') ? $('span').attr('class', 'loaded '+skin) : $('span').attr('class', skin);
	}