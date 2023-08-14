window.addEventListener("hashchange", function () {
    const url = this.window.location.href;
    const [_, section = null] = url.split("#");

    if (section === "home" || !section) {
        document.getElementById("home").style.display = "table-cell";
    } else {
        document.getElementById("home").style.display = "none";
    }
});

let isSideBarOpen = false;
document.querySelector("#checkbtn").addEventListener("click", () => {
    let side = document.querySelector(".header")
if (isSideBarOpen){
    side.style.left = "-285px";
    isSideBarOpen = false;
}
else{
    isSideBarOpen = true;
    side.style.left = "-0px";
}
})


