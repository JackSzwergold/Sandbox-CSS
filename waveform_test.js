window.onload=function() {

	/* Draw demo. */
	var data = [];

	var waveform = new Waveform({
	  container: document.getElementById("demo_draw"),
	  interpolate: false
	});
	var ctx = waveform.context;

	var gradient = ctx.createLinearGradient(0, 0, 0, waveform.height);
	gradient.addColorStop(0.0, 'rgb(0, 130, 230)');
	gradient.addColorStop(1.0, 'rgb(230, 130, 0)');
	
	waveform.innerColor = gradient;

	var i=0;
	setInterval(function(){
	  data.push(Math.cos(i++/25) - 0.2 + Math.random()*0.3);
	  waveform.update({
		data: data
	  });
	}, 50);

	/* Weird demo. */
	new Waveform({
	  container: document.getElementById("demo_weird"),
	  innerColor: function(x, y){
	    return '#'+Math.floor(Math.random()*16777215).toString(16);
	  },
	  data: [0, 0.3, 1, 0.5, 1, 0.3, 0]
	});

}