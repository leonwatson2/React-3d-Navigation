jQuery(document).ready(function($){
	//toggle 3d navigation
	$('.cd-3d-nav-trigger').on('click', function(){
		// toggle3dBlock(!$('.cd-header').hasClass('nav-is-visible'));
	});

	//select a new item from the 3d navigation
	$('.cd-3d-nav').on('click', 'a', function(){
		var selected = $(this);
		//selected.parent('li').addClass('cd-selected').siblings('li').removeClass('cd-selected');
		//updateSelectedNav('close');
	});

	$(window).on('resize', function(){
		//window.requestAnimationFrame(updateSelectedNav);
	});

	function toggle3dBlock(addOrRemove) {
		if(typeof(addOrRemove)==='undefined') addOrRemove = true;	
	//	$('.cd-header').toggleClass('nav-is-visible', addOrRemove);
	//	$('.cd-3d-nav-container').toggleClass('nav-is-visible', addOrRemove);
	//	$('main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//fix marker position when opening the menu (after a window resize)
			//updateSelectedNav();
		// });
	}

	//this function update the .cd-marker position
	function updateSelectedNav(type) {
		var selectedItem = $('.cd-selected'),
			selectedItemPosition = selectedItem.index() + 1, 
			leftPosition = selectedItem.offset().left,
			backgroundColor = selectedItem.data('color'),
			marker = $('.cd-marker');
			console.log("me");
		marker.removeClassPrefix('color').addClass('color-'+ selectedItemPosition).css({
			'left': leftPosition,
		});
		if( type == 'close') {
			marker.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				toggle3dBlock(false);
			});
		}
	}

	$.fn.removeClassPrefix = function(prefix) {
	    this.each(function(i, el) {
	        var classes = el.className.split(" ").filter(function(c) {
	            return c.lastIndexOf(prefix, 0) !== 0;
	        });
	        el.className = $.trim(classes.join(" "));
	    });
	    return this;
	};
});

function allTPrime(n){
	var primes = [];
	for (var i = n; i > 1; i--) {
		
	
	if (n%2==0 || n%3==0 || n%5==0 || n%7==0) {
		continue;
	}
	primes.push(i);
	i-=2;
}
	console.log(primes);
}