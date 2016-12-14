/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('url is defined for each feed in allFeeds', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toEqual('');
            }
        });

        it('name is defined for each feed in allFeeds', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toEqual('');
            }

        });
    });


    describe('The Menu', function() {

        it('menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });


        it('menu toggles between displayed and hidden when menu icon clicked', function() {
            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('at least one entry in feed exists', function() {
            expect($('.entry')[0]).toBeDefined();
        });

    });

    describe('New Feed Selection', function() {
        var feed1;
        var feed2;
        beforeEach(function(done) {
            loadFeed(0, function() {
                feed1 = $('.feed').html();
                loadFeed(1, function() {
                    feed2 = $('.feed').html();
                    done();
                });
            });
        });

        it('content changes when new feed is loaded', function() {
            expect(feed1).not.toEqual(feed2);
        });

    });

}());