const modal = document.querySelector(".modal-backdrop");
const btnModalClose = document.querySelector(".btn-modal-close");
const isNewVisitor = localStorage.getItem("newVisitor");

console.log("isNewVisitor:", isNewVisitor);
console.log("!isNewVisitor:", !isNewVisitor);

if (!isNewVisitor) {
    modal.style.display = "block";
    localStorage.setItem("newVisitor", true);
}

const eventHandler = () => {
    modal.style.display = "none";
}

btnModalClose.addEventListener("click", eventHandler);


