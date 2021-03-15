(function ($) {
	$(window).on("load", function () {
		$.instagramFeed({
			username: "asmtanvirhr",
			container: "#instagram-feed",
			display_profile: false,
			display_biography: false,
			display_gallery: true,
			display_captions: false,
			max_tries: 8,
			callback: null,
			styling: false,
			items: 12,
			items_per_row: 4,
			margin: 1,
			lazy_load: false,
			on_error: console.error
		});
	});
})(jQuery);
