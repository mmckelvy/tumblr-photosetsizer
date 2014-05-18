An iframeless tumblr photoset sizer that works in desktop and mobile browsers

# Overview
Tumblr uses iframes to render photosets (`{Photoset}`).  Aside from the usual problems associated with iframes, tumblr's photoset iframes do not behave properly in mobile browsers.  This module replaces the native tumblr photoset iframe implementation so you have cleaner access to the photos and can display them properly in mobile browsers.

# Usage

#### Getting the photoset.js file in your tumblr theme
+ Download the photoset.js file.
+ In the "Edit HTML" section of the "Edit Theme" page in tumblr, click the gear in the top left corner.  Select "Theme Assets."
+ Click the "Add a file" link.  Upload the photoset.js file.
+ Add a script tag to your HTML, find the photoset.js file in the "Theme Assets" list, click "insert" and add the link to your script tag src.

#### Necessary HTML edits to use photoset.js
+ Create a container element (e.g. div, figure, etc.) for your photosets in your photoset block and add the following attributes:

```
{block:Photoset}
	<figure class="photoset-container" data-layout="{PhotosetLayout}" data-photo-count="{PhotoCount}">
		<!-- Additional markup here -->
```

+ Then add a "photos" block and give your images the class 'photoset-photo'.

```
<figure class="photoset photoset-container" data-layout="{PhotosetLayout}" data-photo-count="{PhotoCount}">
        {block:Photos}
        <img class="photoset-photo" src="{PhotoURL-HighRes}">
        {/block:Photos}
```
That's all there is to it.

###### Note that this script only sizes the photos -- you will need to add the necessary styling to line them up / add  desired spacing.  I have used flexbox to style the photos in the included example.  See the photoset.css file.

# Tests / Example
Go to [(http://photosetsizer.tumblr.com/)] to see photoset.js in action.
