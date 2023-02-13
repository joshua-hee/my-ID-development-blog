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