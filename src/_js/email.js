export default function() {
  ;(function($){
    let unRead = $('.unread .email-card'),
        inBox = $('.inbox'),
        caught = $('.caughtUp'),
        trash = $('.trash'),
        inBoxCount = $('.numCount'),
        unReadCount = unRead.length;
      

    function pushAway(e) {
      unReadCount = unReadCount - 1;
      inBoxCount.html(unReadCount)
      let $t = $(this);
      let cloner = $t.clone();
      inBox.prepend(cloner)
      $t.hide();
      if(unReadCount <= 0) {
        caught.fadeIn()
      }
      e.stopPropagation();
      console.log('push away')
      
    }

    function removeEmail(e) {      
      let $t = $(this);
      $t.parents('.email-card').hide();
      console.log($t)
      e.stopPropagation();
    }


    $('.refresh').click(function() {
      console.log('happened')
      $(this).find('svg').css({
        transform: 'rotate(' + 720 + 'deg)'
      })
    })

    // unRead.click(pushAway)
    $(document).on('click', '.unread .email-card', pushAway)
    $(document).on('click', '.trash', removeEmail)
    
  })(jQuery);
}