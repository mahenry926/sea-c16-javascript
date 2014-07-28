		$('.tabs > li > a').click(function(event){
		//event.preventDefault();//stop browser to take action for clicked anchor
 
		//get displaying tab content jQuery selector
		var active_tab_content = $('.tabs > li.active > a').attr('href');					
 
 		// Switch active tabs
		//find actived navigation and remove 'active' css
		var active_tab = $('.tabs > li.active');
		active_tab.removeClass('active');
 
		$(this).parents('li').addClass('active');

		// Switch active tab content 
		//hide displaying tab content
		$(active_tab_content).removeClass('active');
		$(active_tab_content).addClass('hidden');
 
		//show target tab content
		var target_tab_content = $(this).attr('href');
		$(target_tab_content).removeClass('hidden');
		$(target_tab_content).addClass('active');
	     });
