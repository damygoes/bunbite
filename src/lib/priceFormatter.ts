export function formatPrice(price: number) {
  return (price / 100).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
}
