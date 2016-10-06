console.log('hello main.js');

$(document).ready(function() {

    stickyHeader();

    $(window).resize(function() {
        stickyHeader();
    });

    // Modal Triggers
    $('.jq-modal-trigger').click(function(event) {
      var el_show = $(this).attr("href");
      $(el_show).fadeIn('slow');
      event.preventDefault();
      hideModal();
  	});

    $('.jq-modal').fitVids();

});

//End Ready......................................

//StickyHeader
function stickyHeader() {
    // get height of first two headers
    var scrollHeight = 80;
    var self = this;
    if($( window ).width() > 750) {

        $(window).scroll(function() {
            // get current scroll position
            var scrollTop = $(this).scrollTop();

            // if current position > scrollHeight
            if (scrollTop > scrollHeight) {
                // make fixed and change background color
                $('.site-header').addClass('sticky').animate({top: "0"}, 300);

            } else if (scrollTop == 0) {
                // unfix and go back to default color
                $('.site-header').css('top','-80px').removeClass('sticky');
            }

        });

    }
}

// Show Modal
function hideModal() {
	$(".jq-close").click(function(event){
    var src = $(this).parent().find('iframe').attr('src');
		$(this).parent().fadeOut('slow');
    $(this).parent().find('iframe').attr('src','');
    $(this).parent().find('iframe').attr('src',src);
	  event.preventDefault();
	});
}
