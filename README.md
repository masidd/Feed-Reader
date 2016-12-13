#How to run application

Download Final Project folder and run index.html

##How to use application
* When initially opened, the RSS feed for the Udacity Blog will load.
* Click on any link to be directed to the appropriate website.
* Click on menu icon in the top left corner to see additional feeds
* Click on any feed in the menu window that you want to load

##Tests run using Jasmine

* Loop through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* Loop through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* Ensure the menu element is hidden by default.
* Ensure the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
* Ensure when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* Ensure when a new feed is loaded by the `loadFeed` function that the content actually changes.