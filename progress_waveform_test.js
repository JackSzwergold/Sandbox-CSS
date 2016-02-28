window.onload=function() {

	var ctx = demo.getContext('2d'),
		w = demo.width,
		h = demo.height,
		img = new Image,
		x = 0,
		url = 'progress_waveform.png',
		grd = ctx.createLinearGradient(0, 0, 0, h);

	grd.addColorStop(0, 'rgb(0, 130, 230)');
	grd.addColorStop(1, 'rgb(230, 130, 0)');

	img.onload = loop;
	img.crossOrigin = 'anonymous';
	img.src = url;

	function loop() {

		x++;        /// sync this with actual progress

		/// since we will change composite mode and clip:
		ctx.save();
	
		/// clear background with a color
		ctx.fillStyle = '#999';
		ctx.fillRect(0, 0, w, h);

		/// remove waveform, change composite mode
		ctx.globalCompositeOperation = 'destination-atop';
		ctx.drawImage(img, 0, 0, w, h);

		/// fill new alpha, same mode, different region.
		/// as this will remove anything else we need to clip it
		ctx.fillStyle = grd;
		ctx.beginPath();
		ctx.rect(0, 0, x, h);
		ctx.clip();    /// et clipping
		ctx.fill();    /// use the same rect to fill

		/// remove clip and use default composite mode
		ctx.restore();
		
		/// loop until end
		if (x < w) requestAnimationFrame(loop);
	}

}
