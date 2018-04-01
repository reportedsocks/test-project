import'../style/style.scss';

require('./slick.prop.js');


$('#open-text').on("click",function(){
		$('.main-text').toggleClass('showed');
		$('.open-icon').toggleClass('hide-text');
		
	
});
$('#open-text-2').on("click",function(){
		$('.main-text-2').toggleClass('showed');
		$('.open-icon-2').toggleClass('hide-text');
		
	
});
