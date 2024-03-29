function hideDropdown() {
        var dropdown = document.getElementById("optionsDropdown");
        dropdown.style.display = "none";
        var downIcon = document.getElementById("downIcon");
        var forwardIcon = document.getElementById("forwardIcon");
        downIcon.style.display = "inline";
        forwardIcon.style.display = "none";
}

var dropdownLinks = document.querySelectorAll(".dropdown-content a");
dropdownLinks.forEach(function(link) {
        link.addEventListener("click", function() {
                hideDropdown();
        });
});

document.getElementById("optionsButton").addEventListener("click", function() {
        var dropdown = document.getElementById("optionsDropdown");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        var downIcon = document.getElementById("downIcon");
        var forwardIcon = document.getElementById("forwardIcon");
        downIcon.style.display = downIcon.style.display === "none" ? "inline" : "none";
        forwardIcon.style.display = forwardIcon.style.display === "none" ? "inline" : "none";
});
document.getElementById("closeButton").addEventListener("click", function() {
  var container = document.querySelector(".container");
  if (container.classList.contains("hidden")) {
    container.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
  }
});