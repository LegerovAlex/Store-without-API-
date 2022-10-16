import { createElement } from "./createElement";
import { render } from "./render";
import { cardStore } from "./store";

const createModalImg = () => {
  const footerModalContent = createElement("div", [], ["footer-modal-content"]);
  const footerModalInner = createElement(
    "div",
    [footerModalContent],
    ["footer-modal-inner"]
  );
  const footerModal = createElement(
    "div",
    [footerModalInner],
    ["footer-modal", "modal-none"]
  );

  return footerModal;
};

render(createModalImg(), ".footer-cards");

const itemsCard = document.querySelectorAll(".card-items");
itemsCard.forEach((element) => {
  element.addEventListener("click", showPicture);
});

function showPicture(event) {
  if (event.target.closest(".card-items") && !event.defaultPrevented) {
    console.log(event.target);

    const imgId = event.target.closest(".card").getAttribute("id");
    const { img } = cardStore.filter((card) => imgId === card.id.toString())[0];
    console.log(img, imgId);
    const footerModalContent = document.querySelector(".footer-modal-content");
    footerModalContent.style.backgroundImage = `url(${img})`;
    const footerModal = document.querySelector(".footer-modal");
    footerModal.classList.remove("modal-none");
  }
}

const footerModal = document.querySelector(".footer-modal");
footerModal.addEventListener("click", hidePicture);

function hidePicture(event) {
  if (event.target === footerModal) {
    footerModal.classList.add("modal-none");
  }
}
