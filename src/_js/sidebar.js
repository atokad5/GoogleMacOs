export default function() {
  ;(function($) {

    const notifyBubble = $('.is-notify'),
          sideBarItems = $('.sidebar-menu li'),
          body = $('body'),
          activeBubble = $('.has-notification-alert'),
          noteBubble = $('.notify-bubble'),
          hangPerson = $('.is-hangout-contact')

    const initHangout = () => body.toggleClass('showing-hangout')
    notifyBubble.click(initHangout)

    const hideNotify = () => noteBubble.hide();
    activeBubble.click(hideNotify)
  
    function menuInit() {
      let $t = $(this);
      sideBarItems.removeClass('isActive');
      $t.addClass('isActive')

    }
    sideBarItems.click(menuInit)

    
  })(jQuery);
}