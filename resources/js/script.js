// Animated page elements in response to nav links.
var linkToAnimateElementMap = {
  'about-link': 'about-animate',
  'projects-link': 'projects-animate',
  'skills-link': 'skills-animate',
  'contact-link': 'contact-animate'
};

for (var linkId in linkToAnimateElementMap) {
  var link = document.getElementById(linkId);
  var animateElementId = linkToAnimateElementMap[linkId];
  var animateElement = document.getElementById(animateElementId);

  link.addEventListener('click', (function(animateElement) {
    return function(event) {
      animateElement.classList.add('blink');
      setTimeout(function() {
          animateElement.classList.remove('blink');
      }, 2000); // remove the blink class after 2 seconds
    };
  })(animateElement));
}

// Offset main by height of header.
function adjustPadding() {
  var headerHeight = document.querySelector('header').offsetHeight;
  document.querySelector('main').style.paddingTop = headerHeight + 'px';
}

window.onload = adjustPadding;
window.onresize = adjustPadding;