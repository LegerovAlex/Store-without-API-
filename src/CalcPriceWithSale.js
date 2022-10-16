function toPoint(percent) {
  let str = percent.replace("%", "");
  str = str / 100;
  return str;
}

export function CalcPriceWithSale(priceLast, percent) {
  const priceNow = priceLast - priceLast * toPoint(percent);
  return priceNow;
}
