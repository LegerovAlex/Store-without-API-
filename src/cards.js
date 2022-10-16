import { createElement } from "./createElement";
import { render } from "./render";
import { cardStore } from "./store";
import { CalcPriceWithSale } from "./CalcPriceWithSale";
const createCard = ({ id, title, priceLast, sale, img }) => {
  const cardItemsSale = createElement(
    "p",
    [document.createTextNode("-"), document.createTextNode(sale)],
    ["card-items__sale"]
  );

  const cardItemsButton = createElement("button", [], ["card-items__button"], {
    id: Number(id),
  });

  const cardItems = createElement(
    "div",
    [cardItemsSale, cardItemsButton],
    ["card-items"]
  );
  cardItems.style.backgroundImage = `url(${img})`;
  const cardPriceNow = createElement(
    "p",
    [
      document.createTextNode(CalcPriceWithSale(priceLast, sale)),
      document.createTextNode("$"),
    ],
    ["card-price__now"]
  );

  const cardPriceLast = createElement(
    "p",
    [document.createTextNode(priceLast), document.createTextNode("$")],
    ["card-price__last"]
  );
  const cardPrice = createElement(
    "div",
    [cardPriceNow, cardPriceLast],
    ["card-price"]
  );

  const cardName = createElement(
    "div",
    [document.createTextNode(title)],
    ["card__name"]
  );

  const card = createElement(
    "div",
    [cardItems, cardPrice, cardName],
    ["card"],
    {
      id: Number(id),
    }
  );

  return card;
};

cardStore.map((cardData) =>
  render(createCard({ ...cardData }), ".footer-cards")
);
