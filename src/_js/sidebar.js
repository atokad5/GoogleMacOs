export default function() {

  let hangOutShowing = false;
  const notifyBubble = document.querySelector('.is-notify');
  const bubbleParentEl = document.querySelector('.hangout-bubbles');
  const hangoutCover = document.querySelector('.hangout-cover');
  const body = document.body;

  

  const initHangout = () => {
    
    if(hangOutShowing) {
      document.body.classList.add('showing-hangout')
      hangOutShowing = false;
    } else { 
      document.body.classList.remove('showing-hangout')
      hangOutShowing = true;
    }
  }

  notifyBubble.addEventListener('click', initHangout)


  
}