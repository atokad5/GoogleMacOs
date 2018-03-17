export default function() {
  ;(function($) {
    let activeBubble = $('.is-hangout-contact');
    let chatName = $('.chatName');
    let chatEmail = $('.chatEmail');
    let chatMessage = $('.chatMsg');
    let chatImage = $('.chatImg');
    let chatParent = $('.chats');
    let closeChat = $('.closeChat');
    let chatView = $('.chat-view')
    let form = $('.Form');
    let textArea = $('.txtArea')
    let count = 0;


    function updateChatBoard() {
      let $t = $(this)
      $('.isAdded').hide();
      chatParent.addClass('is-active')
      let userName = $t.attr('data-name'),
          emailAdd = $t.attr('data-email'),
          userImg = $t.attr('data-image'),
          dataMsg = $t.attr('data-message')
          chatName.text(`${userName}`)
          chatEmail.text(emailAdd)
          chatImage.css({
            'background-image':'url('+ userImg +')'
          })
          chatMessage.text(dataMsg)

    }

    function addComment(e) {
      e.preventDefault();
      let grabText = textArea.val()
      count = count + 1;

      if(grabText.length >= 1) {
        chatView.append(`
      <div class="fakeMsg isAdded">
        <p><span class="getName chatName">You: </span>${grabText}</p>
      </div>
      `)
      }
      chatView.animate({
        scrollTop: $('.fakeMsg').outerHeight() * count
      })
      textArea.val('');
    }

    activeBubble.click(updateChatBoard)
    closeChat.click(() => chatParent.removeClass('is-active'))
    form.on('submit', addComment)
  })(jQuery)
}