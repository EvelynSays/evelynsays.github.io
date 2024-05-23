// Collapsible project sections.
var coll = document.getElementsByClassName("grouped-project");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("mouseover", function() {
        var button = this.getElementsByClassName("collapsible")[0];
        var content = this.getElementsByClassName("content")[0];
        button.classList.add("active");
        button.style.backgroundColor = "#2b2b2b";
        content.style.display = "block";
    });

    coll[i].addEventListener("mouseleave", function() {
        var button = this.getElementsByClassName("collapsible")[0];
        var content = this.getElementsByClassName("content")[0];
        content.style.display = "none";
        button.style.backgroundColor = "#000000";
    });
}

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
      event.preventDefault(); // prevent the default action
      animateElement.classList.add('blink');
      setTimeout(function() {
          animateElement.classList.remove('blink');
      }, 2000); // remove the blink class after 2 seconds
    };
  })(animateElement));
}

// Offset main by height of header.
window.onload = function() {
  var headerHeight = document.querySelector('header').offsetHeight;
  document.querySelector('main').style.paddingTop = headerHeight + 'px';
}