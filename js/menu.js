
const menuToggleLink = document.querySelector('.new-menu-toggle');

menuToggleLink.addEventListener('mouseover', function() {
  changeText(menuToggleLink, true);
  updateText(menuToggleLink, true);
});

menuToggleLink.addEventListener('mouseout', function() {
  changeText(menuToggleLink, false);
  updateText(menuToggleLink, false);
});



function changeText(element, isHovered) {
    const menuText = element.querySelector('.menu-text');
  
    if (isHovered) {
      // Change text to "Open" when hovering
      menuText.textContent = "Open";
    } else {
      // Revert to "Menu" when not hovering
      menuText.textContent = "Menu";
    }
  }
  
  function change(x) {
    x.classList.toggle("change");
  }



  function updateText(element, isHovered) {
    const menuText = element.querySelector('.menu-text');
    
    if (isHovered) {
      // Change text to "Close" when hovering
      menuText.textContent = "Close";
    } else {
      // Revert to "Menu" when not hovering
      menuText.textContent = "Menu";
    }
  }


function makeCall(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

function openEmail(email) {
    window.location.href = 'mailto:' + email;
}

function changeCursor(element) {
    element.style.cursor = 'pointer';
}

function openInstagram(username) {
  // Construct the Instagram profile URL using the provided username
  var instagramURL = 'https://www.instagram.com/' + username.slice(1) + '/';

  // Open the Instagram page in a new tab/window
  window.open(instagramURL, '_blank');
