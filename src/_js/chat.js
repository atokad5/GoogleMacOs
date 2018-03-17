export default function() {
  ;(function($) {
    let activeBubble = $('.is-hangout-contact');
    let chatName = $('.chatName');
    let chatEmail = $('.chatEmail');
    let chatMessage = $('.chatMsg');
    let chatImage = $('.chatImg');
    let chatParent = $('.chats');
    let closeChat = $('.closeChat');


    function updateChatBoard() {
      let $t = $(this)
      chatParent.addClass('is-active')
      let userName = $t.attr('data-name'),
          emailAdd = $t.attr('data-email'),
          userImg = $t.attr('data-image'),
          dataMsg = $t.attr('data-message')

          chatName.text(`${userName}: `)
          chatEmail.text(emailAdd)
          chatImage.css({
            'background-image':'url('+ userImg +')'
          })
          chatMessage.text(dataMsg)

    }

    activeBubble.click(updateChatBoard)
    closeChat.click(() => chatParent.removeClass('is-active'))
  })(jQuery)
}