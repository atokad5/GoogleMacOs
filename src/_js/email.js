export default function() {
  ;(function($){
    let unRead = $('.unread .email-card'),
        inBox = $('.inbox'),
        caught = $('.caughtUp'),
        trash = $('.trash'),
        inBoxCount = $('.numCount'),
        unReadCount = unRead.length;
      

    function pushAway() {
      unReadCount = unReadCount - 1;
      inBoxCount.html(unReadCount)
      let $t = $(this);
      let cloner = $t.clone();
      inBox.prepend(cloner)
      $t.hide();
      
      if(unReadCount <= 0) {
        caught.fadeIn()
      }
    }

    function removeEmail() {
      let $t = $(this);
      $t.parents('.email-card').hide();
    }


    $('.refresh').click(function() {
      console.log('happened')
      $(this).find('svg').css({
        transform: 'rotate(' + 720 + 'deg)'
      })
    })

    unRead.click(pushAway)
    trash.click(removeEmail)
  })(jQuery);
}