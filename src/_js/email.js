export default function() {
  ;(function($){
    let unRead = $('.unread .email-card'),
        inBox = $('.inbox'),
        caught = $('.caughtUp'),
        trash = $('.trash'),
        initCountUpdate = $('.unread .trash'),
        inBoxCount = $('.numCount'),
        unReadCount = unRead.length,
        checkerInbox = $('#checker'),
        checkerInboxJr = $('#checkerInbox'),
        inBoxer = $('.inbox .email-card')
      

    function pushAway(e) {
      let $t = $(this);
      let cloner = $t.clone();
      inBox.prepend(cloner)
      $t.hide();
      unReadCount = unReadCount - 1;
      inBoxCount.html(unReadCount)
      if(unReadCount <= 0) {
        caught.fadeIn()
      }
      e.stopPropagation();      
    }

    function removeEmail(e) {      
      let $t = $(this);
      $t.parents('.email-card').hide();
      e.stopPropagation();
    }

    function updateCounter() {
      console.log('suh')
      unReadCount = unReadCount - 1;
      inBoxCount.html(unReadCount)
      if(unReadCount <= 0) {
        caught.fadeIn()
      }
    }


    $('.refresh').click(function() {
      $('.refresh').removeClass('is-active');
      $(this).addClass('is-active');
    })

    function unReadEmails() {
      if(checkerInbox.is(":checked")) {
        unRead.each(function(index) {
          let $t = $(this);
          setTimeout(function() {
            $t.css({
              opacity: 0.4
            })
          }, 100 * index)
        })
            
      } else {
        unRead.each(function(index) {
          let $t = $(this);
          setTimeout(function() {
            $t.css({
              opacity: 1
            })
          }, 100 * index)
        })
      }
    }

    function unReadEmailsJr() {
      if(checkerInboxJr.is(":checked")) {
        inBoxer.each(function(index) {
          let $t = $(this);
          setTimeout(function() {
            $t.css({
              opacity: 0.4
            })
          }, 100 * index)
        })
            
      } else {
        inBoxer.each(function(index) {
          let $t = $(this);
          setTimeout(function() {
            $t.css({
              opacity: 1
            })
          }, 100 * index)
        })
      }
    }

    // unRead.click(pushAway)
    initCountUpdate.click(updateCounter)
    $(document).on('click', '.unread .email-card', pushAway)
    $(document).on('click', '.trash', removeEmail)
    checkerInbox.click(unReadEmails)
    checkerInboxJr.click(unReadEmailsJr)


  })(jQuery);
}