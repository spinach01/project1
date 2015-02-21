/* Author:

 -----------------------------------------------------------
 -----------------------------------------------------------
  ##   ##  ###  #### #  # #  # #   #  ## ##### #   #### ###
 #  # #  # #  # #    #  # #  # ##  # #  #  #   #   #    #  #
 #    #  # #  # #    # #  #  # # # # #     #   #   #    #  #
 #    #  # #  # ##   ##   #  # # # #  #    #   #   ###  ###
 #    #  # #  # #    # #  #  # #  ##   #   #   #   #    #  #
 #  # #  # #  # #    #  # #  # #   # #  #  #   #   #    #  #
  ##   ##  ###  #### #  #  ##  #   #  ##   #   ### #### #  #
 -----------------------------------------------------------
                BE GOOD, GET GOOD OR GIVE UP_
 -----------------------------------------------------------
 -----------------------------------------------------------
 
*/

"use strict;"

//var browser = $.client.browser;
//var os = $.client.os;
var total_ani_pics = 30;
var ani_count = 0;
var ani_timeout;
var ani_timer = 130;
var home_slide_interval;

//alert(browser+' a '+os) 
// iPhone/iPod
function positions(){
	var center = ($(window).height() - 550)/2;
	var safe_h = 0;
	$('#main').css({
		'margin-top' : Math.max(center , safe_h)
	});
	$('#wrapper').fadeIn();
}

/*$(function(){

});
*/




function load_content(content , target){
	console.log('load_content 호출');
	$('#map_container').fadeOut();
	$('.tooltip').remove();
	$('#content').addClass('loading');
	var content_to_hide = $('<div />' , {
		'id' : 'content_to_hide',
		'html' : $('#content').html()
	});
	$('#content').html(content_to_hide);
	$('#menu li.active').removeClass('active');
	reset();
	if(target){
		target.addClass('active');
	}
	$('#content_to_hide').fadeOut(function(){
		$(this).remove();
		$.ajax({
			url : '/ajax/get_'+content ,
			success : function(data){
				console.log(data);
				var obj = jQuery.parseJSON(data);
				swap_content(obj);
				$('#content').removeClass('loading');
				//$('#content').css('background' , 'none');
			}
		});
	})
}





function swap_content(data){
	
	$('#content').html(data.content).hide().fadeIn();
	$('body').attr('class' , data.current);
	$('#content').fadeIn();
}

function get_menu(){
	$('#carta').css('left' , 100000);
	$('#carta').show();
	$('.carta_intro').show();
	$('#scrollbut_fb').css('top' , 0);
	$('.scroller').scrollTop(1);
	$('#scrollbar_fb').hide();
	$('.carta_but.active').removeClass('active');
	$('#carta').hide();
	$('#carta').css('left' , 0);
	$('#carta').fadeIn();
	init = true;
}

function get_placeres(){
	$('#placeres_reel').fadeIn();
}
function preload_ani(){
	$('<div />' , {
		'id' : 'picnic_ani'
	}).appendTo('body');
	for(var i = 0; i < total_ani_pics ; i++){
		$('<img />' , {
			'src' : 'img/cornelia_ani/p'+(i+1)+'.jpg'
		})
		.attr({
			'width' : 990,
			'height' : 421
		})
		.css({
			'z-index' : total_ani_pics - i
		})
		.appendTo('#picnic_ani')
		.hide();
	}
}
function show_map(){
	$('#map_container').fadeToggle();
}
$('#map_close').bind('click' , function(){
	$('#map_container').fadeOut();
})
function reset(){
	$(document).unbind('mousemove')
}

$(window).bind({
	'load' : function(){
		load_content('home' , null);
		preload_ani();
	}
});
$(window).bind('load resize' , positions);
$('label:not(.cabinet)').live('click' , function(){
	return false;
})
$('#content').removeClass('loading');
if(os !== 'iPhone/iPod'){
	$('a.tel').attr('href' , 'javascript:void(0)')
}

