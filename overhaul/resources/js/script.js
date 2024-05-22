var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseover", function() {
    this.classList.add("active");
    this.style.backgroundColor = "#2b2b2b";
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.style.backgroundColor = "#000000";
    } else {
      content.style.display = "block";
    }
  });

  coll[i].addEventListener("mouseleave", function() {
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.style.backgroundColor = "#000000";
    }
  });
}