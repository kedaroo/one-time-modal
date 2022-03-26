const modal = document.querySelector(".modal-backdrop");
const modalClose = document.querySelector(".modal-close");
const isNewVisitor = localStorage.getItem("visited");

modal.style.display = "block";

window.onload = () => {
    if (!isNewVisitor) {
        modal.style.display = "block";
        localStorage.setItem("visited", true);
    }
}

const eventHandler = () => {
    modal.style.display = "none";
}

modalClose.addEventListener("click", eventHandler);


