const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", function() {
    nav.classList.toggle("hide");
});

const gallery = document.querySelector(".gallery");
const viewer = document.querySelector(".view-hide");


function viewerTemplate(src,alt) {
    return '<img src="' + src + '" alt="' + alt + '">' +
           '<button class="close">x</button>';
}


window.addEventListener("resize", function() {
    if (window.innerWidth > 1000) {
        nav.classList.remove("hide");
    } else {
        nav.classList.add("hide");
    }
});

gallery.addEventListener("click", function(event) {
    const clicked = event.target;

    if (clicked.tagName !== "IMG") {
        return;
    }

    const smallPic = clicked.getAttribute("src");
    const imgText = clicked.getAttribute("alt");
    const fullPic = smallPic.replace("-sm", "-full");

    viewer.innerHTML = viewerTemplate(fullPic, imgText);
    viewer.classList.remove("hide");
});

viewer.addEventListener("click", function(event) {
    const clicked = event.target;

    if (clicked.classList.contains("close") || clicked === viewer) {
        viewer.classList.add("hide");
    }
});

if (window.innerWidth > 1000) {
    nav.classList.remove("hide");
}   else {
    nav.classList.add("hide");
}

/*Had to copy/paste JS after VS Code wouldn't save — force-closed and reopened the file.*/