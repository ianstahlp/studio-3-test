;(function () {
	var Homepage = {
		init: function () {
            this.articleHoverEffect();
		},
        /**
         * Handles hover effect for article cards and ensures that behavior is
         * not executed when screen size meets the mobile threshold.
         */
        articleHoverEffect: function() {
            // Exit if window is mobile.
            if (this.isMobile()) { return false };

            $('.article').hover(function (e) {
                $('.article.selected').removeClass('selected');
            });
            $('.article').mouseleave(function (e) {
                $('.article').eq(1).addClass('selected');
            });
        },
        /**
         * Helper function designed to check if the end-user is using a smaller device so
         * certain events are (or are not) triggered.
         */
		isMobile: function () {
			return $(window).width() < 768;
        },
	};
	$(document).ready(function () {
		Homepage.init();
	});
})();