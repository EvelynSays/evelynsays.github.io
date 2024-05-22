var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseover", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var groupedProjects = document.getElementsByClassName("grouped-project");
for (i = 0; i < groupedProjects.length; i++) {
  groupedProjects[i].addEventListener("mouseleave", function() {
    var content = this.querySelector(".content");
    if (content.style.display === "block") {
      content.style.display = "none";
    }
  });
}