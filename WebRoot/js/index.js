$(document).ready(function(){

	$(".prev,.next").hover(function(){
		$(this).stop(true,false).fadeTo("show",0.9);
	},function(){
		$(this).stop(true,false).fadeTo("show",0.4);
	});
	
	$(".banner-box").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"fold",
		interTime:3500,
		delayTime:500,
		autoPlay:true,
		autoPage:true, 
		trigger:"click" 
	});

});



/*

	<div class="banner-box">
	<div class="bd">
        <ul>          	    
            <li style="background:#86E3D1;">
                <div class="m-width">
                <a href="javascript:void(0);"><img src="image/one.jpg" /></a>
                </div>
            </li>
            <li style="background:#F3F3F3">
                <div class="m-width">
                <a href="javascript:void(0);"><img src="image/two.jpg" /></a>
                </div>
            </li>
            <li style="background:#E2909C;">
                <div class="m-width">
                <a href="javascript:void(0);"><img src="image/three.jpg" /></a>
                </div>
            </li>
            <li style="background:#FDFDF5">
                <div class="">
                <a href="javascript:void(0);"><img src="image/img4.jpg" style="height:487px;"/></a>
                </div>
            </li>  
         
        </ul>
    </div>
    <div class="banner-btn">
        <a class="prev" href="javascript:void(0);"></a>
        <a class="next" href="javascript:void(0);"></a>
        <div class="hd"><ul></ul></div>
    </div>
</div>


*/