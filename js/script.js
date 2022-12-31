function toggleBtn() {
    var content = document.getElementsByClassName("dropdown-content");

    if (content.style.display === "none") {
        content.style.display = "block";
    }

    else {
        content.style.display = "none";
    }
}