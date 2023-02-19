// Function for the dropdown navbar
function dropdownToggle() {
    var content = document.getElementsByClassName("dropdown-content");
    var button = document.getElementsByClassName("drop-btn")[0];
    var arrowIcon = button.getElementsByClassName("arrow-icon")[0];

    for (var i = 0; i < content.length; i++) {
        if (content[i].style.display === "none") {
            content[i].style.display = "block";
            content[i].style.animation = "dropdownFadeIn 0.5s ease-in-out";
            arrowIcon.innerHTML = '<i class="fas fa-caret-up"></i>';
        } else {
            content[i].style.display = "none";
            content[i].style.animation = "dropdownFadeOut 0.5s ease-in-out";
            arrowIcon.innerHTML = '<i class="fas fa-caret-down"></i>';
        }
    }
}

document.getElementById("floatBtn").addEventListener("click", function() {
    // Scroll to the navigation bar
    document.getElementById('overviewSection').scrollIntoView();
});

// Button will be hidden if it has been navigated to the navbar. Otherwise, the button will appear again
window.addEventListener("scroll", function() {
    var overviewSection = document.getElementById("overviewSection");
    var floatBtn = document.getElementById("floatBtn");
    var sectionTop = overviewSection.getBoundingClientRect().top;
    
    if (sectionTop >= 0) {
      floatBtn.style.display = "none";
    } else {
      floatBtn.style.display = "block";
    }
});