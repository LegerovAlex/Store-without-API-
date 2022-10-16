import { cardStore } from "./store";
import { CalcPriceWithSale } from "./CalcPriceWithSale";

const itemsCard = document.querySelectorAll(".card-items");
itemsCard.forEach((element) => {
  element.addEventListener("click", addInfo);
});

export function addInfo(event) {
  if (event.target.closest(".card-items__button")) {
    event.preventDefault();
    const buttonId = event.target.getAttribute("id");
    const { title, sale, priceLast } = cardStore.filter(
      (card) => buttonId === card.id.toString()
    )[0];
    const mainJson = JSON.stringify({
      id: buttonId,
      title,
      priceNow: CalcPriceWithSale(priceLast, sale),
    });
    localStorage.setItem(buttonId, mainJson);
  }
}
