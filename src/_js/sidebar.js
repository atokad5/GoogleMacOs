export default function() {
  ;(function($) {

    const notifyBubble = $('.is-notify'),
          sideBarItems = $('.sidebar-menu li'),
          body = $('body')

    const initHangout = () => body.toggleClass('showing-hangout')
    notifyBubble.click(initHangout)

    const menuInit = function() {
      let $t = $(this);
      sideBarItems.removeClass('isActive');
      $t.addClass('isActive')

    }

    sideBarItems.click(menuInit)

  })(jQuery);
}