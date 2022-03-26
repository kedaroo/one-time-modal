const modal = document.querySelector(".modal-backdrop");
const btnModalClose = document.querySelector(".btn-modal-close");
const isNewVisitor = localStorage.getItem("visited");

window.onload = () => {
    if (!isNewVisitor) {
        modal.style.display = "block";
        localStorage.setItem("visited", true);
    }
}

const eventHandler = () => {
    modal.style.display = "none";
}

btnModalClose.addEventListener("click", eventHandler);


