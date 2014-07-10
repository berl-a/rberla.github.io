$(document).ready(
	function(){
		
		var number_of_clicked_letters = 0;
		
		$('img:not(div>img)').hover(
			function() {
				$(this).addClass('filtered');
			}, 
			function() {
				$(this).removeClass('filtered');
			}
		);
		
		$.ionSound(
			{
				sounds: [
					"clap"
				],
				path: "plugins/ion-sound/",
				volume: 0.5
			}	
		);
		
		$('p span.unusual').click(
			function() {
				$(this).removeClass('unusual');
				number_of_clicked_letters++;
				
				if(number_of_clicked_letters === 5) {
					$.ionSound.play("clap");
					
					var $award = $('img.award');
					$award.css('display', 'inherit');
					$award.animate(
						{
							'opacity': 1
						},
						{
							duration: 2500,
							complete: function() {
								$award.remove();
							}
						}
					);
				}
			}
		);
	}
);