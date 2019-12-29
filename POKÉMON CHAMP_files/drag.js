$(document).ready(function(){

	/*disable mouseclicks to avoid annoying image drag for images that don't need drag*/
	$(".noSelect").mousedown(function(){
    	return false;
	});

	function hideandshow(toshow){
		for(var j = 1; j < 22; ++j){
			$('#infobox'+j).hide();
			$('#descbox'+j).hide();
		}
		$('#infobox'+toshow).show();
		$('#infobox'+toshow).css('visibility','visible');
		$('#descbox'+toshow).show();
		$('#descbox'+toshow).css('visibility','visible');
	}

	/*enable draggable on the appropriate targets*/
	var a = 2;
	$('#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img8,#img9,#img10,#img11,#img12,#img13,#img14,#img15,#img16,#img17,#img18,#img19,#img20,#img21')
		.draggable({
			/*makes sure the z-index changes with every drag so the one being dragged is on top*/
			start: function(event,ui){
				$(this).css("z-index",a++);
			},
			stack: '#dragZone',
			cursor: 'pointer',
			containment: '#dragZone',
			axis: 'x',
			distance: 0
		})
		.mousedown(function(){
			/*shows appropriate info boxes for each character on when it's being held
			* gets the selected id number so that we don't have to write the same code multiple times
			*/
			var idname = $(this).attr("id");
			var num = idname.replace('img','');
			hideandshow(num);
		});

});

