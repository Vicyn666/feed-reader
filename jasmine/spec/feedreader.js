$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('are defined and not null names', function () {
            for (let f = 0; f < allFeeds.length; f++) {
                expect(allFeeds[f].name).toBeDefined();
                expect(allFeeds[f].name.length).not.toBe(0);
            }
        });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('are defined and not null urls', function () {
             for (let f = 0; f < allFeeds.length; f++) {
                 expect(allFeeds[f].url).toBeDefined();
                 expect(allFeeds[f].url.length).not.toBe(0);
             }
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        it('is hidden by default', function () {
                expect($('body').hasClass('menu-hidden')).toBe(true);
        });
/*      
        it('changes visibility on click', function () {
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
*/
    });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
