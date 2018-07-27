$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('names are defined and not null', function () {
            for (let f = 0; f < allFeeds.length; f++) {
                expect(allFeeds[f].name).toBeDefined();
                expect(allFeeds[f].name.length).not.toBe(0);
            }
        });

         it('urls are defined and not null', function () {
             for (let f = 0; f < allFeeds.length; f++) {
                 expect(allFeeds[f].url).toBeDefined();
                 expect(allFeeds[f].url.length).not.toBe(0);
             }
         });
    });

    describe('The menu', function() {

        it('is hidden by default', function () {
                expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('changes visibility on click', function () {
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);

        });
    });


    describe('Initial Entries', function() {

         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });
         it('there is at least one entry', function(done) {
            expect($('.entry').length).toBeGreaterThan(0);
            done();
         });
    });


    describe('New Feed Selection', function() {
         let initialFeed;
         beforeEach(function(done) {
            initialFeed = $('.feed').html();
            loadFeed(1, function() {
                done();
            })
         });

         it('the content is changed after loading', function(done) {
            var newFeed = $('.feed').html();
            expect(newFeed).not.toBe(initialFeed);
            done();
         });
    });
}());
