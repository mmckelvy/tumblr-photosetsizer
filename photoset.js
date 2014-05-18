(function () {
	$(function() {
			var resizePhotoset = function () {
			var photosets = $('.photoset-container'); // Get all the photoset containers.
		
			/* Loop through the photosets to get the layouts, photo counts and images. */
			for (var i = 0, len = photosets.length; i < len; i++) {
				var layout = photosets.eq(i).attr('data-layout'); // Get the layout attribute for each photoset.
				var photoCount = photosets.eq(i).attr('data-photo-count'); // Get the number of photos.
				var photoSetImgs = photosets.eq(i).find('.photoset-photo'); // Get all the container divs.

				var lowerBound = 0; // Set the initial lower bound for the loop.
				var upperBound = +layout[0]; // Set the initial upper bound for the loop.
				
				/* Size the images based on the layout values. */
				for (var j = 0, length = layout.length; j < length; j++) {
					var denominator = +layout[j];
					var imgWidth = 1 / denominator * 100;

					for (var k = lowerBound; k < upperBound; k++) {
						photoSetImgs.eq(k).css("width", imgWidth + "%"); // Set the wrapper div widths.
					} // End image resize loop.

					lowerBound = upperBound;
					nLayout = +layout[j + 1];
					upperBound = lowerBound + nLayout;
				} // End layout loop.
			} // End photoset loop.
		};
		
		/* Main */
		resizePhotoset();
	
	}); // End jQuery

	
})(); // End IIFE